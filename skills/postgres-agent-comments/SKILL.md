---
name: postgres-agent-comments
description: Create, audit, or generate migrations for terse, LLM-friendly PostgreSQL COMMENT ON documentation. Use when documenting user-defined database objects or reviewing comment coverage and quality.
metadata:
  author: michaelbarzizza
  version: "1.2"
  category: database-documentation
---

# Comment PostgreSQL

Write token-efficient PostgreSQL comments that explain current business meaning and relationships to agents and humans.

Draft from schema, model, migration, and documentation files when database access is unavailable. Applying or reading back comments requires PostgreSQL access and sufficient privileges.

## PostgreSQL reference

Use [reference/PG_COMMENT_REFERENCE.md](reference/PG_COMMENT_REFERENCE.md) when exact PostgreSQL behavior matters.
This includes supported object kinds, `COMMENT ON` grammar, routine identity, privileges and locks, removal semantics, and catalog readback.

- Treat the reference as authoritative for PostgreSQL mechanics and this entrypoint as authoritative for editorial and workflow policy.
- In the generated reference, prioritize sections named `Define or Remove Comments in PostgreSQL`, `COMMENT`, `Retrieve database object comment in PostgreSQL`, and `col_description`.
  Ignore unrelated matches about lexical SQL comments, XML comments, PostgreSQL source-code comments, and non-`COMMENT ON` commands.
- When the request requires current upstream behavior and network access is permitted, refresh the snapshot with `scripts/fetch_pg_docs.sh` before using it.
  The script replaces the snapshot; inspect the resulting change and report whether refresh succeeded.

## Operating rules

- Describe the world as it is. Never mention migrations, former behavior, age, or implementation history.
- Lead with business purpose. Add relationship, ownership, scope, lifecycle, or unit semantics only when useful.
- Use terse fragments. Prefer concrete nouns and verbs; omit filler and repeated object names.
- Make cardinality and row grain explicit where they are not obvious.
- Explain keys, constraints, indexes, and policies by their verified domain effect or access purpose. Never write only `Primary key`, `Foreign key`, or `Lookup index`.
- Preserve verified domain vocabulary from models, migrations, tests, API contracts, and nearby documentation.
- Do not replace an accurate existing comment merely to impose different wording.
- Never infer uncertain business meaning from a name alone. Mark the item ambiguous, state what evidence is missing, and ask only when resolving it is necessary for the requested deliverable.
- Never place secrets, credentials, personal data, sensitive operational details, or volatile values in comments. PostgreSQL comments may be broadly visible.
- Cover every object in the user-selected scope. Do not silently broaden the scope; record an explicit reason for each approved skip.
- Do not execute `COMMENT ON` statements unless the user asked to apply changes. Treat production application as a separate, explicit action.

## Workflow

1. Infer the narrowest reasonable scope from the request and repository context. Ask only about choices that materially affect the deliverable or execution authority.
2. Inventory in-scope user-defined objects from authoritative DDL, migrations, models, or PostgreSQL catalogs. Exclude system and extension-owned objects unless requested.
3. Read relevant context: constraints, relationships, application usage, tests, API contracts, seed data, and domain documentation.
4. For a coverage audit or multi-object task, maintain a ledger with object identity, existing comment, proposed comment, evidence, and status: `keep`, `add`, `replace`, `ambiguous`, or `approved-skip`.
   A one-off comment does not need a ledger.
5. Draft comments for supported items. Report ambiguous items with focused questions instead of guessing or omitting them.
6. Review for current-state accuracy, coverage, security, brevity, and valid PostgreSQL object identity.
7. Emit deterministic `COMMENT ON` SQL. Schema-qualify where the grammar permits, preserve required identifier quoting, and identify routines with their input argument types.
   Prefer catalog-derived identities such as `pg_get_function_identity_arguments` when connected to PostgreSQL.
8. If application was requested and authorized, run the statements through the repository's normal migration or database workflow.
9. Read back applied comments from PostgreSQL catalogs or introspection output and compare them with the ledger.

## Style

Use compact fragments with one primary idea per sentence:

```text
Order lines. One row per purchased SKU.
Owning household. Access-scope anchor.
Signed amount in cents. Negative = refund.
Current lifecycle state. Drives fulfillment routing.
Prevents two active memberships per household.
Supports account timeline ordered newest first.
```

Avoid vague, historical, or structure-only comments:

```text
Stores order data.
This table was added for the new workflow.
Foreign key to households.
Index on created_at.
```

## SQL patterns

Use PostgreSQL `COMMENT ON` syntax appropriate to the exact object:

```sql
COMMENT ON SCHEMA commerce IS 'Commerce ordering domain.';
COMMENT ON TABLE commerce.order_lines IS 'Order lines. One row per purchased SKU.';
COMMENT ON COLUMN commerce.order_lines.order_id IS 'Owning order.';
COMMENT ON CONSTRAINT order_lines_order_id_fkey ON commerce.order_lines IS 'Line belongs to order. Delete cascades.';
COMMENT ON INDEX commerce.order_lines_created_at_idx IS 'Supports order timeline ordered newest first.';
COMMENT ON VIEW commerce.open_orders IS 'Orders still requiring fulfillment.';
COMMENT ON SEQUENCE commerce.order_lines_id_seq IS 'Generates order-line identifiers.';
COMMENT ON TRIGGER set_order_lines_updated_at ON commerce.order_lines IS 'Refreshes modification timestamp after row updates.';
COMMENT ON POLICY tenant_isolation ON commerce.order_lines IS 'Limits rows to current tenant.';
COMMENT ON FUNCTION commerce.order_total(bigint) IS 'Calculates current order total in cents.';
COMMENT ON PROCEDURE commerce.close_order(bigint) IS 'Closes fulfilled order.';
```

Escape single quotes in comment text by doubling them. Use `IS NULL` only when the user explicitly asks to remove an existing comment.

## Completion gate

- Coverage audits account for every in-scope object; unresolved ambiguity is reported as a finding.
- Finalized comments or migrations contain no unsupported claims; any blocking ambiguity is resolved or explicitly left out at the user's direction.
- Comments are accurate, terse, business-meaningful, current-state only, and free of sensitive data.
- Generated SQL is validated against the target PostgreSQL version when a suitable parser or database is available; otherwise clearly report that validation was not run.
- Routine identities include the argument list needed to distinguish overloads.
- Draft-only work remains unapplied.
- Applied work has read-back evidence matching the coverage ledger.
