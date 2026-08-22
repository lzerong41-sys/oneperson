import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { Button } from "@/components/ui/button";
import { getProjectById, projects } from "@/content/portfolio";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "项目未找到" };
  }

  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <article className="border-b border-line">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/#projects"
          className="text-sm text-fg-muted transition-colors hover:text-fg"
        >
          ← 返回项目作品
        </Link>

        <header className="mt-8 border-b border-line pb-10">
          <p className="font-mono text-xs tracking-widest text-primary">
            项目详情
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-fg md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
            {project.oneLiner}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-line bg-bg-elevated px-2.5 py-1 font-mono text-[11px] text-fg-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <Section title="项目背景">
          <p>{project.background}</p>
        </Section>

        <Section title="用户问题">
          <p>{project.problem}</p>
        </Section>

        <Section title="产品方案">
          <p>{project.solution}</p>
        </Section>

        <Section title="我的角色">
          <p>{project.role}</p>
        </Section>

        <Section title="功能结构">
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="AI辅助开发流程">
          <ol className="space-y-6">
            {project.aiWorkflow.map((step, index) => (
              <li key={step.title} className="grid gap-2 sm:grid-cols-[3.5rem_1fr]">
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium text-fg">{step.title}</p>
                  <p className="mt-2 text-fg-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={project.galleryTitle ?? "页面展示"}>
          <ProjectGallery items={project.gallery} />
        </Section>

        <Section title="项目总结" isLast>
          <p>{project.summary}</p>
        </Section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/#projects">查看全部项目</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#contact">联系我</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
  isLast = false,
}: {
  title: string;
  children: ReactNode;
  isLast?: boolean;
}) {
  return (
    <section
      className={
        isLast
          ? "py-10"
          : "border-b border-line py-10"
      }
    >
      <h2 className="text-lg font-medium text-fg">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-fg-muted">
        {children}
      </div>
    </section>
  );
}
