FROM node:20-alpine AS build
WORKDIR /app
# Copy root lockfile and workspace config
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
# Copy package.json files for all workspaces to enable proper dependency resolution
COPY package.json ./
COPY services/api/package.json ./services/api/
# Install all dependencies
RUN corepack enable && pnpm i --frozen-lockfile
# Copy source code
COPY services/api/tsconfig.json ./services/api/tsconfig.json
COPY services/api/src ./services/api/src
# Build the API service
RUN pnpm --filter api build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
# Copy root lockfile and workspace config
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY package.json ./
COPY services/api/package.json ./services/api/
# Install all dependencies first, then prune dev dependencies
RUN corepack enable && pnpm i --frozen-lockfile
# Copy the built dist folder
COPY --from=build /app/services/api/dist ./services/api/dist
# Set working directory to the API service
WORKDIR /app/services/api
ENV PORT=8080
EXPOSE 8080
CMD ["node", "dist/index.js"]
