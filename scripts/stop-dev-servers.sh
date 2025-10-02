#!/bin/bash

echo "🛑 Stopping development servers..."

# Stop and remove containers
docker-compose -f docker-compose.dev.yml down

echo "✅ All development servers stopped!"