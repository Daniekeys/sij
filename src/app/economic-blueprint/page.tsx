import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import jimmyBlue from "@/app/assets/jimmy-blue.jpeg";
import SiteNavbar from "@/app/components/site-navbar";

export const metadata: Metadata = {
  title: "Economic Blueprint | SIJ",
  description:
    "Economic strategy, energy leadership, and infrastructure vision.",
};

const metrics = [
  ["15+", "Years Global Experience"],
  ["$2B+", "Capital Managed"],
  ["3", "Continents Navigated"],
  ["98%", "Efficiency Rate"],
];

const competencies = [
  ["Project Management", "Agile execution for global infrastructure scaling."],
  [
    "Conflict Analysis",
    "Strategic resolution in multi-stakeholder environments.",
  ],
  ["Policy Influence", "Navigating sovereign regulatory frameworks."],
];

export default function EconomicBlueprintPage() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <SiteNavbar ctaLabel="Support" ctaHref="/join-movement" />

      <main className="mx-auto max-w-7xl px-6 py-10 pt-28 md:px-8 md:py-16 md:pt-32">
        <section className="animate-fade-up mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="mb-5 inline-flex rounded-full bg-primary-fixed px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-on-primary-fixed">
              Executive Strategy 2024
            </span>
            <h1 className="mb-6 font-headline text-5xl leading-[0.9] tracking-tight text-primary md:text-7xl">
              Shola Jimmy <br />
              <span className="italic text-secondary">Idiagbon</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-on-surface-variant md:text-xl">
              Architect of global economic bridges, specializing in large-scale
              infrastructure and high-stakes energy consultancy.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="ambient-glow float-gentle relative aspect-[4/5] overflow-hidden rounded-xl grayscale transition hover:grayscale-0">
              <Image
                src={jimmyBlue}
                alt="Jimmy Idiagbon in blue suit"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl bg-surface-container-low p-6 text-center"
            >
              <div className="font-headline text-4xl text-primary">{value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-on-surface-variant">
                {label}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="card-magic rounded-xl bg-surface-container-lowest p-8 shadow-ambient md:col-span-2">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                  Core Domain
                </p>
                <h2 className="font-headline text-4xl text-primary">
                  Global Energy Solutions
                </h2>
              </div>
              <span className="rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold text-on-primary-fixed">
                Featured
              </span>
            </div>
            <p className="mb-6 max-w-2xl leading-8 text-on-surface-variant">
              Strategy development for sustainable hydrocarbon extraction and
              renewable energy integration across West Africa and the Gulf.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="space-y-3 text-sm font-medium text-primary">
                <li>• Upstream Asset Management</li>
                <li>• Energy Transition Policy</li>
                <li>• Supply Chain Resilience</li>
              </ul>
              <div
                className="min-h-56 rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvyzsHXdI-84axW4y1c7I5jj9DqUr7KyjWmPWTefV_2npQ3wtASxq7-sQ87SaIeqxPHGoK2V9zXF4WR8uOGY83fCqP8a86ghp88vImkwqMD8yeG74bm2-9iKbZLIkhlZMHpAs7H-UQYNM_G0hfUa1vleF0KgJkbxOlUE4FrWrR_RAaFUNRrqihzm1ve8B5IwAlK_YMKPSO9IpZ85ZaKFToUlIUMPcTJD1aNVnnaEGNVCVtYDXrUFnZHGtvt6Sqja-uSs0eFB6qyEQ')",
                }}
              />
            </div>
          </article>

          <article className="card-magic rounded-xl bg-primary p-8 text-on-primary">
            <h3 className="mb-6 font-headline text-3xl">
              Executive Competencies
            </h3>
            <div className="space-y-5">
              {competencies.map(([title, text]) => (
                <div key={title}>
                  <div className="font-semibold">{title}</div>
                  <p className="text-sm leading-6 text-primary-fixed-dim">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="card-magic rounded-xl bg-surface-container-low p-8">
            <h3 className="mb-4 font-headline text-3xl text-primary">
              IT Infrastructure
            </h3>
            <p className="mb-6 leading-8 text-on-surface-variant">
              Modernizing digital backbones to support 21st-century commerce and
              smart-city integration.
            </p>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-variant">
              <div className="h-full w-[85%] bg-secondary-container" />
            </div>
            <div className="mt-2 flex justify-between text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span>Data Sovereignty</span>
              <span>85%</span>
            </div>
          </article>

          <article className="card-magic rounded-xl bg-secondary-container p-8 text-on-secondary-container md:col-span-2">
            <h3 className="mb-4 font-headline text-4xl">
              Attracting UAE Investment to Ilorin
            </h3>
            <p className="mb-8 max-w-2xl leading-8 text-on-secondary-container/85">
              Creating a premier investment corridor by aligning diversified
              capital with Kwara’s strategic positioning.
            </p>
            <Link
              href="/join-movement"
              className="cta-magic glow-pulse inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-on-primary"
            >
              View Blueprint in Action
            </Link>
          </article>
        </section>

        <section className="mt-16 rounded-xl bg-surface-container-highest px-6 py-12 text-center md:px-10">
          <p className="mx-auto max-w-4xl font-headline text-3xl italic leading-tight text-primary md:text-5xl">
            Economic integrity is not a metric of wealth, but a measure of
            stability.
          </p>
        </section>
      </main>

      <footer
        id="contact"
        className="bg-surface-container-low px-6 py-10 md:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-headline text-xl italic text-primary">SIJ</div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.2em] text-primary/70">
            <Link href="/">Home</Link>
            <Link href="/legacy">About</Link>
            <Link href="/economic-blueprint">Impact</Link>
          </div>
          <p className="text-center text-sm uppercase tracking-[0.2em] text-primary/60">
            © 2026 Shola Jimmy Idiagbon. A Legacy of Discipline.
          </p>
        </div>
      </footer>
    </div>
  );
}
