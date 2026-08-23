/**
 * THEME SYSTEM CONFIGURATION
 * 
 * Saarthi Education Color Palette:
 * Primary: #1E4FA8 (Saarthi Navy Blue)
 * Primary Alt: #163E85
 * Accent: #F8B81F / #FFB606 (Warm Amber Gold)
 * Secondary: #E74C3C (Dynamic Coral Red)
 * Dark: #1D2B53 / #111822
 */

export const theme = {
  // Main Institute Colors
  primary: "#1E4FA8",      // Saarthi Brand Blue
  primaryHover: "#163E85", // Deep Navy hover state
  secondary: "#E74C3C",    // Dynamic Coral Red / Secondary
  secondaryHover: "#C0392B",
  accent: "#F8B81F",       // Saarthi Golden Amber
  accentHover: "#E5A40F",

  // Backgrounds & Surfaces
  background: "#F8F9FC",   // Clean subtle modern tinted background
  surface: "#FFFFFF",      // Card & Container crisp white background
  surfaceSubtle: "#EEF2F9",// Cool slate/blue subtle surface
  surfaceDark: "#1D2B53",  // Deep Navy for contrast sections (Stats, Footer)

  // Typography Colors
  text: "#231F40",         // Deep neutral body text
  textLight: "#FFFFFF",    // Inverted text for dark surfaces
  heading: "#1D2B53",      // High contrast heading text
  mutedText: "#555555",    // Muted secondary text
  border: "#E5E9F2",       // Clean subtle border
  borderDark: "#2A3C6E",

  // Contextual Colors
  success: "#0ECD73",      // Green for selections / positive badges
  warning: "#F8941F",      // Orange/Amber for status flags
  info: "#39C0FA",         // Sky blue for updates/info tags

  // Visual Styling Details
  borderRadius: "0.75rem", // Modern rounding (12px)
  fontHeading: "'Poppins', sans-serif",
  fontBody: "'Poppins', system-ui, -apple-system, sans-serif",
  fontAccent: "'Spartan', 'Poppins', sans-serif"
};

/**
 * Utility to inject theme CSS variables into document head dynamically.
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
