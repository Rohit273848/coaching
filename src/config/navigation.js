import { features } from './features';

/**
 * DYNAMIC NAVIGATION BUILDER
 * 
 * Matches https://saarthiedu.online/ menu:
 * Home, About, Batches, Faculty, Results, Contact
 */

export function getNavLinks() {
  const baseLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Batches", path: "/programs" }
  ];

  if (features.faculty) {
    baseLinks.push({ label: "Faculty", path: "/faculty" });
  }

  if (features.results) {
    baseLinks.push({ label: "Results", path: "/results" });
  }

  if (features.gallery) {
    baseLinks.push({ label: "Student Life", path: "/student-life" });
  }

  if (features.updates) {
    baseLinks.push({ label: "Updates", path: "/updates" });
  }

  baseLinks.push({ label: "Contact", path: "/contact" });

  return baseLinks;
}
