#!/bin/bash

# Script to safely merge upstream changes while preserving customizations

echo "🔄 Fetching upstream changes..."
git fetch upstream

echo "📊 Checking for conflicts with customized files..."
CUSTOM_FILES=(
    "src/styles.css"
    "src/lib/claudeSyntaxTheme.ts"
)

echo "🔍 Showing changes in customized files..."
for file in "${CUSTOM_FILES[@]}"; do
    echo "---"
    echo "Changes in $file:"
    git diff upstream/main..HEAD -- "$file" | head -20
done

echo ""
echo "📝 Options:"
echo "1. Merge upstream/main into current branch"
echo "2. Cherry-pick specific commits"
echo "3. Show full diff"
echo "4. Abort"

read -p "Choose option (1-4): " choice

case $choice in
    1)
        echo "🔀 Merging upstream/main..."
        git merge upstream/main
        ;;
    2)
        echo "📋 Recent commits from upstream:"
        git log upstream/main --oneline -10
        read -p "Enter commit hash to cherry-pick: " commit
        git cherry-pick "$commit"
        ;;
    3)
        git diff upstream/main..HEAD
        ;;
    4)
        echo "❌ Aborted"
        exit 0
        ;;
esac

echo "✅ Done! Remember to test your customizations."