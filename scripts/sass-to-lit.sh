#!/bin/bash

set -euo pipefail

sass_files=$(ls -d src/internal)

echo $sass_files

npx sass \
  --style=compressed \
  --load-path=node_modules \
  --load-path=node_modules/sass-true/sass \
  $sass_files

css_files=$(find ./src -name '*.css' -print)
map_files=$(find ./src -name '*.map' -print)

echo $css_files | xargs -L1 node scripts/css-to-lit.js

rm $map_files $css_files
