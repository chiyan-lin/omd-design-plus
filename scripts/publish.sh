#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

cd dist/omd-design-plus
npm publish
cd -

cd hammer/eslint-config
npm publish
cd -


echo "✅ Publish completed"
