#!/bin/bash

echo "🧹 AirDreads - Complete Workspace Reset"
echo "This will clean all temporary files, caches, and reinstall everything fresh."
echo ""

# Ask for confirmation
read -p "Are you sure you want to reset the workspace? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Reset cancelled."
    exit 1
fi

echo ""
echo "🛑 Stopping all running services..."

# Stop all Docker containers
docker-compose -f docker-compose.dev.yml down 2>/dev/null || true
docker-compose down 2>/dev/null || true

# Kill any running Node.js processes
pkill -f "node" 2>/dev/null || true
pkill -f "pnpm" 2>/dev/null || true

echo "✅ All services stopped."
echo ""
echo "🧹 Cleaning workspace..."

# Remove all node_modules directories
echo "  📦 Removing node_modules..."
find . -name "node_modules" -type d -prune -exec rm -rf {} + 2>/dev/null || true

# Remove all .next directories (Next.js build cache)
echo "  🗂️  Removing .next build cache..."
find . -name ".next" -type d -prune -exec rm -rf {} + 2>/dev/null || true

# Remove all dist/build directories
echo "  🔨 Removing build directories..."
find . -name "dist" -type d -prune -exec rm -rf {} + 2>/dev/null || true
find . -name "build" -type d -prune -exec rm -rf {} + 2>/dev/null || true

# Remove Python cache files
echo "  🐍 Removing Python cache..."
find . -name "__pycache__" -type d -prune -exec rm -rf {} + 2>/dev/null || true
find . -name "*.pyc" -delete 2>/dev/null || true
find . -name ".pytest_cache" -type d -prune -exec rm -rf {} + 2>/dev/null || true

# Remove Python virtual environments
echo "  🔧 Removing Python virtual environments..."
find . -name ".venv" -type d -prune -exec rm -rf {} + 2>/dev/null || true
find . -name "venv" -type d -prune -exec rm -rf {} + 2>/dev/null || true

# Clean Docker images and containers
echo "  🐳 Cleaning Docker resources..."
docker system prune -f 2>/dev/null || true
docker image prune -f 2>/dev/null || true

# Remove pnpm cache
echo "  📋 Cleaning pnpm cache..."
pnpm store prune 2>/dev/null || true

# Remove npm cache (if exists)
echo "  🗄️  Cleaning npm cache..."
npm cache clean --force 2>/dev/null || true

# Remove yarn cache (if exists)
echo "  🧶 Cleaning yarn cache..."
yarn cache clean 2>/dev/null || true

# Remove Turbo cache
echo "  ⚡ Cleaning Turbo cache..."
rm -rf .turbo 2>/dev/null || true
rm -rf node_modules/.cache 2>/dev/null || true

# Remove temporary files
echo "  🗑️  Removing temporary files..."
find . -name "*.tmp" -delete 2>/dev/null || true
find . -name "*.temp" -delete 2>/dev/null || true
find . -name ".DS_Store" -delete 2>/dev/null || true

# Remove log files
echo "  📝 Removing log files..."
find . -name "*.log" -delete 2>/dev/null || true
find . -name "logs" -type d -prune -exec rm -rf {} + 2>/dev/null || true

echo "✅ Workspace cleaned!"
echo ""
echo "🔄 Reinstalling everything fresh..."

# Run the setup script to reinstall everything
./scripts/setup.sh

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Workspace reset complete!"
    echo ""
    echo "🚀 You can now run:"
    echo "   pnpm run dev:servers    # Start development servers"
    echo "   pnpm run dev:webapp     # Start Next.js frontend"
else
    echo ""
    echo "❌ Reset failed during reinstallation."
    echo "   Please check the error messages above."
    exit 1
fi