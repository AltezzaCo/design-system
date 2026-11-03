# Button

- **Source:** `artifacts/mensa-inbox/src/components/ui/button.tsx`
- **Usage:** 6 consumer files; highest-use action primitive.
- **Implementation:** Radix Slot + CVA; public API preserves `asChild`,
  `variant`, `size`, native button props, disabled behavior, and focus states.
- **Variants:** default, destructive, outline, secondary, ghost, link.
- **Sizes:** default, small, large, icon.
- **Port note:** source logic and classes are retained; only the internal utility
  import is package-relative.
- **Status:** implemented in chunk 1.