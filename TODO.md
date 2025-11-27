# Performance Optimization TODO

## 1. Replace scroll listener with requestAnimationFrame throttling
- [x] Update useEffect for scroll listener to use requestAnimationFrame instead of direct event listener

## 2. Add lazy loading to images
- [x] Add loading="lazy" to project images in RecentWorksSection
- [x] Add loading="lazy" to team member images in CommunitySection

## 3. Memoize big sections
- [x] Extract and memoize HeroSection
- [x] Extract and memoize RecentWorksSection
- [x] Extract and memoize CommunitySection
- [x] Extract and memoize FeaturesSection
- [x] Extract and memoize ServicesSection
- [x] Extract and memoize ContactSection

## 4. Memoize callbacks
- [x] Wrap scrollToSection with useCallback
- [x] Wrap openPhoto with useCallback
- [x] Wrap closePhoto with useCallback

## 5. Move repeated inline arrays out of render
- [x] Move features array to top-level constant FEATURES
- [x] Move services array to top-level constant SERVICES
- [x] Move contact info array to top-level constant CONTACT_INFO
- [x] Move community stats to top-level constant COMMUNITY_STATS
- [x] Move forums to top-level constant FORUMS
- [x] Move navigation sections to NAVIGATION_SECTIONS constant
- [x] Move scroll sections to SCROLL_SECTIONS constant

## 6. Kill tiny re-renders from animations
- [x] Remove showCursor state and cursorTimer from TerminalWelcome
- [x] Add CSS animation for cursor blink
- [x] Update cursor rendering to use CSS animation

## 7. Test with React DevTools Profiler
- [x] Run app in dev mode
- [x] Use React Profiler to check re-renders
- [x] Verify optimizations work
