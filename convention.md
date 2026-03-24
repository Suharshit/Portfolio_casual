# Coding Conventions: Suharshit Singh Portfolio

## General Standards
- **Strict TypeScript**: No implicit `any`, explicit return types for exports.
- **Modern ESM**: Consistent use of ES modules and modern syntax.
- **Performance**: Minimize client-side bundle size; use `'use client'` sparingly.

## File & Directory Naming
- **Components**: PascalCase (e.g., `Hero.tsx`, `MagneticButton.tsx`).
- **Hooks/Utils**: camelCase (e.g., `useScrollPos.ts`, `formatDate.ts`).
- **Folders**: kebab-case (e.g., `components/ui/`, `lib/data/`).
- **Styles**: `globals.css` for system-wide tokens.

## Architecture & State
- **App Router**: Follow Next.js 15 conventions for layouts and pages.
- **Component Colocation**: Keep types and sub-components near their usage.
- **Server vs Client**: Use Server Components by default; Client for interactivity.

## Styling & Design System
- **Tailwind CSS 4**: Primary styling tool via utility classes.
- **CSS Variables**: Use `--font-family`, `--color-primary` in `globals.css`.
- **Responsive**: Mobile-first design using Tailwind's breakpoint prefixes.
- **Aesthetics**: Glassmorphism, radial glows, and high-contrast accessibility.

## Animation Patterns
- **Framer Motion**: Default for simple transitions and layout animations.
- **Variants**: Define animation variants outside the component logic.
- **GSAP**: Reserved for complex timelines and sequenced optimizations.
- **Lenis**: Global smooth scroll configuration for consistent feel.

## Workflow & Sync
- **Package Manager**: Always use `pnpm` for dependency management.
- **Icons**: Preferred `@iconify/react` and `lucide-react` components.
- **Data**: Centralize static data (projects, skills) in `lib/` or `data/`.
- **Audits**: Run `npm run lint` and `npm run type-check` before commits.
