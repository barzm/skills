### Define or Remove Comments in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-comment.html

Applies a comment string literal to a specified database object or removes it by setting the value to NULL.

```sql
COMMENT ON
{
  ACCESS METHOD _object_name_ |
  AGGREGATE _aggregate_name_ ( _aggregate_signature_ ) |
  CAST (_source_type_ AS _target_type_) |
  COLLATION _object_name_ |
  COLUMN _relation_name_._column_name_ |
  CONSTRAINT _constraint_name_ ON _table_name_ |
  CONSTRAINT _constraint_name_ ON DOMAIN _domain_name_ |
  CONVERSION _object_name_ |
  DATABASE _object_name_ |
  DOMAIN _object_name_ |
  EXTENSION _object_name_ |
  EVENT TRIGGER _object_name_ |
  FOREIGN DATA WRAPPER _object_name_ |
  FOREIGN TABLE _object_name_ |
  FUNCTION _function_name_ [ ( [ [ _argmode_ ] [ _argname_ ] _argtype_ [, ...] ] ) ] |
  INDEX _object_name_ |
  LARGE OBJECT _large_object_oid_ |
  MATERIALIZED VIEW _object_name_ |
  OPERATOR _operator_name_ (_left_type_, _right_type_) |
  OPERATOR CLASS _object_name_ USING _index_method_ |
  OPERATOR FAMILY _object_name_ USING _index_method_ |
  POLICY _policy_name_ ON _table_name_ |
  [ PROCEDURAL ] LANGUAGE _object_name_ |
  PROCEDURE _procedure_name_ [ ( [ [ _argmode_ ] [ _argname_ ] _argtype_ [, ...] ] ) ] |
  PUBLICATION _object_name_ |
  ROLE _object_name_ |
  ROUTINE _routine_name_ [ ( [ [ _argmode_ ] [ _argname_ ] _argtype_ [, ...] ] ) ] |
  RULE _rule_name_ ON _table_name_ |
  SCHEMA _object_name_ |
  SEQUENCE _object_name_ |
  SERVER _object_name_ |
  STATISTICS _object_name_ |
  SUBSCRIPTION _object_name_ |
  TABLE _object_name_ |
  TABLESPACE _object_name_ |
  TEXT SEARCH CONFIGURATION _object_name_ |
  TEXT SEARCH DICTIONARY _object_name_ |
  TEXT SEARCH PARSER _object_name_ |
  TEXT SEARCH TEMPLATE _object_name_ |
  TRANSFORM FOR _type_name_ LANGUAGE _lang_name_ |
  TRIGGER _trigger_name_ ON _table_name_ |
  TYPE _object_name_ |
  VIEW _object_name_
} IS { _string_literal_ | NULL }

where _aggregate_signature_ is:

* |
[ _argmode_ ] [ _argname_ ] _argtype_ [ , ... ] |
[ [ _argmode_ ] [ _argname_ ] _argtype_ [ , ... ] ] ORDER BY [ _argmode_ ] [ _argname_ ] _argtype_ [ , ... ]

```

--------------------------------

### Write a single-line SQL comment

Source: https://www.postgresql.org/docs/current/sql-syntax-lexical.html

Double dashes create a comment that extends to the end of the line. PostgreSQL removes comments prior to syntax analysis, treating them effectively as whitespace.

```sql
-- This is a standard SQL comment

```

--------------------------------

### Define comments on various PostgreSQL database objects in SQL

Source: https://www.postgresql.org/docs/current/sql-comment.html

Demonstrates setting and clearing comments across various object types such as access methods, aggregates, columns, functions, and views.

