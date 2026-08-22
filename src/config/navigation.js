import { features } from './features';

/**
 * DYNAMIC NAVIGATION BUILDER
 * 
 * Automatically generates header navigation links based on active feature flags.
 */

export function getNavLinks() {
  const baseLinks = [
    { label: "Home", path: "/" },
    { label: "Programs", path: "/programs" }
  ];

  if (features.results) {
    baseLinks.push({ label: "Results & Ranks", path: "/results" });
  }

  if (features.faculty) {
    baseLinks.push({ label: "Faculty", path: "/faculty" });
  }

  if (features.gallery) {
    baseLinks.push({ label: "Student Life", path: "/student-life" });
  }

  if (features.updates) {
    baseLinks.push({ label: "Updates", path: "/updates" });
  }

  baseLinks.push({ label: "About Us", path: "/about" });
  baseLinks.push({ label: "Contact", path: "/contact" });

  return baseLinks;
}
