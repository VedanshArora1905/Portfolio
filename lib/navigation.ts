export type NavPage = "home" | "work" | "expertise" | "contact";

export const BRAND = "VEDANSH.ARORA";

export const NAV_LINKS: { href: string; label: string; page: NavPage }[] = [
  { href: "/", label: "Home", page: "home" },
  { href: "/work", label: "Work", page: "work" },
  { href: "/expertise", label: "Expertise", page: "expertise" },
  { href: "/contact", label: "Contact", page: "contact" },
];

export function getActivePage(pathname: string): NavPage {
  if (pathname === "/work") return "work";
  if (pathname === "/expertise") return "expertise";
  if (pathname === "/contact") return "contact";
  return "home";
}
