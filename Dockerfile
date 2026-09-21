# ==============================================================================
# Build Stage: Compile and Bundle React 18 + Vite TypeScript App
# ==============================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit

# Copy source code and build production assets
COPY . .
RUN npm run build

# ==============================================================================
# Production Stage: Hardened Nginx Web Server
# ==============================================================================
FROM nginx:alpine

# Metadata
LABEL maintainer="pooltech"
LABEL version="2.0.0"
LABEL description="PoolTech React Web Application - Hardened Enterprise Web Stack"
LABEL security.hardened="true"

# Remove default nginx configurations and assets
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy custom security-hardened Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy compiled production artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Enforce secure non-root file ownership & permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Docker Healthcheck for automated cluster/container health monitoring
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]