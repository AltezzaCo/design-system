/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#F6F8F7",
      "foreground": "#10201D",
      "border": "#D6E0DD",
      "card": "#FFFFFF",
      "cardForeground": "#10201D",
      "popover": "#FFFFFF",
      "popoverForeground": "#10201D",
      "primary": "#0F766E",
      "primaryForeground": "#FFFFFF",
      "secondary": "#E7F0EE",
      "secondaryForeground": "#173B35",
      "muted": "#EDF2F1",
      "mutedForeground": "#60706C",
      "accent": "#DDF7C8",
      "accentForeground": "#17301B",
      "destructive": "#D14343",
      "destructiveForeground": "#FFFFFF",
      "input": "#C8D6D2",
      "ring": "#0D9488",
      "chart1": "#0F766E",
      "chart2": "#65A30D",
      "chart3": "#2563EB",
      "chart4": "#7C3AED",
      "chart5": "#D97706",
      "sidebar": "#0B3F3A",
      "sidebarForeground": "#F3F7F5",
      "sidebarBorder": "#15534C",
      "sidebarPrimary": "#B8F28D",
      "sidebarPrimaryForeground": "#071311",
      "sidebarAccent": "#14574F",
      "sidebarAccentForeground": "#FFFFFF",
      "sidebarRing": "#5EEAD4"
    },
    "dark": {
      "background": "#060F0D",
      "foreground": "#F3F7F5",
      "border": "#17312C",
      "card": "#0D1E1B",
      "cardForeground": "#F3F7F5",
      "popover": "#10241F",
      "popoverForeground": "#F3F7F5",
      "primary": "#2DD4BF",
      "primaryForeground": "#04100E",
      "secondary": "#15302B",
      "secondaryForeground": "#D6E7E2",
      "muted": "#10211E",
      "mutedForeground": "#8FA49E",
      "accent": "#B8F28D",
      "accentForeground": "#071311",
      "destructive": "#DC5A5A",
      "destructiveForeground": "#FFF5F5",
      "input": "#24433D",
      "ring": "#5EEAD4",
      "chart1": "#2DD4BF",
      "chart2": "#B8F28D",
      "chart3": "#60A5FA",
      "chart4": "#A78BFA",
      "chart5": "#F59E0B",
      "sidebar": "#071512",
      "sidebarForeground": "#DDEBE7",
      "sidebarBorder": "#14302A",
      "sidebarPrimary": "#B8F28D",
      "sidebarPrimaryForeground": "#071311",
      "sidebarAccent": "#123029",
      "sidebarAccentForeground": "#F3F7F5",
      "sidebarRing": "#2DD4BF"
    }
  },
  "fontFamily": {
    "sans": [
      "Inter",
      "sans-serif"
    ],
    "serif": [
      "Georgia",
      "serif"
    ],
    "mono": [
      "Menlo",
      "monospace"
    ]
  },
  "radius": "0.625rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
