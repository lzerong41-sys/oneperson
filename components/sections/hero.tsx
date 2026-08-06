import Link from "next/link";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-14 border-b border-line"
      aria-labelledby="hero-name"
    >
      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24 md:py-32">
        <div className="max-w-3xl border-l border-primary/40 pl-5 md:pl-6">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            {profile.role}
          </p>

          <h1
            id="hero-name"
            className="mt-5 text-4xl font-medium tracking-tight text-fg sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-fg-muted md:text-xl">
            {profile.headline}
          </p>

          <p className="mt-5 font-mono text-sm text-fg md:text-base">
            {profile.valueProposition[0]}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 pl-5 md:pl-6">
          <Button asChild size="lg">
            <Link href={profile.primaryCta.href}>{profile.primaryCta.label}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={profile.secondaryCta.href}>
              {profile.secondaryCta.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
