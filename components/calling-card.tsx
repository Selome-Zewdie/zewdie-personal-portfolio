import { ArrowUpRight } from 'lucide-react'

const skills = ['C++', 'Java', 'Python', 'Assembly language', 'Linux', 'Git', 'GitHub', 'AWS']
const experience = ['Aerospace manufacturing', 'Assembly', 'Training coworkers']

export function CallingCard() {
  return (
    <article className="w-full max-w-xl overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="h-2 bg-primary" aria-hidden="true" />

      <div className="flex flex-col gap-8 p-6 sm:p-10">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-semibold text-primary-foreground"
            aria-hidden="true"
          >
            SZ
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Selome Zewdie
            </h1>
            <p className="text-base font-medium text-primary sm:text-lg">
              Computer Science Student at UMass Lowell
            </p>
          </div>
        </header>

        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          I am a computer science student at UMass Lowell. I have experience in aerospace
          manufacturing, assembly, and training coworkers. I am building my programming
          skills in C++, Java, and assembly language.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <TagGroup title="Experience" items={experience} />
          <TagGroup title="Building skills in" items={skills} />
        </div>

        <a
          href="https://www.linkedin.com/in/selome-zewdie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto sm:self-start"
        >
          Connect on LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </article>
  )
}

function TagGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