```sql
COMMENT ON ACCESS METHOD gin IS 'GIN index access method';
COMMENT ON AGGREGATE my_aggregate (double precision) IS 'Computes sample variance';
COMMENT ON CAST (text AS int4) IS 'Allow casts from text to int4';
COMMENT ON COLLATION "fr_CA" IS 'Canadian French';
COMMENT ON COLUMN my_table.my_column IS 'Employee ID number';
COMMENT ON CONVERSION my_conv IS 'Conversion to UTF8';
COMMENT ON CONSTRAINT bar_col_cons ON bar IS 'Constrains column col';
COMMENT ON CONSTRAINT dom_col_constr ON DOMAIN dom IS 'Constrains col of domain';
COMMENT ON DATABASE my_database IS 'Development Database';
COMMENT ON DOMAIN my_domain IS 'Email Address Domain';
COMMENT ON EVENT TRIGGER abort_ddl IS 'Aborts all DDL commands';
COMMENT ON EXTENSION hstore IS 'implements the hstore data type';
COMMENT ON FOREIGN DATA WRAPPER mywrapper IS 'my foreign data wrapper';
COMMENT ON FOREIGN TABLE my_foreign_table IS 'Employee Information in other database';
COMMENT ON FUNCTION my_function (timestamp) IS 'Returns Roman Numeral';
COMMENT ON INDEX my_index IS 'Enforces uniqueness on employee ID';
COMMENT ON LANGUAGE plpython IS 'Python support for stored procedures';
COMMENT ON LARGE OBJECT 346344 IS 'Planning document';
COMMENT ON MATERIALIZED VIEW my_matview IS 'Summary of order history';
COMMENT ON OPERATOR ^ (text, text) IS 'Performs intersection of two texts';
COMMENT ON OPERATOR - (NONE, integer) IS 'Unary minus';
COMMENT ON OPERATOR CLASS int4ops USING btree IS '4 byte integer operators for btrees';
COMMENT ON OPERATOR FAMILY integer_ops USING btree IS 'all integer operators for btrees';
COMMENT ON POLICY my_policy ON mytable IS 'Filter rows by users';
COMMENT ON PROCEDURE my_proc (integer, integer) IS 'Runs a report';
COMMENT ON PUBLICATION alltables IS 'Publishes all operations on all tables';
COMMENT ON ROLE my_role IS 'Administration group for finance tables';
COMMENT ON ROUTINE my_routine (integer, integer) IS 'Runs a routine (which is a function or procedure)';
COMMENT ON RULE my_rule ON my_table IS 'Logs updates of employee records';
COMMENT ON SCHEMA my_schema IS 'Departmental data';
COMMENT ON SEQUENCE my_sequence IS 'Used to generate primary keys';
COMMENT ON SERVER myserver IS 'my foreign server';
COMMENT ON STATISTICS my_statistics IS 'Improves planner row estimations';
COMMENT ON SUBSCRIPTION alltables IS 'Subscription for all operations on all tables';
COMMENT ON TABLE my_schema.my_table IS 'Employee Information';
COMMENT ON TABLESPACE my_tablespace IS 'Tablespace for indexes';
COMMENT ON TEXT SEARCH CONFIGURATION my_config IS 'Special word filtering';
COMMENT ON TEXT SEARCH DICTIONARY swedish IS 'Snowball stemmer for Swedish language';
COMMENT ON TEXT SEARCH PARSER my_parser IS 'Splits text into words';
COMMENT ON TEXT SEARCH TEMPLATE snowball IS 'Snowball stemmer';
COMMENT ON TRANSFORM FOR hstore LANGUAGE plpython3u IS 'Transform between hstore and Python dict';
COMMENT ON TRIGGER my_trigger ON my_table IS 'Used for RI';
COMMENT ON TYPE complex IS 'Complex number data type';
COMMENT ON VIEW my_view IS 'View of departmental costs';
COMMENT ON VIEW my_view IS NULL;

```

--------------------------------

### Define xmlcomment function signature in PostgreSQL

Source: https://www.postgresql.org/docs/current/functions-xml.html

Signature for creating an XML comment from a text value.

```sql
xmlcomment ( text ) → xml

```

--------------------------------

### Remove a comment from a table in SQL

Source: https://www.postgresql.org/docs/current/sql-comment.html

Removes an existing comment by setting the comment string to NULL.

```sql
COMMENT ON TABLE mytable IS NULL;

```

--------------------------------

### Define DROP TEXT SEARCH PARSER Syntax in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/sql-droptsparser.html

SQL command synopsis for removing a text search parser. Execution requires superuser privileges.

```sql
DROP TEXT SEARCH PARSER [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]

```

--------------------------------

### COMMENT

Source: https://www.postgresql.org/docs/current/sql-comment.html

Stores, replaces, or removes the comment associated with a specified database object. Only one comment string is retained per object, and setting NULL or an empty string removes the comment.

```APIDOC
## COMMENT

### Description
`COMMENT` stores, replaces, or removes the comment on a database object. Only one comment string is stored for each object. Issuing a new `COMMENT` command for the same object replaces the existing comment. Specifying `NULL` or an empty string (`''`) removes the comment. Comments are automatically dropped when their object is dropped.

### Parameters
- **object_name** / **relation_name.column_name** / **aggregate_name** / **constraint_name** / **function_name** / **operator_name** / **policy_name** / **procedure_name** / **routine_name** / **rule_name** / **trigger_name** - The name of the object to be commented. Names of objects that reside in schemas can be schema-qualified. When commenting on a column, `relation_name` must refer to a table, view, composite type, or foreign table.
- **table_name** / **domain_name** - When creating a comment on a constraint, trigger, rule, or policy, specifies the name of the table or domain on which that object is defined.
- **source_type** - The name of the source data type of the cast.
- **target_type** - The name of the target data type of the cast.
- **argmode** - The mode of a function, procedure, or aggregate argument (`IN`, `OUT`, `INOUT`, or `VARIADIC`). Default is `IN`.
- **argname** - The name of a function, procedure, or aggregate argument.
- **argtype** - The data type of a function, procedure, or aggregate argument.
- **large_object_oid** - The OID of the large object.
- **left_type** / **right_type** - The data type(s) of the operator's arguments (optionally schema-qualified). `NONE` is used for the missing argument of a prefix operator.
- **PROCEDURAL** - Noise word.
- **type_name** - The name of the data type of the transform.
- **lang_name** - The name of the language of the transform.
- **string_literal** - The new comment contents, written as a string literal. An empty string (`''`) removes the comment.
- **NULL** - Removes the comment.
```

--------------------------------

### Write a nested block comment in SQL

Source: https://www.postgresql.org/docs/current/sql-syntax-lexical.html

C-style block comments begin with /* and extend to matching */ delimiters. Unlike standard C, PostgreSQL supports nesting block comments to safely comment out blocks containing existing comments.

```sql
/* multiline comment
 * with nesting: /* nested block comment */
 */

```

--------------------------------

### Format standard multi-line comments in C

Source: https://www.postgresql.org/docs/current/source-format.html

Standard block comment style in PostgreSQL C code. Comments starting in column 1 are preserved as-is by pgindent.

