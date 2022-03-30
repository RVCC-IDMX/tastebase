#!/bin/bash

# Generate git data
branch=$(git rev-parse --abbrev-ref HEAD)
rev=$(git rev-parse --short HEAD)
echo "$branch-$rev" > src/_REV