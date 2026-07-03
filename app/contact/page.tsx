import { EMAIL, SOCIAL_LINKS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-24">
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="brutal-kicker">Contact</p>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-6">
                Get in<br />Touch
              </h1>
              <p className="font-mono text-sm text-brutal-gray border-l-4 border-brutal-black pl-4">
                Have a project in mind? Drop a line and let&apos;s build something exceptional.
              </p>
            </div>

            <div className="space-y-6">
              <div className="brutal-card p-5 bg-brutal-cyan">
                <p className="brutal-label text-[11px]">Email</p>
                <a
                  className="font-mono text-sm font-bold hover:underline break-all"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <div className="brutal-card p-5 bg-brutal-yellow">
                <p className="brutal-label text-[11px]">Location</p>
                <p className="font-mono text-sm font-bold">Ghaziabad, Uttar Pradesh, India</p>
              </div>
            </div>

            <div>
              <p className="brutal-label mb-4">Connect</p>
              <div className="flex flex-col gap-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn-outline px-6 py-3 text-xs justify-start"
                >
                  LinkedIn →
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn-outline px-6 py-3 text-xs justify-start"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="brutal-panel p-6 md:p-10 bg-brutal-white">
              <p className="brutal-kicker mb-6">Send Message</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
