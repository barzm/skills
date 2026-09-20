#!/usr/bin/env node
import { execFileSync } from "node:child_process";
/**
 * Build Agent Skills discovery artifacts into dist/.
 * Mirrors vercel-labs/agent-skills discovery packaging for skills.sh / agentskills.io.
 *
 * Usage:
 *   node scripts/build-discovery-index.mjs [artifact-base-url]
 *
 * Example (GitHub Release):
 *   node scripts/build-discovery-index.mjs \
 *     https://github.com/barzm/skills/releases/download/agent-skills-<sha>
 */
import { createHash } from "node:crypto";
import {
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SKILLS_DIR = join(ROOT, "skills");
const OUTPUT_DIR = join(ROOT, "dist");
const SCHEMA = "https://schemas.agentskills.io/discovery/0.2.0/schema.json";
const BASE_URL = (process.argv[2] ?? "https://example.com/skills").replace(
	/\/$/,
	"",
);

const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function listSkillDirectories() {
	return readdirSync(SKILLS_DIR, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
		.map((entry) => entry.name)
		.sort((a, b) => a.localeCompare(b));
}

function readMetadata(directory) {
	const path = join(SKILLS_DIR, directory, "SKILL.md");
	let source;
	try {
		source = readFileSync(path, "utf8");
	} catch {
		throw new Error(`Missing SKILL.md in skills/${directory}`);
	}

	const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
	if (!frontmatter) {
		throw new Error(`Missing frontmatter in skills/${directory}/SKILL.md`);
	}

	let metadata;
	try {
		metadata = parse(frontmatter);
	} catch (error) {
		throw new Error(`Invalid frontmatter in skills/${directory}/SKILL.md`, {
			cause: error,
		});
	}

	if (!metadata || typeof metadata !== "object") {
		throw new Error(`Invalid frontmatter in skills/${directory}/SKILL.md`);
	}

	const { name, description } = metadata;
	if (typeof name !== "string" || typeof description !== "string") {
		throw new Error(
			`Missing name or description in skills/${directory}/SKILL.md`,
		);
	}

	if (
		name.length === 0 ||
		name.length > 64 ||
		!NAME_RE.test(name) ||
		description.length === 0 ||
		description.length > 1024
	) {
		throw new Error(
			`Invalid name or description in skills/${directory}/SKILL.md`,
		);
	}

	return { name, description };
}

function listFiles(directory) {
	const root = join(SKILLS_DIR, directory);
	const files = [];

	const walk = (dir) => {
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			if (entry.name === ".DS_Store" || entry.name.startsWith(".")) continue;
			const full = join(dir, entry.name);
			if (entry.isDirectory()) {
				walk(full);
			} else if (entry.isFile()) {
				files.push(relative(root, full));
			}
		}
	};

	walk(root);
	return files.sort((a, b) => a.localeCompare(b));
}

function createArchive(directory) {
	// Deterministic-ish gzip via gzip -n; content order follows tar file list.
	const files = listFiles(directory);
	if (files.length === 0) {
		throw new Error(`skills/${directory} has no files to package`);
	}

	const tar = execFileSync("tar", [
		"-cf",
		"-",
		"-C",
		join(SKILLS_DIR, directory),
		...files,
	]);
	return execFileSync("gzip", ["-n", "-9", "-c"], { input: tar });
}

function createArtifact(directory) {
	const files = listFiles(directory);

	if (files.length === 1 && files[0] === "SKILL.md") {
		return {
			content: readFileSync(join(SKILLS_DIR, directory, "SKILL.md")),
			extension: "md",
			type: "skill-md",
		};
	}

	return {
		content: createArchive(directory),
		extension: "tar.gz",
		type: "archive",
	};
}

function main() {
	if (!statSync(SKILLS_DIR, { throwIfNoEntry: false })?.isDirectory()) {
		throw new Error(`Missing skills directory at ${SKILLS_DIR}`);
	}

	const directories = listSkillDirectories();
	if (directories.length === 0) {
		throw new Error("No skill directories found under skills/");
	}

	rmSync(OUTPUT_DIR, { force: true, recursive: true });
	mkdirSync(OUTPUT_DIR, { recursive: true });

	const skills = directories.map((directory) => {
		const metadata = readMetadata(directory);
		const artifact = createArtifact(directory);
		const filename = `${metadata.name}.${artifact.extension}`;
		writeFileSync(join(OUTPUT_DIR, filename), artifact.content);

		return {
			...metadata,
			type: artifact.type,
			url: `${BASE_URL}/${filename}`,
			digest: `sha256:${createHash("sha256").update(artifact.content).digest("hex")}`,
		};
	});

	if (new Set(skills.map(({ name }) => name)).size !== skills.length) {
		throw new Error("Skill names must be unique");
	}

	writeFileSync(
		join(OUTPUT_DIR, "index.json"),
		`${JSON.stringify({ $schema: SCHEMA, skills }, null, 2)}\n`,
	);

	console.log(`Published ${skills.length} skills to dist/`);
	for (const skill of skills) {
		console.log(`  - ${skill.name} (${skill.type})`);
	}
}

main();