```c
/*
 * comment text begins here
 * and continues here
 */
```

--------------------------------

### Syntax for DROP PUBLICATION in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-droppublication.html

Defines the command syntax for removing one or more publications. Supports the IF EXISTS clause to avoid errors if the publication is missing.

```sql
DROP PUBLICATION [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]

```

--------------------------------

### Remove a single function in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropfunction.html

Specify argument types to target a specific overloaded function signature for removal.

```sql
DROP FUNCTION sqrt(integer);

```

--------------------------------

### Retrieve database object comment in PostgreSQL

Source: https://www.postgresql.org/docs/current/functions-info.html

Retrieves the comment for a database object using its OID and containing catalog name. Returns null if no comment is found.

```sql
obj_description(123456, 'pg_class')
```

--------------------------------

### Create XML comment using xmlcomment in PostgreSQL

Source: https://www.postgresql.org/docs/current/functions-xml.html

Constructs an XML comment block. Input cannot contain "--" or end with "-".

```sql
SELECT xmlcomment('hello');

  xmlcomment
--------------
 <!--hello-->

```

--------------------------------

### TRUNCATE statement syntax in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-truncate.html

Defines the command syntax for quickly removing all rows from one or more tables, reclaiming disk space immediately.

```sql
TRUNCATE [ TABLE ] [ ONLY ] _name_ [ * ] [, ... ]
    [ RESTART IDENTITY | CONTINUE IDENTITY ] [ CASCADE | RESTRICT ]

```

--------------------------------

### DELETE statement synopsis in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/sql-delete.html

Defines the full command structure for removing rows from a table in PostgreSQL. Requires DELETE privileges on the target table and SELECT privileges on any referenced tables.

```sql
[ WITH [ RECURSIVE ] _with_query_ [, ...] ]
DELETE FROM [ ONLY ] _table_name_ [ * ] [ [ AS ] _alias_ ]
    [ USING _from_item_ [, ...] ]
    [ WHERE _condition_ | WHERE CURRENT OF _cursor_name_ ]
    [ RETURNING [ WITH ( { OLD | NEW } AS _output_alias_ [, ...] ) ]
                { * | _output_expression_ [ [ AS ] _output_name_ ] } [, ...] ]
```

--------------------------------

### Define INSERT statement syntax in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-insert.html

Defines the complete syntax structure for inserting new rows into PostgreSQL tables. Includes optional clauses for CTEs, overriding values, conflict resolution, and returning output expressions.

```sql
[ WITH [ RECURSIVE ] _with_query_ [, ...] ]
INSERT INTO _table_name_ [ AS _alias_ ] [ ( _column_name_ [, ...] ) ]
    [ OVERRIDING { SYSTEM | USER } VALUE ]
    { DEFAULT VALUES | VALUES ( { _expression_ | DEFAULT } [, ...] ) [, ...] | _query_ }
    [ ON CONFLICT [ _conflict_target_ ] _conflict_action_ ]
    [ RETURNING [ WITH ( { OLD | NEW } AS _output_alias_ [, ...] ) ]
                { * | _output_expression_ [ [ AS ] _output_name_ ] } [, ...] ]

where _conflict_target_ can be one of:

    ( { _index_column_name_ | ( _index_expression_ ) } [ COLLATE _collation_ ] [ _opclass_ ] [, ...] ) [ WHERE _index_predicate_ ]
    ON CONSTRAINT _constraint_name_

and _conflict_action_ is one of:

    DO NOTHING
    DO UPDATE SET { _column_name_ = { _expression_ | DEFAULT } |
                    ( _column_name_ [, ...] ) = [ ROW ] ( { _expression_ | DEFAULT } [, ...] ) |
                    ( _column_name_ [, ...] ) = ( _sub-SELECT_ )
                  } [, ...]
              [ WHERE _condition_ ]

```

--------------------------------

### Define view syntax in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/sql-createview.html

Defines the command synopsis for creating, replacing, or configuring temporary, recursive, and standard views in PostgreSQL.

```sql
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] [ RECURSIVE ] VIEW _name_ [ ( _column_name_ [, ...] ) ]
    [ WITH ( _view_option_name_ [= _view_option_value_] [, ... ] ) ]
    AS _query_
    [ WITH [ CASCADED | LOCAL ] CHECK OPTION ]
```

--------------------------------

### Drop a Column Default Value in PostgreSQL

Source: https://www.postgresql.org/docs/current/ddl-alter.html

Removes a defined default value so that omitted columns default to null. It succeeds even if no explicit default was previously defined.

```sql
ALTER TABLE products ALTER COLUMN price DROP DEFAULT;

```

--------------------------------

### SQL DROP INDEX Syntax Synopsis

Source: https://www.postgresql.org/docs/current/sql-dropindex.html

Defines the full command syntax for removing one or more indexes in PostgreSQL. Supports options for concurrency, conditional checks, and dependency handling.

```sql
DROP INDEX [ CONCURRENTLY ] [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]

```

--------------------------------

### Trim Characters from String in PostgreSQL

Source: https://www.postgresql.org/docs/current/functions-string.html

Removes specified characters from the beginning, end, or both ends of a string.

```sql
trim(both 'xyz' from 'yxTomxx')
```

```sql
trim(both from 'yxTomxx', 'xyz')
```

--------------------------------

### Delete all rows from a table in PostgreSQL

