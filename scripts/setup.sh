#!/bin/bash

echo "🌍 Welcome to AirDreads - NASA Space Apps Challenge 2025!"
echo ""

# Check prerequisites
./scripts/check-prerequisites.sh
if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Please install the missing prerequisites and run this script again."
    exit 1
fi

echo ""
echo "📦 Installing dependencies..."

# Install all dependencies
pnpm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Please check your internet connection."
    exit 1
fi

echo ""
echo "🎉 Setup complete! You're ready to develop!"
echo ""
echo "� Production-grade safety enabled:"
echo "   ✅ Pre-commit hooks with lint-staged"
echo "   ✅ Auto-format and lint on commit"
echo "   ✅ Commit message validation"
echo ""
echo "�🚀 Next steps:"
echo "   1. Start development servers: pnpm run dev:servers"
echo "   2. Start Next.js webapp: pnpm run dev:webapp"
echo "   3. Open http://localhost:3000 in your browser"
echo ""
echo "📚 Useful commands:"
echo "   - Stop servers: pnpm run dev:servers:stop"
echo "   - Check setup: pnpm run check-setup"
echo "   - Format code: pnpm run format"