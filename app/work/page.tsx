import Link from "next/link";
import Image from "next/image";
import {
  GITHUB_PROJECTS,
  RESUME_URL,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from "@/lib/constants";
import ProjectImage from "@/components/ProjectImage";

export default function WorkPage() {
  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-20">
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 border-b-4 border-brutal-black pb-12">
        <div className="scroll-reveal">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase">
            Work
          </h1>
          <p className="font-mono text-sm text-brutal-gray mt-6 max-w-xl border-l-4 border-brutal-black pl-4">
            Professional experience and shipped projects from my GitHub.
          </p>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 scroll-reveal">
          <div>
            <p className="brutal-kicker">01</p>
            <h2 className="brutal-section-title">Experience</h2>
          </div>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-link"
          >
            Full Resume →
          </a>
        </div>

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((job) => (
            <div
              key={job.role}
              className={`scroll-reveal brutal-card p-6 md:p-8 border-l-8 border-l-brutal-black ${job.accent}`}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 border-4 border-brutal-black bg-brutal-white overflow-hidden">
                  <Image
                    src={job.logo}
                    alt={`${job.org} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="font-headline-lg uppercase">{job.role}</h3>
                      <p className="font-mono text-xs uppercase text-brutal-gray mt-1">{job.org}</p>
                    </div>
                    <span className="brutal-tag font-mono text-xs shrink-0 self-start">{job.date}</span>
                  </div>
                  <ul className="font-mono text-sm space-y-2 list-none">
                    {job.highlights.map((item) => (
                      <li key={item} className="before:content-['→_'] before:font-bold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 scroll-reveal border-t-4 border-brutal-black pt-16">
          <div>
            <p className="brutal-kicker">02</p>
            <h2 className="brutal-section-title">Projects</h2>
          </div>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-link"
          >
            GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GITHUB_PROJECTS.map((project) => (
            <article
              key={project.title}
              className="scroll-reveal brutal-card p-0 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video border-b-4 border-brutal-black">
                <ProjectImage variant={project.variant} alt={project.title} />
              </div>
              <div className="p-6 flex flex-col flex-grow gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="brutal-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="font-headline-lg uppercase">{project.title}</h3>
                <p className="font-mono text-sm text-brutal-gray flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn px-5 py-2 text-xs"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-20">
        <div className="brutal-panel p-10 md:p-16 text-center scroll-reveal bg-brutal-pink">
          <h2 className="brutal-section-title mb-4">Have a vision?</h2>
          <p className="font-mono text-sm mb-8 max-w-md mx-auto">
            Looking for Software Engineering and AI opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="brutal-btn px-10 py-4 text-sm">
              Start a Project →
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-outline px-10 py-4 text-sm"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
