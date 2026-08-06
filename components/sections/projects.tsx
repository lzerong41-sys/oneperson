import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/content/portfolio";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-14 border-b border-line"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-primary">
            项目作品
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-2xl font-medium tracking-tight text-fg md:text-3xl"
          >
            从场景出发，用 Demo 验证产品方案
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            以下为实践项目，侧重需求拆解、方案设计与 AI 辅助落地验证，不含虚构增长数据。
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block h-full"
            >
              <Card className="flex h-full flex-col border-line bg-bg-elevated shadow-none transition-colors duration-200 group-hover:border-primary/50">
                <CardHeader className="flex flex-1 flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="size-4 text-fg-muted transition-colors group-hover:text-primary" />
                  </div>

                  <CardTitle className="text-lg leading-snug text-fg">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="flex-1 text-sm leading-relaxed text-fg-muted">
                    {project.oneLiner}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-line bg-bg px-2 py-0.5 font-mono text-[11px] text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
