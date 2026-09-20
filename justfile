set shell := ["bash", "-uec"]

# List available recipes and descriptions by default.
default: help

# List available recipes and descriptions, including child modules.
help:
	@just --list --list-submodules

# Select and run a public argument-free recipe interactively.
run:
	@just --choose

# Remove generated and temporary outputs. Pass `force`/`f` to also drop node_modules.
[group('maintenance')]
clean force="":
	#!/usr/bin/env bash
	set -euo pipefail
	rm -rf dist
	if [[ "{{force}}" == "force" || "{{force}}" == "f" ]]; then
		rm -rf node_modules
	fi

# Format code and markdown owned by this scope.
[group('maintenance')]
format:
	pnpm format

# Format markdown files only.
[group('maintenance')]
format-md:
	pnpm format:md

# Run lint and format checks. Pass `fix` to apply tool-supported autofixes.
[group('maintenance')]
check fix="":
	#!/usr/bin/env bash
	set -euo pipefail
	if [[ "{{fix}}" == "fix" ]]; then
		pnpm exec biome check --write .
		pnpm format:md
	else
		pnpm check
	fi
