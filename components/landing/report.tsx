import { FileDown, Share2, Printer } from "lucide-react"

export function Report() {
  return (
    <section id="report" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Exportable PDF report
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Generate a structured PDF report that can be shared with designers, marketers or clients without additional formatting.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileDown className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Download as PDF</p>
                  <p className="text-xs text-muted-foreground">Export the full report in one click</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Share2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Share with team</p>
                  <p className="text-xs text-muted-foreground">Send directly to collaborators</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Printer className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Print-ready</p>
                  <p className="text-xs text-muted-foreground">Clean formatting for print</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Report Preview</span>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">PDF</span>
              </div>
              <div className="flex flex-col gap-3 rounded-lg bg-muted p-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-primary/20" />
                  <div className="h-2.5 w-28 rounded-full bg-foreground/20" />
                </div>
                <div className="h-px w-full bg-border" />
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-full rounded-full bg-foreground/10" />
                  <div className="h-2 w-4/5 rounded-full bg-foreground/10" />
                  <div className="h-2 w-3/5 rounded-full bg-foreground/10" />
                </div>
                <div className="h-px w-full bg-border" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-md bg-background p-2">
                    <div className="mb-1 h-2 w-12 rounded-full bg-foreground/15" />
                    <div className="h-3 w-8 rounded-full bg-primary/30" />
                  </div>
                  <div className="rounded-md bg-background p-2">
                    <div className="mb-1 h-2 w-12 rounded-full bg-foreground/15" />
                    <div className="h-3 w-8 rounded-full bg-primary/30" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 w-full rounded-full bg-foreground/10" />
                  <div className="h-2 w-5/6 rounded-full bg-foreground/10" />
                  <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