Source: https://www.postgresql.org/docs/current/dml-delete.html

Removes every row from the specified table when no WHERE condition is provided.

```sql
DELETE FROM products;

```

--------------------------------

### Delete with RETURNING Clause in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-delete.html

Deletes rows while returning values from the removed records.

```sql
DELETE FROM tasks WHERE status = 'DONE' RETURNING *;

```

--------------------------------

### Remove Table in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/tutorial-table.html

Deletes an existing table when it is no longer needed or must be recreated.

```sql
DROP TABLE _tablename_;

```

--------------------------------

### Specify circle values in PostgreSQL

Source: https://www.postgresql.org/docs/current/datatype-geometric.html

Lists valid input syntaxes for defining circles via a center point and radius. PostgreSQL outputs circle values using the first syntax.

```sql
< ( _x_ , _y_ ) , _r_ >
( ( _x_ , _y_ ) , _r_ )
  ( _x_ , _y_ ) , _r_
    _x_ , _y_   , _r_

```

--------------------------------

### DROP COLLATION

Source: https://www.postgresql.org/docs/current/sql-dropcollation.html

Removes a previously defined collation from PostgreSQL. Requires ownership of the collation being dropped.

```APIDOC
## DROP COLLATION

### Description
`DROP COLLATION` removes a previously defined collation. To be able to drop a collation, you must own the collation.

### Syntax
```sql
DROP COLLATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

### Parameters
- **IF EXISTS** - Do not throw an error if the collation does not exist. A notice is issued in this case.
- **name** - The name of the collation. The collation name can be schema-qualified.
- **CASCADE** - Automatically drop objects that depend on the collation, and in turn all objects that depend on those objects.
- **RESTRICT** - Refuse to drop the collation if any objects depend on it. This is the default.

### Examples
To drop the collation named `german`:
```sql
DROP COLLATION german;
```
```

--------------------------------

### Drop transform for hstore and plpython3u in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-droptransform.html

Removes the transform defined between the hstore type and the plpython3u language.

```sql
DROP TRANSFORM FOR hstore LANGUAGE plpython3u;

```

--------------------------------

### Syntax for DROP USER MAPPING command in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropusermapping.html

Defines the command structure for removing a user mapping from a foreign server.

```sql
DROP USER MAPPING [ IF EXISTS ] FOR { _user_name_ | USER | CURRENT_ROLE | CURRENT_USER | PUBLIC } SERVER _server_name_

```

--------------------------------

### Define string-literal SQL function with external dependencies in PostgreSQL

Source: https://www.postgresql.org/docs/current/ddl-depend.html

Functions defined with string literals track dependencies only for external signatures like argument and return types, ignoring internal table references.

```sql
CREATE TYPE rainbow AS ENUM ('red', 'orange', 'yellow',
                             'green', 'blue', 'purple');

CREATE TABLE my_colors (color rainbow, note text);

CREATE FUNCTION get_color_note (rainbow) RETURNS text AS
  'SELECT note FROM my_colors WHERE color = $1'
  LANGUAGE SQL;
```

--------------------------------

### Define SQL Signature for Planner Support Function

Source: https://www.postgresql.org/docs/current/xfunc-optimization.html

Specifies the required SQL signature for a planner support function. Attach this function to a target function using the SUPPORT clause during CREATE FUNCTION.

```sql
supportfn(internal) returns internal

```

--------------------------------

### Drop a sequence in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropsequence.html

Removes the specified sequence from the database. Requires sequence ownership or superuser privileges.

```sql
DROP SEQUENCE serial;

```

--------------------------------

### Syntax for DROP FUNCTION in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropfunction.html

Standard synopsis for removing existing functions with optional dependency handling and argument specifications.

```sql
DROP FUNCTION [ IF EXISTS ] _name_ [ ( [ [ _argmode_ ] [ _argname_ ] _argtype_ [, ...] ] ) ] [, ...]
    [ CASCADE | RESTRICT ]

```

--------------------------------

### Add a comment to a table in SQL

Source: https://www.postgresql.org/docs/current/sql-comment.html

Associates descriptive metadata with a table. Note that comments are publicly visible to any connected user and should not contain sensitive information.

```sql
COMMENT ON TABLE mytable IS 'This is my table.';

```

--------------------------------

### Syntax for DROP EXTENSION in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropextension.html

General command syntax for dropping one or more extensions.

```sql
DROP EXTENSION [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]

```

--------------------------------

### Define custom ICU collations in PostgreSQL

Source: https://www.postgresql.org/docs/current/collation.html

Requires PostgreSQL with ICU provider support. Use deterministic = false when defining collations that treat non-identical characters as equal.

```sql
-- ignore differences in accents and case
CREATE COLLATION ignore_accent_case (provider = icu, deterministic = false, locale = 'und-u-ks-level1');
SELECT 'Å' = 'A' COLLATE ignore_accent_case; -- true
SELECT 'z' = 'Z' COLLATE ignore_accent_case; -- true

-- upper case letters sort before lower case.
CREATE COLLATION upper_first (provider = icu, locale = 'und-u-kf-upper');
SELECT 'B' < 'b' COLLATE upper_first; -- true

-- treat digits numerically and ignore punctuation
CREATE COLLATION num_ignore_punct (provider = icu, deterministic = false, locale = 'und-u-ka-shifted-kn');
SELECT 'id-45' < 'id-123' COLLATE num_ignore_punct; -- true
SELECT 'w;x*y-z' = 'wxyz' COLLATE num_ignore_punct; -- true

