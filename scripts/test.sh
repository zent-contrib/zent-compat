#!/bin/bash

set -e

ts-node --project packages/zent-compat/scripts/cruiser/tsconfig.json  packages/zent-compat/scripts/cruiser/index.ts packages/zent-compat/src/index.ts packages/zent-compat/assets
yarn workspace @zent/compat test
