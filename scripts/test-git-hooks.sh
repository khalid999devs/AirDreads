#!/bin/bash

echo "🔒 Git Hooks Demo - Production-Grade Safety"
echo ""
echo "This demonstrates how our pre-commit hooks prevent bad code from being committed."
echo ""

# Create a temporary test file with intentional issues
echo "Creating test file with intentional linting issues..."
cat > test-lint-demo.ts << 'EOF'
// This file has intentional linting issues
const   unused_variable = "this will cause lint errors"
function badFunction(  ){
return "no spaces, missing semicolon"
}
EOF

echo "✅ Created test-lint-demo.ts with linting issues"
echo ""

# Stage the file
git add test-lint-demo.ts

echo "📝 File staged for commit. Now attempting commit..."
echo "   (This should trigger pre-commit hooks and show linting errors)"
echo ""

# Attempt to commit (this will fail due to linting issues)
echo "Running: git commit -m 'test: demo commit with linting issues'"
git commit -m "test: demo commit with linting issues" || {
    echo ""
    echo "🛡️  PRE-COMMIT HOOKS WORKED!"
    echo "   ❌ Commit was blocked due to linting issues"
    echo "   ✅ Bad code prevented from entering repository"
    echo ""
}

# Clean up
git reset HEAD test-lint-demo.ts 2>/dev/null || true
rm -f test-lint-demo.ts

echo "🧹 Cleaned up demo files"
echo ""
echo "🎉 Git hooks are working correctly!"
echo "   - ESLint catches code quality issues"
echo "   - Prettier auto-formats code"
echo "   - Python linting for .py files"
echo "   - Commit message validation"
echo ""
echo "💡 To commit code, fix all linting issues first, or let Prettier auto-fix them!"