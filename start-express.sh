#!/bin/sh
apk add  nodejs npm bash git wget curl
npm install -g pnpm
cd src/backend/
pnpm install
node app.js