# My Customizations

## Theme Changes
- Applied Tomorrow Night Blue theme from VS Code
- Changed from dark black theme to deep blue theme for better readability
- Updated all color values from oklch to hex for better browser compatibility

## Color Palette
- Background: `#002451` (Deep blue)
- Sidebar/Card: `#001833` (Darker blue)
- Text: `#ffffff` (White)
- Selection: `#003f8a` (Selection blue)
- Primary: `#81a2be` (Light blue)
- Comments: `#969896` (Gray)

## Files Modified
- `src/styles.css` - Main theme colors and utilities
- `src/lib/claudeSyntaxTheme.ts` - Syntax highlighting colors
- `src-tauri/src/commands/agents.rs` - Fixed unused imports
- `src-tauri/src/commands/claude.rs` - Fixed unused imports

## Merge Strategy
When updating from upstream:
1. Theme changes are isolated in CSS variables
2. Check for new color variables in upstream
3. Preserve custom hex values over oklch
4. Test hover states and component styling

## Build Requirements
- No additional dependencies
- Compatible with existing build process
- Tested with npm/yarn/bun