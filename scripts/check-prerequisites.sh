#!/bin/bash

echo "🔍 Checking prerequisites for AirDreads development..."

# Check if Docker is installed and running
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker Desktop first."
    echo "   👉 https://www.docker.com/products/docker-desktop/"
    exit 1
fi

if ! docker info &> /dev/null; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please install Docker Desktop."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+."
    echo "   👉 https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is too old. Please install Node.js 18+."
    echo "   Current version: $(node -v)"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "⚠️  pnpm is not installed. Installing it now..."
    npm install -g pnpm
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install pnpm. Please install it manually:"
        echo "   npm install -g pnpm"
        exit 1
    fi
fi

echo "✅ All prerequisites are installed!"
echo ""
echo "🚀 Ready to start development servers!"
echo "   Run: pnpm run dev:servers"
echo ""
echo "📝 Additional commands:"
echo "   - Start Next.js webapp: pnpm run dev:webapp"
echo "   - Stop all servers: pnpm run dev:servers:stop"