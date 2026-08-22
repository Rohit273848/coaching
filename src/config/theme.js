/**
 * THEME SYSTEM CONFIGURATION
 * 
 * Rebrand the entire institute website by editing the theme values below.
 * Colors are injected dynamically into CSS root variables.
 */

export const theme = {
  // Main Institute Colors
  primary: "#0F2038",      // Deep Academic Navy (Authority & Trust)
  primaryHover: "#183256", // Darker Navy hover state
  secondary: "#8B1E26",    // Classic Academic Maroon / Crimson (Discipline & Merit)
  secondaryHover: "#6D171E",
  accent: "#D4AF37",       // Rich Academic Gold (Excellence & Achievements)
  accentHover: "#B59226",

  // Backgrounds & Surfaces (Off-white / Warm Ivory aesthetics)
  background: "#FBFBFA",   // Warm off-white page background
  surface: "#FFFFFF",      // Card & Container crisp white background
  surfaceSubtle: "#F4F3EF",// Subtle warm neutral surface for alternating sections
  surfaceDark: "#0B1526",  // Deep charcoal background for contrast sections (Stats, Footer)

  // Typography Colors
  text: "#1C2430",         // Deep charcoal body text (readable, high contrast)
  textLight: "#FFFFFF",    // Inverted text for dark surfaces
  heading: "#0A1424",      // High contrast heading text
  mutedText: "#5A6578",    // Muted secondary text
  border: "#E2E8F0",       // Clean subtle border
  borderDark: "#1E293B",

  // Contextual Colors
  success: "#15803D",      // Green for selections / positive badges
  warning: "#B45309",      // Orange/Amber for status flags
  info: "#1D4ED8",         // Blue for updates/info tags

  // Visual Styling Details
  borderRadius: "0.5rem",  // Restrained card rounding (8px)
  fontHeading: "'Plus Jakarta Sans', sans-serif",
  fontBody: "'Plus Jakarta Sans', sans-serif",
  fontAccent: "'Lora', serif" // Used for AIR Ranks & Topper numbers
};

/**
 * Utility to inject theme CSS variables into the document head dynamically.
 */
export function applyTheme(currentTheme = theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', currentTheme.primary);
  root.style.setProperty('--color-primary-hover', currentTheme.primaryHover);
  root.style.setProperty('--color-secondary', currentTheme.secondary);
  root.style.setProperty('--color-secondary-hover', currentTheme.secondaryHover);
  root.style.setProperty('--color-accent', currentTheme.accent);
  root.style.setProperty('--color-accent-hover', currentTheme.accentHover);
  root.style.setProperty('--color-bg', currentTheme.background);
  root.style.setProperty('--color-surface', currentTheme.surface);
  root.style.setProperty('--color-surface-subtle', currentTheme.surfaceSubtle);
  root.style.setProperty('--color-surface-dark', currentTheme.surfaceDark);
  root.style.setProperty('--color-text', currentTheme.text);
  root.style.setProperty('--color-text-light', currentTheme.textLight);
  root.style.setProperty('--color-heading', currentTheme.heading);
  root.style.setProperty('--color-muted', currentTheme.mutedText);
  root.style.setProperty('--color-border', currentTheme.border);
  root.style.setProperty('--color-border-dark', currentTheme.borderDark);
  root.style.setProperty('--radius-theme', currentTheme.borderRadius);
}
