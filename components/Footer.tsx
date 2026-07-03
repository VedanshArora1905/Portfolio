import Link from "next/link";
import { EMAIL, SOCIAL_LINKS } from "@/lib/constants";
import { BRAND, NAV_LINKS } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t-4 border-brutal-black bg-brutal-black text-brutal-cream w-full py-12 md:py-16 relative z-10">
      <div className="flex flex-col gap-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="font-display text-xl font-bold uppercase tracking-tighter bg-brutal-yellow text-brutal-black px-4 py-2 border-4 border-brutal-cream inline-block">
            {BRAND}
          </div>
          <nav className="flex flex-wrap gap-3">
            {NAV_LINKS.map(({ href, label, page }) => (
              <Link
                key={page}
                href={href}
                className="font-mono text-sm uppercase border-2 border-brutal-cream px-3 py-1 hover:bg-brutal-yellow hover:text-brutal-black hover:border-brutal-black transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6 border-t-2 border-brutal-cream/30">
          <div className="flex flex-wrap gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase hover:text-brutal-yellow transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase hover:text-brutal-yellow transition-colors"
            >
              GitHub →
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-sm uppercase hover:text-brutal-yellow transition-colors"
            >
              Email →
            </a>
          </div>
          <p className="font-mono text-sm text-brutal-cream/70">
            © {new Date().getFullYear()} Vedansh Arora
          </p>
        </div>
      </div>
    </footer>
  );
}
