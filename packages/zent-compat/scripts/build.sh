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
postcss css/index.css --use cssnano --no-map -o css/index.min.css

echo "Compile esm..."
tsc
node $basepath/transform.js

$basepath/./cruiser.sh