```

--------------------------------

### Drop a zero-argument function in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropfunction.html

Targets specifically a function defined with zero arguments using empty parentheses.

```sql
DROP FUNCTION update_employee_salaries();

```

--------------------------------

### Revoke Access Privileges in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-revoke.html

Defines the full command syntax for removing previously granted access privileges and role memberships from one or more roles. Use CASCADE to recursively revoke dependent privileges or RESTRICT (default) to refuse if dependent privileges exist.

```sql
REVOKE [ GRANT OPTION FOR ]
    { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER | MAINTAIN }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { [ TABLE ] _table_name_ [, ...]
         | ALL TABLES IN SCHEMA _schema_name_ [, ...] }
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { SELECT | INSERT | UPDATE | REFERENCES } ( _column_name_ [, ...] )
    [, ...] | ALL [ PRIVILEGES ] ( _column_name_ [, ...] ) }
    ON [ TABLE ] _table_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { USAGE | SELECT | UPDATE }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { SEQUENCE _sequence_name_ [, ...]
         | ALL SEQUENCES IN SCHEMA _schema_name_ [, ...] }
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { CREATE | CONNECT | TEMPORARY | TEMP } [, ...] | ALL [ PRIVILEGES ] }
    ON DATABASE _database_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON DOMAIN _domain_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN DATA WRAPPER _fdw_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN SERVER _server_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { EXECUTE | ALL [ PRIVILEGES ] }
    ON { { FUNCTION | PROCEDURE | ROUTINE } _function_name_ [ ( [ [ _argmode_ ] [ _arg_name_ ] _arg_type_ [, ...] ] ) ] [, ...]
         | ALL { FUNCTIONS | PROCEDURES | ROUTINES } IN SCHEMA _schema_name_ [, ...] }
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON LANGUAGE _lang_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
    ON LARGE OBJECT _loid_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { SET | ALTER SYSTEM } [, ...] | ALL [ PRIVILEGES ] }
    ON PARAMETER _configuration_parameter_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { CREATE | USAGE } [, ...] | ALL [ PRIVILEGES ] }
    ON SCHEMA _schema_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { CREATE | ALL [ PRIVILEGES ] }
    ON TABLESPACE _tablespace_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON TYPE _type_name_ [, ...]
    FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

REVOKE [ { ADMIN | INHERIT | SET } OPTION FOR ]
    _role_name_ [, ...] FROM _role_specification_ [, ...]
    [ GRANTED BY _role_specification_ ]
    [ CASCADE | RESTRICT ]

where _role_specification_ can be:

    [ GROUP ] _role_name_
  | PUBLIC
  | CURRENT_ROLE
  | CURRENT_USER
  | SESSION_USER
```

--------------------------------

### col_description(table oid, column integer)

Source: https://www.postgresql.org/docs/current/functions-info.html

Returns the comment for a table column specified by the table OID and column number. Returns null if no comment could be found.

```APIDOC
## col_description(table oid, column integer) -> text

### Description
Returns the comment for a table column, which is specified by the OID of its table and its column number. (`obj_description` cannot be used for table columns, since columns do not have OIDs of their own.)

### Parameters
- **table** (`oid`) - OID of the table
- **column** (`integer`) - Column number within the table

### Return Value
- **return** (`text`) - The comment string, or `NULL` if no comment was found
```

--------------------------------

### Define a Database Role with CREATE USER in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createuser.html

Defines a new PostgreSQL user role with LOGIN enabled by default. Multiple role attributes, authentication options, and initial group memberships can be specified.

```sql
CREATE USER _name_ [ [ WITH ] _option_ [ ... ] ]

where _option_ can be:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT _connlimit_
    | [ ENCRYPTED ] PASSWORD '_password_' | PASSWORD NULL
    | VALID UNTIL '_timestamp_'
    | IN ROLE _role_name_ [, ...]
    | IN GROUP _role_name_ [, ...]
    | ROLE _role_name_ [, ...]
    | ADMIN _role_name_ [, ...]
    | USER _role_name_ [, ...]
    | SYSID _uid_
```

--------------------------------

### Define rule syntax in PostgreSQL

Source: https://www.postgresql.org/docs/current/rules-update.html

General command syntax for creating or replacing rules on database tables and views.

```sql
CREATE [ OR REPLACE ] RULE _name_ AS ON _event_
    TO _table_ [ WHERE _condition_ ]
    DO [ ALSO | INSTEAD ] { NOTHING | _command_ | ( _command_ ; _command_ ... ) }

```

--------------------------------

### Drop multiple functions in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropfunction.html

Specify comma-separated function signatures to drop multiple functions in a single statement.

```sql
DROP FUNCTION sqrt(integer), sqrt(bigint);

```

--------------------------------

### Remove User on Default Server

Source: https://www.postgresql.org/docs/current/app-dropuser.html

Removes the specified user role from the default PostgreSQL server connection.

```shell
$ **dropuser joe**

