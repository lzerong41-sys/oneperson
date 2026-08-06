import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { workflow } from "@/content/portfolio";

export function Workflow() {
  return (
    <section
      id="workflow"
      className="scroll-mt-14 border-b border-line"
      aria-labelledby="workflow-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-primary">
            {workflow.title}
          </p>
          <h2
            id="workflow-heading"
            className="mt-3 text-2xl font-medium tracking-tight text-fg md:text-3xl"
          >
            {workflow.subtitle}
          </h2>
        </div>

        <ol className="relative mt-14 grid items-stretch gap-4 md:mt-16 md:grid-cols-5 md:gap-3">
          {workflow.steps.map((step, index) => (
            <li key={step.id} className="relative flex md:min-h-0">
              {index < workflow.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-10 left-[1.15rem] h-[calc(100%-0.5rem)] w-px bg-line md:hidden"
                />
              )}

              <Card className="relative flex h-full w-full flex-col border-line bg-bg-elevated shadow-none transition-colors duration-200 hover:border-primary/50">
                <CardHeader className="flex flex-1 flex-col gap-3">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-bg font-mono text-sm text-primary">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <CardTitle className="text-base text-fg md:min-h-10 md:text-[15px] lg:text-base">
                      {step.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="flex-1 text-sm leading-relaxed text-fg-muted">
                    {step.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto pt-0">
                  <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-line bg-bg px-2 py-0.5 font-mono text-[11px] text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-2xl border-l border-primary/40 pl-5 text-sm leading-relaxed text-fg-muted md:mt-16 md:text-base">
          {workflow.closing}
        </p>
      </div>
    </section>
  );
}
