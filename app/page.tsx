import Link from "next/link";
import { RESUME_URL } from "@/lib/constants";
import ProjectImage from "@/components/ProjectImage";
import ProtectedImage from "@/components/ProtectedImage";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-28 border-b-4 border-brutal-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <div className="max-w-4xl hero-fade-in">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 uppercase">
              Vedansh<br />Arora.
            </h1>
            <p className="font-mono text-lg md:text-xl text-brutal-gray mb-12 max-w-3xl border-l-4 border-brutal-black pl-6">
              B.Tech graduate building digital systems.<br className="hidden md:block" />
              Ex-Goldman Sachs Analyst &amp; IIT Ropar Researcher.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/work" className="brutal-btn px-8 py-4 text-sm">
                Explore Projects →
              </Link>
              <Link href="/expertise" className="brutal-btn-outline px-8 py-4 text-sm">
                View Experience
              </Link>
            </div>
          </div>

          <div className="hero-fade-in hidden lg:block">
            <div className="brutal-card p-0 overflow-hidden shadow-brutal-lg relative aspect-[4/5] max-w-md ml-auto bg-brutal-white">
              <ProtectedImage file="My11.jpg" alt="Vedansh Arora" priority />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 md:bottom-12 right-5 md:right-16 font-mono text-xs uppercase tracking-widest">
          ↓ Scroll
        </div>
      </section>

      <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b-4 border-brutal-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-12 mb-8 scroll-reveal">
            <p className="brutal-kicker">Skills</p>
            <h2 className="brutal-section-title">Core Expertise</h2>
            <div className="brutal-divider mt-4" />
          </div>
          {[
            {
              span: "md:col-span-6",
              title: "Backend Engineering",
              body: "MERN & Python backends. RESTful APIs, JWT auth, databases, and server-side logic.",
              accent: "bg-brutal-cyan",
            },
            {
              span: "md:col-span-6",
              title: "Frontend Engineering",
              body: "Angular, React, Next.js, Tailwind. Mobile-first interfaces with 90%+ test coverage.",
              accent: "bg-brutal-pink",
            },
            {
              span: "md:col-span-4",
              title: "ML Strategy",
              body: "NLP/LLM research to SBERT & MLflow deployments in production.",
              accent: "bg-brutal-yellow",
            },
            {
              span: "md:col-span-8",
              title: "Scale & Performance",
              body: "AWS, Docker, CI/CD. MLOps pipelines cutting model rollout time by 95%.",
              accent: "bg-brutal-white",
            },
          ].map((card) => (
            <div key={card.title} className={`${card.span} brutal-card p-8 scroll-reveal ${card.accent}`}>
              <h3 className="font-headline-lg text-headline-lg mb-4 uppercase">{card.title}</h3>
              <p className="font-mono text-sm text-brutal-gray">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brutal-white border-b-4 border-brutal-black">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 scroll-reveal">
            <h2 className="brutal-section-title">Selected Projects</h2>
            <Link href="/work" className="brutal-link">
              All Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                variant: "taskTracker" as const,
                title: "Task Tracker",
                desc: "Full-stack Next.js app with JWT auth.",
              },
              {
                variant: "chestCancer" as const,
                title: "Chest Cancer Detection",
                desc: "96% accuracy · MLOps on AWS.",
              },
              {
                variant: "resumeRanking" as const,
                title: "AI Resume Ranking",
                desc: "SBERT semantic ranking on EC2.",
              },
            ].map((p) => (
              <Link
                key={p.title}
                href="/work"
                className="scroll-reveal brutal-card p-0 overflow-hidden group"
              >
                <div className="relative aspect-[16/10] border-b-4 border-brutal-black">
                  <ProjectImage variant={p.variant} alt={p.title} />
                </div>
                <div className="p-4">
                  <h3 className="font-headline-lg uppercase mb-1 group-hover:underline">{p.title}</h3>
                  <p className="font-mono text-xs text-brutal-gray">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b-4 border-brutal-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 scroll-reveal">
          <div>
            <p className="brutal-kicker">Experience</p>
            <h2 className="brutal-section-title">The Journey</h2>
          </div>
          <Link href="/expertise" className="brutal-link">
            Full Background →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              role: "Summer Analyst — Engineering",
              org: "Goldman Sachs | 2025",
              desc: "Angular compliance panel · −60% response time.",
            },
            {
              role: "Winter Intern — ViBe Platform",
              org: "IIT Ropar | 2026",
              desc: "MERN modules & NLP/LLM pipelines for adaptive learning.",
            },
          ].map((job) => (
            <Link
              key={job.role}
              href="/expertise"
              className="scroll-reveal brutal-card p-6 border-l-8 border-l-brutal-yellow group"
            >
              <div className="flex flex-col sm:flex-row justify-between mb-3 gap-2">
                <h3 className="font-headline-lg uppercase group-hover:underline">{job.role}</h3>
                <span className="brutal-tag-accent font-mono text-xs shrink-0">{job.org}</span>
              </div>
              <p className="font-mono text-sm text-brutal-gray">{job.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 text-center px-margin-mobile border-b-4 border-brutal-black" id="cta">
        <div className="max-w-3xl mx-auto brutal-panel py-16 px-8 scroll-reveal bg-brutal-yellow">
          <h2 className="font-display-lg text-headline-xl md:text-display-lg mb-6 uppercase">
            Let&apos;s Build.
          </h2>
          <p className="font-mono text-sm mb-10 max-w-md mx-auto">
            Open to Full-Stack Development and AI/ML Engineering roles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="brutal-btn px-10 py-4 text-sm">
              Get in Touch →
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-outline px-10 py-4 text-sm bg-brutal-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
