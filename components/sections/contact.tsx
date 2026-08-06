import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { contact, profile } from "@/content/portfolio";

export function Contact() {
  const github = profile.socials.find((item) => item.label === "GitHub");

  return (
    <section
      id="contact"
      className="scroll-mt-14"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-primary">
            {contact.title}
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-2xl font-medium tracking-tight text-fg md:text-3xl"
          >
            {contact.subtitle}
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-4 md:max-w-2xl">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-bg-elevated px-5 py-5 transition-colors duration-200 hover:border-primary/50"
          >
            <div>
              <p className="font-mono text-[11px] tracking-wide text-fg-muted">
                Email
              </p>
              <p className="mt-2 text-sm text-fg md:text-base">{profile.email}</p>
            </div>
            <Mail className="size-4 shrink-0 text-fg-muted transition-colors group-hover:text-primary" />
          </a>

          {github && (
            <Link
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-bg-elevated px-5 py-5 transition-colors duration-200 hover:border-primary/50"
            >
              <div>
                <p className="font-mono text-[11px] tracking-wide text-fg-muted">
                  GitHub
                </p>
                <p className="mt-2 text-sm text-fg md:text-base">
                  查看代码与实践
                </p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-fg-muted transition-colors group-hover:text-primary" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
