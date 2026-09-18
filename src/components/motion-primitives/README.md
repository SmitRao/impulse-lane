# Motion primitives

Small, copy-paste animation components owned in this repo. They are adapted from
the [Motion Primitives](https://motion-primitives.com) collection (MIT) and built
on [`motion`](https://www.npmjs.com/package/motion) (MIT) plus Tailwind — no
runtime UI dependency, no third-party branding.

| Primitive | Use for |
| --- | --- |
| `TextEffect` | Word/character reveal for headlines and lead copy |
| `TextShimmer` | Slow light sweep across a short label |
| `InView` / `InViewItem` | Section reveals and staggered grids on scroll |
| `Spotlight` | Pointer-following glow behind a desktop CTA or hero panel |
| `Magnetic` | Slight pointer pull on a desktop CTA |

## Reduced motion

Every primitive calls `usePrefersReducedMotion()` and falls back to a static
render. Two extra guards make that safe regardless of JavaScript timing:

1. `globals.css` forces `[data-il-motion]` elements to their final opacity /
   transform / filter inside `@media (prefers-reduced-motion: reduce)`, using
   `!important` so it beats the inline styles Motion writes.
2. The root layout ships a `<noscript>` rule with the same reset, so a JS-less
   visitor never sees content stuck at `opacity: 0`.

`Spotlight` and `Magnetic` additionally require `(hover: hover) and (pointer: fine)`,
so touch devices never get pointer-driven movement under a finger.
