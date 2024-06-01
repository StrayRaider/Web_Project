#!/bin/sh
apk add nodejs npm bash git wget curl
npm install -g pnpm
cd app/
npm install
npm run dev