```

--------------------------------

### Define separate table check constraints in PostgreSQL

Source: https://www.postgresql.org/docs/current/ddl-constraints.html

Defines each check constraint as a standalone table-level item rather than inline with column definitions. This approach improves portability across relational database management systems.

```sql
CREATE TABLE products (
    product_no integer,
    name text,
    price numeric,
    CHECK (price > 0),
    discounted_price numeric,
    CHECK (discounted_price > 0),
    CHECK (price > discounted_price)
);
```

--------------------------------

### Remove an Extension in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropextension.html

Drops a specific extension from the database. This command fails if other objects depend on it unless CASCADE is supplied.

```sql
DROP EXTENSION hstore;

```

--------------------------------

### Right Trim Characters in PostgreSQL

Source: https://www.postgresql.org/docs/current/functions-string.html

Removes the longest sequence of specified characters from the end of a string (defaults to space).

```sql
rtrim('testxxzx', 'xyz')
```

--------------------------------

### Drop a Rewrite Rule in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-droprule.html

Deletes the specified rewrite rule from a table.

```sql
DROP RULE newrule ON mytable;

```

--------------------------------

### Remove a role password in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-alterrole.html

Sets the role password to NULL, removing the requirement or ability to authenticate via password.

```sql
ALTER ROLE davide WITH PASSWORD NULL;

```

--------------------------------

### Define tablespace synopsis in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/sql-createtablespace.html

Outlines the complete syntax for defining a new tablespace. Cannot be executed within a transaction block.

```sql
CREATE TABLESPACE _tablespace_name_
    [ OWNER { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER } ]
    LOCATION '_directory_'
    [ WITH ( _tablespace_option_ = _value_ [, ... ] ) ]

```

--------------------------------

### Define a check column constraint in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createtable.html

Enforces a validation rule directly on an individual column definition.

```sql
CREATE TABLE distributors (
    did     integer CHECK (did > 100),
    name    varchar(40)
);
```

--------------------------------

### Define a procedural language and call handler in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createlanguage.html

Requires creating a call handler function returning language_handler before defining the language.

```sql
CREATE FUNCTION plsample_call_handler() RETURNS language_handler
    AS '$libdir/plsample'
    LANGUAGE C;
CREATE LANGUAGE plsample
    HANDLER plsample_call_handler;

```

--------------------------------

### Syntax Synopsis for ROLLBACK Statement in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-rollback.html

Defines the formal syntax for aborting transactions in PostgreSQL, including optional chaining parameters.

```sql
ROLLBACK [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]

```

--------------------------------

### Drop a function by unique name in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropfunction.html

Can only be used when the function name is unique within its schema regardless of its argument count.

```sql
DROP FUNCTION update_employee_salaries;

```

--------------------------------

### Define CREATE DATABASE syntax in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/sql-createdatabase.html

Requires superuser status or the CREATEDB privilege to execute. Clones template1 by default unless another template such as template0 is specified.

```sql
CREATE DATABASE _name_
    [ WITH ] [ OWNER [=] _user_name_ ]
           [ TEMPLATE [=] _template_ ]
           [ ENCODING [=] _encoding_ ]
           [ STRATEGY [=] _strategy_ ]
           [ LOCALE [=] _locale_ ]
           [ LC_COLLATE [=] _lc_collate_ ]
           [ LC_CTYPE [=] _lc_ctype_ ]
           [ BUILTIN_LOCALE [=] _builtin_locale_ ]
           [ ICU_LOCALE [=] _icu_locale_ ]
           [ ICU_RULES [=] _icu_rules_ ]
           [ LOCALE_PROVIDER [=] _locale_provider_ ]
           [ COLLATION_VERSION = _collation_version_ ]
           [ TABLESPACE [=] _tablespace_name_ ]
           [ ALLOW_CONNECTIONS [=] _allowconn_ ]
           [ CONNECTION LIMIT [=] _connlimit_ ]
           [ IS_TEMPLATE [=] _istemplate_ ]
           [ OID [=] _oid_ ]
```

--------------------------------

### Define window function call syntax in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-expressions.html

Defines the syntax options for invoking window functions over partitioned or ordered sets of rows.

```sql
_function_name_ ([_expression_ [, _expression_ ... ]]) [ FILTER ( WHERE _filter_clause_ ) ] OVER _window_name_
_function_name_ ([_expression_ [, _expression_ ... ]]) [ FILTER ( WHERE _filter_clause_ ) ] OVER ( _window_definition_ )
_function_name_ ( * ) [ FILTER ( WHERE _filter_clause_ ) ] OVER _window_name_
_function_name_ ( * ) [ FILTER ( WHERE _filter_clause_ ) ] OVER ( _window_definition_ )

```

--------------------------------

### Define a new publication in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createpublication.html

Defines a logical replication publication in the current database. The publication name must be unique within the database.

```sql
CREATE PUBLICATION _name_
    [ FOR ALL TABLES
      | FOR _publication_object_ [, ... ] ]
    [ WITH ( _publication_parameter_ [= _value_] [, ... ] ) ]

where _publication_object_ is one of:

    TABLE _table_and_columns_ [, ... ]
    TABLES IN SCHEMA { _schema_name_ | CURRENT_SCHEMA } [, ... ]

and _table_and_columns_ is:

    [ ONLY ] _table_name_ [ * ] [ ( _column_name_ [, ... ] ) ] [ WHERE ( _expression_ ) ]
```

--------------------------------

### Specify DROP SCHEMA syntax in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-dropschema.html

Defines the command syntax for dropping one or more schemas. Supports optional non-existence handling and dependency cascading.

```sql
DROP SCHEMA [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]

