FROM alpine:latest

WORKDIR /app
COPY . .

RUN apk add --no-cache nodejs npm bash git curl wget
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json ./
RUN pnpm install
WORKDIR /app/src/backend
COPY src/backend/package*.json ./
RUN pnpm install
EXPOSE 3000
EXPOSE 5173
COPY start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]