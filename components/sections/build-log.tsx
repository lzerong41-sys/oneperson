import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buildLog } from "@/content/portfolio";

export function BuildLog() {
  return (
    <section
      id="build-log"
      className="scroll-mt-14 border-b border-line"
      aria-labelledby="build-log-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-primary">
            {buildLog.title}
          </p>
          <h2
            id="build-log-heading"
            className="mt-3 text-2xl font-medium tracking-tight text-fg md:text-3xl"
          >
            {buildLog.subtitle}
          </h2>
        </div>

        <ol className="relative mt-14 grid items-stretch gap-4 md:mt-16 md:grid-cols-3 md:gap-4">
          {buildLog.stages.map((stage, index) => (
            <li key={stage.id} className="relative flex">
              {index < buildLog.stages.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-10 left-[1.15rem] h-[calc(100%-0.5rem)] w-px bg-line md:hidden"
                />
              )}

              <Card className="relative flex h-full w-full flex-col border-line bg-bg-elevated shadow-none transition-colors duration-200 hover:border-primary/50">
                <CardHeader className="flex flex-1 flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-bg font-mono text-sm text-primary">
                      {String(stage.step).padStart(2, "0")}
                    </span>
                    <CardTitle className="text-lg text-fg">
                      {stage.title}
                    </CardTitle>
                  </div>

                  <ul className="space-y-2.5">
                    {stage.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardHeader>

                <CardContent className="mt-auto pt-0">
                  <p className="mb-2 font-mono text-[11px] tracking-wide text-fg-muted">
                    工具
                  </p>
                  <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {stage.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded border border-line bg-bg px-2 py-0.5 font-mono text-[11px] text-fg-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-2xl border-l border-primary/40 pl-5 text-sm leading-relaxed text-fg-muted md:mt-16 md:text-base">
          {buildLog.closing}
        </p>
      </div>
    </section>
  );
}
