#!/bin/sh

# Change directory to /app
cd /app

# Run pnpm in the foreground
pnpm run dev &

# Change directory to /app/src/backend
cd /app/src/backend

# Run the Node.js application in the foreground
node app.js

# Keep the container running indefinitely
tail -f /dev/null
