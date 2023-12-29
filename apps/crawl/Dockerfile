FROM node:18-alpine AS base

# builder
FROM base AS builder

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune crawl --docker


# Rebuild the source code only when needed
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add pnpm
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm add sharp --filter crawl 
RUN pnpm i --frozen-lockfile

COPY turbo.json turbo.json
RUN pnpm --filter crawl build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=installer /app/apps/crawl/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next


# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/crawl/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/crawl/.next/static ./.next/static

WORKDIR /app/apps/crawl

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]