import Link from "next/link";

import { profile } from "@/content/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-fg">{profile.name}</p>
          <p className="text-xs text-fg-muted">{profile.role}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-fg-muted">
          {profile.socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              className="transition-colors hover:text-fg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-fg"
          >
            邮箱
          </a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
