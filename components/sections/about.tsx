import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { about, principles } from "@/content/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-14 border-b border-line"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-widest text-primary">
            关于我
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-2xl font-medium tracking-tight text-fg md:text-3xl"
          >
            产品思维 × AI 工具 × 可验证 Demo
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-fg-muted md:text-[17px]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <aside className="space-y-4 border-l border-line pl-0 lg:pl-8">
            <p className="text-sm font-medium text-fg">我关注的能力</p>
            <ul className="space-y-3 text-sm text-fg-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                软件工程背景
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                AI 工具应用能力
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                产品思维
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                Vibe Coding 方式
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-16 md:mt-20">
          <p className="text-sm font-medium text-fg">产品原则</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, index) => (
              <Card
                key={item.title}
                className="border-line bg-bg-elevated shadow-none"
              >
                <CardHeader>
                  <p className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <CardTitle className="text-base text-fg">{item.title}</CardTitle>
                  <CardDescription className="text-fg-muted leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
