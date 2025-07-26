# Upstream Update Guide

## Quick Update
```bash
# Automatic merge
./scripts/merge-upstream.sh

# Manual merge
git fetch upstream
git merge upstream/main
```

## Conflict Resolution

### If styles.css conflicts:
1. Keep our color variables (hex values)
2. Accept new structural changes from upstream
3. Test all components for visual consistency

### If claudeSyntaxTheme.ts conflicts:
1. Keep Tomorrow Night Blue colors
2. Accept new token types from upstream
3. Add colors for any new token types

## Testing After Update
```bash
# 1. Build the project
npm run build

# 2. Run in dev mode
npm run tauri dev

# 3. Check:
- [ ] Theme colors are correct
- [ ] No black backgrounds
- [ ] Hover states work
- [ ] Syntax highlighting works
```

## Rollback if Needed
```bash
git reset --hard HEAD~1
git push --force origin custom-theme
```