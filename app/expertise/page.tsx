import Link from "next/link";
import ProtectedImage from "@/components/ProtectedImage";
import { CERTIFICATIONS } from "@/lib/constants";

const expertiseCards = [
  {
    title: "UI/UX Design",
    description: "Real-time panels focused on intuitive adoption and engagement.",
    tags: ["Angular", "Tailwind CSS", "NgRx"],
    color: "bg-brutal-pink",
  },
  {
    title: "Frontend Dev",
    description: "React & Next.js responsive architectures for high-performance apps.",
    tags: ["React", "Next.js", "RxJS"],
    color: "bg-brutal-cyan",
  },
  {
    title: "Creative Tech",
    description: "NLP, LLMs, and deep learning classification models.",
    tags: ["Python", "ML/AI", "MLflow"],
    color: "bg-brutal-yellow",
  },
  {
    title: "Backend Engineering",
    description: "Scalable MERN & Python backends with REST APIs and secure auth.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    color: "bg-brutal-white",
  },
  {
    title: "AI Productivity",
    description: "AI-assisted workflows for architecture, prototyping, and faster delivery.",
    tags: ["Claude", "Cursor", "ChatGPT", "Lovable"],
    color: "bg-brutal-cyan",
  },
  {
    title: "Leadership",
    description: "Team strategy and coordination as team captain.",
    tags: ["Team Captain", "JayP FC"],
    color: "bg-brutal-white",
  },
];

const experienceItems = [
  {
    date: "JAN 2026",
    title: "Winter Intern",
    org: "IIT Ropar",
    description:
      "MERN modules & AI integrations for ViBe learning platform. PhD researcher collaboration.",
    accent: true,
  },
  {
    date: "MAY — JUL 2025",
    title: "Summer Analyst",
    org: "Goldman Sachs",
    description:
      "Compliance tech. Angular/NgRx panels. −60% analyst response time.",
    accent: false,
  },
];

