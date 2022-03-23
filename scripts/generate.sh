#!/bin/bash

# Generate git data
rev=$(git rev-parse --short HEAD)
echo "main-$rev" > src/_REV