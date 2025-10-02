#!/bin/bash

echo "🚀 Starting development servers with hot reload..."

# Check prerequisites first
./scripts/check-prerequisites.sh
if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Prerequisites check failed. Please fix the issues above."
    exit 1
fi

echo ""
echo "🔨 Building and starting containers..."

# Stop any existing containers
docker-compose -f docker-compose.dev.yml down

# Build and start the development containers
docker-compose -f docker-compose.dev.yml up --build

echo "✅ Development servers started!"
echo "📖 Flask API: http://localhost:8081"
echo "🚀 Express API: http://localhost:8080"
echo ""
echo "Files are being watched for changes - no need to restart!"
echo "Press Ctrl+C to stop all services"