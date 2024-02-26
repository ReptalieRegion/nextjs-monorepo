FROM node:18-alpine AS base

# builder
FROM base AS builder

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune crawl-admin --docker


# Rebuild the source code only when needed
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add pnpm
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm add sharp --filter crawl-admin 
RUN pnpm i --frozen-lockfile

COPY turbo.json turbo.json
RUN pnpm --filter crawl-admin build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=installer /app/apps/crawl-admin/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next


# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=installer --chown=nextjs:nodejs /app/apps/crawl-admin/.next/standalone ./apps/crawl-admin/
COPY --from=installer --chown=nextjs:nodejs /app/apps/crawl-admin/.next/static ./apps/crawl-admin/.next/static

USER nextjs

ARG ADMIN_SERVER_END_POINT
ARG PORT

ENV NEXT_PUBLIC_API_URL ${ADMIN_SERVER_END_POINT}
ENV PORT ${PORT}
EXPOSE ${PORT}
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

WORKDIR /app/apps/crawl-admin

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]