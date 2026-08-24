/**
 * THEME SYSTEM CONFIGURATION
 * 
 * PERL Education Brand Palette:
 * Primary: #0F4C81 (Deep Sapphire Blue)
 * Primary Hover: #0A3357
 * Secondary / Success: #059669 (Vibrant Emerald Green)
 * Accent: #F59E0B (Amber Gold)
 * Surface Dark: #0B192C / #1E293B
 * Surface Subtle: #F1F5F9
 */

export const theme = {
  // Main Institute Brand Colors
  primary: "#0F4C81",      // PERL Sapphire Blue
  primaryHover: "#0A3357", // Deep Navy Hover
  secondary: "#059669",    // Vibrant Emerald (Academic Growth & Clarity)
  secondaryHover: "#047857",
  accent: "#F59E0B",       // Warm Amber Gold (High-impact CTAs & Stars)
  accentHover: "#D97706",

  // Backgrounds & Surfaces
  background: "#F8FAFC",   // Clean modern slate tinted background
  surface: "#FFFFFF",      // Card & Container crisp white background
  surfaceSubtle: "#F1F5F9",// Cool slate subtle surface
  surfaceDark: "#0B192C",  // Deep Navy for contrast sections (Stats, Footer)

  // Typography Colors
  text: "#1E293B",         // Deep slate body text
  textLight: "#FFFFFF",    // Inverted text for dark surfaces
  heading: "#0F172A",      // High contrast heading text
  mutedText: "#64748B",    // Muted secondary text
  border: "#E2E8F0",       // Clean subtle border
  borderDark: "#1E293B",

  // Contextual Colors
  success: "#10B981",      // Green for selections / positive badges
  warning: "#F59E0B",      // Amber for high-priority alerts
  info: "#0284C7",         // Sky blue for syllabus info

  // Visual Styling Details
  borderRadius: "1rem",    // Smooth 16px modern curves
  fontHeading: "'Poppins', sans-serif",
  fontBody: "'Poppins', system-ui, -apple-system, sans-serif",
  fontAccent: "'Poppins', sans-serif"
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
