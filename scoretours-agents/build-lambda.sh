#!/bin/bash

esbuild lambdas/flightSearchHandler.ts \
  --bundle \
  --platform=node \
  --target=node18 \
  --outfile=dist/flightSearchHandler.js