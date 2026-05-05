#!/usr/bin/env node
const { spawnSync } = require('node:child_process');

function hasAjvCodegen() {
  try {
    require.resolve('ajv/dist/compile/codegen');
    return true;
  } catch {
    return false;
  }
}

if (!hasAjvCodegen()) {
  console.log('[ensure-ajv] Missing ajv codegen module, installing compatible Ajv packages...');
  const result = spawnSync('npm', ['install', '--no-save', '--legacy-peer-deps', 'ajv@8.17.1', 'ajv-keywords@5.1.0'], {
    stdio: 'inherit',
  });
  if (result.status !== 0) {
    console.error('[ensure-ajv] Failed to install Ajv compatibility packages.');
    process.exit(result.status || 1);
  }

  if (!hasAjvCodegen()) {
    console.error('[ensure-ajv] Ajv module still missing after install.');
    process.exit(1);
  }
}

console.log('[ensure-ajv] Ajv compatibility check passed.');
