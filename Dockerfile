FROM node:20.10-slim AS builder
WORKDIR /usr/src/app

RUN corepack enable && corepack prepare pnpm@9.6.0 --activate

ENV HUSKY=0

COPY pnpm-lock.yaml package.json ./

RUN --mount=type=cache,id=s/6cf4b6f9-51b8-45c8-b4bd-7052ee844bd7-pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile
COPY . .

RUN pnpm prisma:generate && pnpm build

RUN --mount=type=cache,id=s/6cf4b6f9-51b8-45c8-b4bd-7052ee844bd7-pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm prune --prod --ignore-scripts

FROM node:20.10-slim AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/generated ./generated

EXPOSE 3000
CMD ["node", "dist/main.js"]
