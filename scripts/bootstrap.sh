#!/bin/bash

set -e

yarn
yarn workspace @zent/compat build