export default function ExpertisePage() {
  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-20">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 border-b-4 border-brutal-black pb-12">
        <div className="scroll-reveal max-w-3xl">
          <p className="brutal-kicker">Background</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">
            Solving <span className="brutal-highlight">complex</span> problems with{" "}
            <span className="brutal-highlight">code</span>.
          </h1>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 scroll-reveal">
            <div className="brutal-card p-0 overflow-hidden shadow-brutal-lg relative aspect-[4/5] bg-brutal-white">
              <ProtectedImage file="My.jpeg" alt="Vedansh Arora" priority />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-8 scroll-reveal">
            <h2 className="font-headline-xl uppercase">
              Building for global scale.
            </h2>
            <div className="font-mono text-sm space-y-4 text-brutal-gray border-l-4 border-brutal-black pl-6">
              <p>
                I am Vedansh Arora, a B.Tech (IT) graduate with a proven track record in
                real-time compliance solutions and high-performance web applications — from
                Goldman Sachs to AI-assisted platforms.
              </p>
              <p>
                I bridge technical architecture with user-centric design, building scalable,
                secure, and intuitive digital experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Ex-Summer Analyst @ Goldman Sachs",
                "Ex-Intern @ IIT Ropar",
                "JIIT Noida",
              ].map((badge) => (
                <span key={badge} className="brutal-tag-accent text-[11px]">
                  {badge}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="brutal-card p-4 bg-brutal-cyan">
                <span className="brutal-label text-[11px]">Languages</span>
                <p className="font-mono text-xs">C++, Java, TypeScript, Python, SQL, HTML, CSS</p>
              </div>
              <div className="brutal-card p-4 bg-brutal-yellow">
                <span className="brutal-label text-[11px]">Tools</span>
                <p className="font-mono text-xs">Docker, AWS, Git, MLflow, DVC, VSCode</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 border-t-4 border-brutal-black pt-16">
        <p className="brutal-kicker scroll-reveal">Capabilities</p>
        <h2 className="brutal-section-title mb-8 scroll-reveal">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className={`brutal-card p-6 scroll-reveal h-full flex flex-col ${card.color}`}
            >
              <h3 className="font-headline-lg uppercase mb-3">{card.title}</h3>
              <p className="font-mono text-xs text-brutal-gray mb-4 flex-grow">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="brutal-tag text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="brutal-card p-6 col-span-full scroll-reveal bg-brutal-white grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="font-headline-lg uppercase mb-3">Product Strategy</h3>
              <p className="font-mono text-xs text-brutal-gray">
                SDLC practices and stakeholder communication at leading financial institutions.
              </p>
            </div>
            <div className="md:border-l-4 md:border-brutal-black md:pl-6 space-y-2">
              {["Compliance Tech", "Mers Modules", "Operational Risk"].map((item) => (
                <p key={item} className="font-mono text-xs before:content-['✓_']">{item}</p>
              ))}
            </div>
          </div>

          <div className="brutal-card p-6 col-span-full scroll-reveal bg-brutal-yellow">
            <h3 className="font-headline-lg uppercase mb-3">Certifications</h3>
            <p className="font-mono text-xs text-brutal-gray mb-4">
              6 credentials across AI, data analytics, cyber-physical systems, and safe AI.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {CERTIFICATIONS.map((cert) => (
                <a
                  key={cert.name}
                  href={`/certificates/${encodeURIComponent(cert.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-brutal-black bg-brutal-white px-3 py-3 font-mono text-[10px] uppercase text-center leading-snug min-h-[3.25rem] flex items-center justify-center hover:bg-brutal-cyan transition-colors"
                >
                  {cert.name}
                </a>
              ))}
            </div>
            <a href="#certifications" className="brutal-link text-xs">
              View all certificates →
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 border-t-4 border-brutal-black pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 scroll-reveal lg:sticky lg:top-32 lg:self-start">
            <h2 className="brutal-section-title uppercase">
              Experience<br />History
            </h2>
            <div className="mt-8 brutal-card p-6 bg-brutal-muted">
              <p className="brutal-label text-[11px] mb-4">Education</p>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="font-bold uppercase">JIIT, Noida</p>
                  <p className="text-brutal-gray">B.Tech IT (2023–2026)</p>
                </div>
                <div>
                  <p className="font-bold uppercase">IMS Engineering</p>
                  <p className="text-brutal-gray">B.Tech CSE (Transfer)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {experienceItems.map((item) => (
              <div
                key={item.title}
                className={`scroll-reveal brutal-card p-6 ${item.accent ? "bg-brutal-yellow" : "bg-brutal-white"}`}
              >
                <span className={`brutal-tag text-[10px] mb-3 inline-block ${item.accent ? "bg-brutal-black text-brutal-yellow" : ""}`}>
                  {item.date}
                </span>
                <h3 className="font-headline-lg uppercase">{item.title}</h3>
                <p className="font-mono text-xs uppercase text-brutal-gray mb-2">{item.org}</p>
                <p className="font-mono text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 border-t-4 border-brutal-black pt-16"
      >
        <p className="brutal-kicker scroll-reveal">Credentials</p>
        <h2 className="brutal-section-title mb-8 scroll-reveal">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, index) => {
            const accents = ["bg-brutal-yellow", "bg-brutal-cyan", "bg-brutal-pink", "bg-brutal-white"];
            const accent = accents[index % accents.length];
            const href = `/certificates/${encodeURIComponent(cert.file)}`;

            return (
              <a
                key={cert.name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`scroll-reveal brutal-card p-5 ${accent} group flex flex-col gap-3`}
              >
                <span className="brutal-tag text-[10px] w-fit">PDF</span>
                <h3 className="font-headline-lg uppercase text-sm leading-snug group-hover:underline">
                  {cert.name}
                </h3>
                <span className="font-mono text-xs mt-auto">View Certificate →</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="brutal-panel p-10 md:p-20 text-center scroll-reveal bg-brutal-yellow">
          <h2 className="font-display-lg text-headline-xl uppercase mb-4">
            Ready to build something <span className="brutal-highlight bg-brutal-white">exceptional</span>?
          </h2>
          <p className="font-mono text-sm mb-8 max-w-md mx-auto">
            Let&apos;s engineer the next generation of digital solutions.
          </p>
          <Link href="/contact" className="brutal-btn px-10 py-4 text-sm">
            Connect →
          </Link>
        </div>
      </section>
    </main>
  );
}
