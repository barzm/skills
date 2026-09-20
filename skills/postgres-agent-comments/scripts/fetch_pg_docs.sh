#!/usr/bin/env bash
# Fetch PostgreSQL COMMENT ON reference docs from Context7 into reference/.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
REFERENCE_DIR="${SKILL_DIR}/reference"
OUTPUT_FILE="${REFERENCE_DIR}/PG_COMMENT_REFERENCE.md"

SOURCE_URL='https://context7.com/websites/postgresql_current/llms.txt?topic=%23%23%23+Define+or+Remove+Comments+in+PostgreSQL&tokens=10000'

mkdir -p "${REFERENCE_DIR}"

TMP_FILE="$(mktemp)"
trap 'rm -f "${TMP_FILE}"' EXIT

HTTP_CODE="$(
  curl -fsSL \
    --retry 3 \
    --retry-delay 1 \
    -o "${TMP_FILE}" \
    -w '%{http_code}' \
    "${SOURCE_URL}"
)"

if [[ "${HTTP_CODE}" != "200" ]]; then
  echo "error: unexpected HTTP status ${HTTP_CODE} fetching ${SOURCE_URL}" >&2
  exit 1
fi

if [[ ! -s "${TMP_FILE}" ]]; then
  echo "error: empty response from ${SOURCE_URL}" >&2
  exit 1
fi

# Atomic overwrite of any existing reference file.
mv -f "${TMP_FILE}" "${OUTPUT_FILE}"
trap - EXIT

BYTES="$(wc -c < "${OUTPUT_FILE}" | tr -d ' ')"
echo "Wrote ${OUTPUT_FILE} (${BYTES} bytes)"
