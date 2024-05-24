FROM alpine:latest
RUN apk add --no-cache nodejs npm bash git curl wget
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
EXPOSE 3000
EXPOSE 5173

