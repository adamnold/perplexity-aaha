"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const packageJson = require("../package.json");
const sourceRoot = path.resolve(__dirname, "..");

test("distribution builds explicitly disable publishing", () => {
  const tokens = packageJson.scripts.dist.trim().split(/\s+/);
  const publishIndex = tokens.indexOf("--publish");
  assert.notEqual(publishIndex, -1);
  assert.equal(tokens[publishIndex + 1], "never");
});

test("CI uses the guarded build path and current action runtimes", () => {
  const buildScript = fs.readFileSync(path.join(sourceRoot, "build.sh"), "utf8");
  const workflow = fs.readFileSync(path.join(sourceRoot, ".github", "workflows", "ci.yml"), "utf8");
  assert.match(buildScript, /\bnpm run dist\b/);
  assert.match(workflow, /actions\/checkout@v7/);
  assert.match(workflow, /actions\/setup-node@v7/);
  assert.match(workflow, /^\s*- run: \.\/build\.sh$/m);
});

test("release workflow is manual-only and reuses the guarded build", () => {
  const workflow = fs.readFileSync(path.join(sourceRoot, ".github", "workflows", "release.yml"), "utf8");
  const trigger = workflow.slice(workflow.indexOf("\non:"), workflow.indexOf("\npermissions:"));
  assert.match(trigger, /workflow_dispatch:/);
  assert.doesNotMatch(trigger, /\b(push|pull_request|release|schedule):/);
  assert.match(workflow, /^\s*- run: \.\/build\.sh$/m);
  assert.match(workflow, /--draft=false/);
});