```

--------------------------------

### Define an Index in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createindex.html

Defines the complete syntax for creating standard, unique, concurrent, expression-based, or partial indexes on tables and materialized views.

```sql
CREATE [ UNIQUE ] INDEX [ CONCURRENTLY ] [ [ IF NOT EXISTS ] _name_ ] ON [ ONLY ] _table_name_ [ USING _method_ ]
    ( { _column_name_ | ( _expression_ ) } [ COLLATE _collation_ ] [ _opclass_ [ ( _opclass_parameter_ = _value_ [, ... ] ) ] ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [, ...] )
    [ INCLUDE ( _column_name_ [, ...] ) ]
    [ NULLS [ NOT ] DISTINCT ]
    [ WITH ( _storage_parameter_ [= _value_] [, ... ] ) ]
    [ TABLESPACE _tablespace_name_ ]
    [ WHERE _predicate_ ]

```

--------------------------------

### Group statements into a transaction block in PostgreSQL

Source: https://www.postgresql.org/docs/current/tutorial-transactions.html

Wraps SQL statements within BEGIN and COMMIT to ensure atomic execution. Use ROLLBACK instead of COMMIT if changes need to be aborted partway through.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100.00
    WHERE name = 'Alice';
-- etc etc
COMMIT;

```

--------------------------------

### Define a composite primary key in PostgreSQL

Source: https://www.postgresql.org/docs/current/ddl-constraints.html

Defines a multi-column primary key as a table constraint, automatically marking all involved columns as NOT NULL.

```sql
CREATE TABLE example (
    a integer,
    b integer,
    c integer,
    **PRIMARY KEY (a, c)**
);

```

--------------------------------

### Drop foreign table command syntax in SQL

Source: https://www.postgresql.org/docs/current/sql-dropforeigntable.html

Defines the syntax for removing one or more foreign tables. Only the owner of a foreign table can remove it.

```sql
DROP FOREIGN TABLE [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]

```

--------------------------------

### Assign default values using literals, sequences, and functions in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createtable.html

Configures columns with string literal, sequence generator, and current timestamp default expressions.

```sql
CREATE TABLE distributors (
    name      varchar(40) DEFAULT 'Luso Films',
    did       integer DEFAULT nextval('distributors_serial'),
    modtime   timestamp DEFAULT current_timestamp
);
```

--------------------------------

### Define an exclusion constraint using GiST in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createtable.html

Prevents overlapping geometric circles using a GiST-backed exclusion constraint.

```sql
CREATE TABLE circles (
    c circle,
    EXCLUDE USING gist (c WITH &&)
);
```

--------------------------------

### Define a cast in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createcast.html

Defines a new conversion between data types using a function, binary compatibility (WITHOUT FUNCTION), or I/O conversion (WITH INOUT).

```sql
CREATE CAST (_source_type_ AS _target_type_)
    WITH FUNCTION _function_name_ [ (_argument_type_ [, ...]) ]
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (_source_type_ AS _target_type_)
    WITHOUT FUNCTION
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (_source_type_ AS _target_type_)
    WITH INOUT
    [ AS ASSIGNMENT | AS IMPLICIT ]
```

--------------------------------

### Define a rewrite rule with CREATE RULE in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createrule.html

Specifies the syntax for defining or replacing an query rewrite rule on a table or view. Rules transform incoming commands before execution rather than operating per physical row.

```sql
CREATE [ OR REPLACE ] RULE _name_ AS ON _event_
    TO _table_name_ [ WHERE _condition_ ]
    DO [ ALSO | INSTEAD ] { NOTHING | _command_ | ( _command_ ; _command_ ... ) }

where _event_ can be one of:

    SELECT | INSERT | UPDATE | DELETE

```

--------------------------------

### Define a custom float range type in PostgreSQL

Source: https://www.postgresql.org/docs/current/rangetypes.html

Defines a custom range type over float8 using the built-in float8mi function as subtype_diff. Defining a range type automatically generates an equivalent multirange type.

```sql
CREATE TYPE floatrange AS RANGE (
    subtype = float8,
    subtype_diff = float8mi
);

SELECT '[1.234, 5.678]'::floatrange;

```

--------------------------------

### Specify Composite Literal Constants in PostgreSQL

Source: https://www.postgresql.org/docs/current/rowtypes.html

Examples showing valid composite literals, including handling double quotes, empty strings, and explicit NULL fields by omitting characters.

```sql
'("fuzzy dice",42,1.99)'
```

```sql
'("fuzzy dice",42,)'
```

```sql
'("",42,)'
```

--------------------------------

### Define Composite Types in PostgreSQL

Source: https://www.postgresql.org/docs/current/rowtypes.html

Define composite types representing a structured row or record using CREATE TYPE. Constraints cannot be included in the type definition.

```sql
CREATE TYPE complex AS (
    r       double precision,
    i       double precision
);

CREATE TYPE inventory_item AS (
    name            text,
    supplier_id     integer,
    price           numeric
);
```

--------------------------------

### Specify polygon values in PostgreSQL

Source: https://www.postgresql.org/docs/current/datatype-geometric.html

Lists valid input syntaxes for defining a polygon by its vertex points. PostgreSQL outputs polygons using the first syntax.

```sql
( ( _x1_ , _y1_ ) , ... , ( _xn_ , _yn_ ) )
  ( _x1_ , _y1_ ) , ... , ( _xn_ , _yn_ )
  ( _x1_ , _y1_   , ... ,   _xn_ , _yn_ )
    _x1_ , _y1_   , ... ,   _xn_ , _yn_

```

--------------------------------

### Define function syntax in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-createfunction.html

Defines or updates a function specification with attributes such as execution cost, language, parallel safety, and behavior on null input. Requires USAGE privileges on the referenced language and argument/return data types.

```sql
CREATE [ OR REPLACE ] FUNCTION
    _name_ ( [ [ _argmode_ ] [ _argname_ ] _argtype_ [ { DEFAULT | = } _default_expr_ ] [, ...] ] )
    [ RETURNS _rettype_
      | RETURNS TABLE ( _column_name_ _column_type_ [, ...] ) ]
  { LANGUAGE _lang_name_
    | TRANSFORM { FOR TYPE _type_name_ } [, ... ]
    | WINDOW
    | { IMMUTABLE | STABLE | VOLATILE }
    | [ NOT ] LEAKPROOF
    | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
    | { [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER }
    | PARALLEL { UNSAFE | RESTRICTED | SAFE }
    | COST _execution_cost_
    | ROWS _result_rows_
    | SUPPORT _support_function_
    | SET _configuration_parameter_ { TO _value_ | = _value_ | FROM CURRENT }
    | AS '_definition_'
    | AS '_obj_file_', '_link_symbol_'
    | _sql_body_
  } ...
```

--------------------------------

### Define custom operator in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/sql-createoperator.html

Defines a custom binary operator for a specific data type with commutator, negator, and optimizer estimation functions. Ensure the underlying functions are already defined in the database before creating the operator.

```sql
CREATE OPERATOR === (
    LEFTARG = box,
    RIGHTARG = box,
    FUNCTION = area_equal_function,
    COMMUTATOR = ===,
    NEGATOR = !==,
    RESTRICT = area_restriction_function,
    JOIN = area_join_function,
    HASHES, MERGES
);
```

--------------------------------

### Create expression index using lower() in PostgreSQL

Source: https://www.postgresql.org/docs/current/indexes-expressional.html

Enables fast retrieval and optional unique constraints for queries comparing lowercased column values. Parentheses around the expression can be omitted for simple function calls.

```sql
CREATE INDEX test1_lower_col1_idx ON test1 (lower(col1));

```

--------------------------------

### Drop a publication in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-droppublication.html

Removes a specific publication named mypublication from the database.

```sql
DROP PUBLICATION mypublication;

```

--------------------------------

### Rebuild All Table Indexes in PostgreSQL

Source: https://www.postgresql.org/docs/current/sql-reindex.html

Recreates all indexes defined on the specified table.

```sql
REINDEX TABLE my_table;

```

--------------------------------

### Drop a column from a table in PostgreSQL SQL

Source: https://www.postgresql.org/docs/current/ddl-alter.html

Removes a column and drops associated table constraints. Fails if other database objects, such as foreign keys in other tables, depend on the column.

```sql
ALTER TABLE products DROP COLUMN description;

```

--------------------------------

### Define xmlagg signature in PostgreSQL

Source: https://www.postgresql.org/docs/current/functions-xml.html

Syntax signature for the xmlagg aggregate function.

```sql
xmlagg ( xml ) → xml

```

--------------------------------

### Demonstrate IN List Constant Normalization in pg_stat_statements

Source: https://www.postgresql.org/docs/current/pgstatstatements.html

Shows how queries with differing IN-list lengths normalize into a single pg_stat_statements entry using commented-out list notation. Requires compute_query_id to be enabled.

```sql
=# SELECT pg_stat_statements_reset();
=# SELECT * FROM test WHERE a IN (1, 2, 3, 4, 5, 6, 7);
=# SELECT * FROM test WHERE a IN (1, 2, 3, 4, 5, 6, 7, 8);
=# SELECT query, calls FROM pg_stat_statements
   WHERE query LIKE 'SELECT%';
-[ RECORD 1 ]------------------------------
query | SELECT * FROM test WHERE a IN ($1 /*, ... */)
calls | 2

```

--------------------------------

### Grant and revoke role membership in PostgreSQL

Source: https://www.postgresql.org/docs/current/role-membership.html

Adds or removes user or group roles from a group role. PostgreSQL disallows circular membership loops and grants to PUBLIC.

```sql
GRANT _group_role_ TO _role1_, ... ;
REVOKE _group_role_ FROM _role1_, ... ;

```

--------------------------------

### Syntax for UPDATE and DELETE WHERE CURRENT OF in PL/pgSQL

Source: https://www.postgresql.org/docs/current/plpgsql-cursors.html

Defines the syntax for modifying or deleting the table row currently referenced by a cursor.

```sql
UPDATE _table_ SET ... WHERE CURRENT OF _cursor_;
DELETE FROM _table_ WHERE CURRENT OF _cursor_;

```

--------------------------------

### Define ORDER BY clause syntax in PostgreSQL

Source: https://www.postgresql.org/docs/current/queries-order.html

Defines the general syntax for sorting query results using sort expressions, direction keywords, and null placement options.

```sql
SELECT _select_list_
    FROM _table_expression_
    ORDER BY _sort_expression1_ [ASC | DESC] [NULLS { FIRST | LAST }]
             [, _sort_expression2_ [ASC | DESC] [NULLS { FIRST | LAST }] ...]

```