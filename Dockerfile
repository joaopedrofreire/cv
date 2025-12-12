FROM node:22.2.0-slim as BUILD_STAGE

WORKDIR /app

COPY . .

FROM node:alpine

COPY --from=BUILD_STAGE /app/package.json ./package.json
COPY --from=BUILD_STAGE /app/node_modules ./node_modules
COPY --from=BUILD_STAGE /app/.next ./.next
COPY --from=BUILD_STAGE /app/public ./public

EXPOSE 3000

CMD ["pnpm", "start"]
