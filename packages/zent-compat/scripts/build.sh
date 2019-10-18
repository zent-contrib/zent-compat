#!/bin/bash

set -e

basepath=$(dirname $0)

# Ensure only colors defined in themes are used
$basepath/check-style-colors.sh

# clean
echo "Clean up..."
rm -rf lib es css

# transpile scss to css
# custom importer for @import '~some-node-module'
echo "Compile styles..."
node $basepath/./compile-style.js

# autoprefixer
postcss css --use autoprefixer --replace --no-map

# minify index.css
postcss css/index.css --use cssnano -o css/index.min.css

# transpile using babel
# cross-env BABEL_ENV=transpile babel src --out-dir lib
# cross-env BABEL_ENV=es babel src --out-dir es
echo "Compile esm..."
tsc

$basepath/./cruiser.sh
