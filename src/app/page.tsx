import Image from "next/image";
import Link from "next/link";
import jimmyBlue from "@/app/assets/jimmy-blue.jpeg";
import SiteNavbar from "@/app/components/site-navbar";

const tickerItems = [
  { value: "300+", label: "Scholarships Awarded" },
  { value: "500+", label: "JAMB Forms Distributed" },
  { value: "30,000+", label: "Books Distributed" },
];

const pillars = [
  {
    title: "Education",
    copy: "Empowering the youth through merit-based scholarships and essential learning resources across the region.",
  },
  {
    title: "Energy",
    copy: "Modernizing local infrastructure through sustainable energy initiatives for safer and more productive communities.",
  },
  {
    title: "Empowerment",
    copy: "Fostering entrepreneurship through vocational training and financial support for grassroots development.",
  },
];

export default function Home() {
  return (
    <div className="bg-surface text-on-surface">
      <SiteNavbar ctaLabel="Get Involved" ctaHref="/join-movement" />

      <main className="pt-24 sm:pt-28">
        <section
          id="home"
          className="overflow-hidden px-6 py-14 md:px-10 md:py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12">
            <div className="animate-fade-up md:col-span-7">
              <div className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-on-secondary-container">
                The Sovereign Editorial
              </div>

              <h1 className="text-balance mb-6 font-headline text-5xl italic leading-[0.92] tracking-tight text-primary md:text-7xl lg:text-8xl">
                A Legacy of <span className="text-secondary">Discipline</span>,
                <br />A Future of Progress.
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-on-surface-variant md:text-xl">
                Upholding the values of integrity and service to build a
                resilient Kwara. Through strategic empowerment and educational
                excellence, we forge a path for the next generation.
              </p>

              <div className="animate-fade-up delay-1 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/legacy"
                  className="cta-magic glow-pulse rounded-xl bg-gradient-to-br from-primary to-primary-container px-6 py-4 text-center font-semibold text-on-primary transition hover:opacity-90"
                >
                  Explore the Mission →
                </Link>
                <Link
                  href="/economic-blueprint"
                  className="card-magic rounded-xl bg-surface-container-low px-6 py-4 text-center font-semibold text-primary transition hover:bg-surface-container"
                >
                  View Impact
                </Link>
              </div>
            </div>

            <div className="animate-fade-up delay-2 relative md:col-span-5">
              <div className="ambient-glow relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-lowest">
                <Image
                  src={jimmyBlue}
                  alt="Jimmy Idiagbon portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
              <div className="float-gentle absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-secondary-fixed/40 blur-3xl" />
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-primary-container py-8 text-white">
          <div className="animate-impact-scroll flex w-max gap-16 whitespace-nowrap px-6">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center gap-4"
              >
                <span className="font-headline text-4xl italic text-secondary-container md:text-5xl">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-white/75 md:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="mission" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <h2 className="mb-5 font-headline text-4xl italic text-primary md:text-5xl">
                Foundations of a New Legacy
              </h2>
              <p className="leading-8 text-on-surface-variant">
                Focusing effort where it matters most. Each pillar is a
                commitment to sustainable growth and the restoration of communal
                discipline.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="card-magic rounded-xl bg-surface-container-lowest p-8 shadow-ambient transition hover:bg-primary-container hover:text-white"
                >
                  <div className="mb-6 inline-flex rounded-lg bg-primary-fixed px-3 py-2 text-sm font-semibold text-on-primary-fixed">
                    •
                  </div>
                  <h3 className="mb-4 font-headline text-3xl italic">
                    {pillar.title}
                  </h3>
                  <p className="leading-7 text-on-surface-variant hover:text-white/80">
                    {pillar.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <header className="mb-14 grid items-end gap-6 md:grid-cols-12">
              <div className="md:col-span-8">
                <span className="mb-4 inline-flex rounded-full bg-secondary-fixed px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-on-secondary-fixed">
                  Social Impact Portfolio
                </span>
                <h2 className="font-headline text-5xl italic leading-[0.95] tracking-tight text-primary md:text-7xl">
                  A Record of Service &amp; Legacy.
                </h2>
              </div>
              <div className="md:col-span-4">
                <p className="leading-8 text-on-surface-variant">
                  Guided by quiet discipline and radical transparency, this work
                  focuses on sustainable community infrastructure and emergency
                  human intervention.
                </p>
              </div>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="ambient-glow card-magic relative min-h-[460px] overflow-hidden rounded-xl md:col-span-2">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,27,15,0.92), rgba(0,27,15,0.35), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsyzk1Ul2ljy5eOfBc-5UgPgupQCe8-uIP5hQOTtW7yItytfTK-i9p_eGuZqxct6BlpzG43DRPwXHzwC1olGjeK57IZGpglPv4pnLebQpgAuabhmw_w9cRj_GDzxBHUeHcsglWkFTdfujdBJlAiCXgmpCS1QoCCW56XhafKMAAsoO1bgD9H_uqvGCk3fpA61jFdDWxTB2mRZJ9pbSWYovLt1y9bd0jQWtx0z9HgeC-zgtIIlw-m3gZmNBIYxC6dkaCv7MsTXAOINg')",
                  }}
                />
                <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                  <span className="mb-4 text-sm uppercase tracking-[0.25em] text-secondary-fixed">
                    Infrastructural Development
                  </span>
                  <h3 className="mb-4 max-w-2xl font-headline text-3xl italic text-white md:text-4xl">
                    Motorized Boreholes for Clean Water
                  </h3>
                  <p className="mb-6 max-w-2xl leading-7 text-white/80">
                    Restoring dignity through sustainable access. High-capacity
                    water systems now serve thousands of households with
                    reliable filtration and motorized distribution.
                  </p>
                  <div className="inline-flex w-fit rounded-full border border-primary-fixed/30 bg-primary-fixed/20 px-5 py-2 text-sm text-primary-fixed">
                    12+ Active Sites
                  </div>
                </div>
              </article>

              <article className="card-magic relative min-h-[460px] overflow-hidden rounded-xl bg-primary">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD0HBdpDraSNSOCJqLRcuIN6KwteJw13sHcwsIopn4ovvt8exWaqs4XFupefzR4ze68roexuwDumCbHRZSqAus2zFhN737SCiSz9okMST24MHIRWBY0t4S1m9XlzwOZwvSgyNx6v4IqE0I5ohvQ1qq1ErmetiZgF2E2vVNXbg4j3ZXkjWuStyj-NNT1cLFYWoGvi0yBDWu_-6TLL3CnkqcDEY5KRyi4bH5TW46mQGFqptXXBvIyxxYLYVz3hlk4Xp7txSh_AXBNJs')",
                  }}
                />
                <div className="relative flex h-full flex-col justify-between p-8 text-white md:p-10">
                  <div>
                    <span className="mb-5 block text-4xl text-secondary-container">
                      ☀
                    </span>
                    <h3 className="font-headline text-3xl italic leading-tight">
                      Solar Energy Poles for Community Safety
                    </h3>
                  </div>
                  <div>
                    <p className="mb-6 leading-7 text-white/75">
                      Enhancing night-time economy and security by installing
                      autonomous solar lighting systems in critical community
                      hubs.
                    </p>
                    <Link
                      href="/economic-blueprint"
                      className="font-semibold text-secondary-container"
                    >
                      View Deployment Map →
                    </Link>
                  </div>
                </div>
              </article>

              <article className="card-magic rounded-xl bg-surface-container-low p-8 shadow-ambient">
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                  Crisis Intervention
                </span>
                <h3 className="mb-4 font-headline text-2xl text-primary">
                  The Mr. Jamiu Story: A Life Reclaimed
                </h3>
                <p className="mb-8 text-sm leading-7 text-on-surface-variant">
                  A rapid-response case study in medical advocacy and financial
                  bridge-building during a critical health emergency.
                </p>
                <Link href="/legacy" className="font-semibold text-primary">
                  Read the Narrative →
                </Link>
              </article>

              <article className="card-magic rounded-xl bg-primary-container p-8 text-center text-primary-fixed">
                <span className="text-xs uppercase tracking-[0.25em] text-primary-fixed/70">
                  Accountability Score
                </span>
                <div className="mt-3 font-headline text-6xl italic">100%</div>
                <p className="mt-4 text-sm leading-7 text-primary-fixed/80">
                  Direct funding implementation with zero intermediary leakage.
                </p>
              </article>

              <article className="card-magic rounded-xl bg-secondary-container p-8 text-on-secondary-container">
                <h3 className="mb-4 font-headline text-2xl italic">
                  Upcoming: The Legacy Vocational Hub
                </h3>
                <p className="mb-8 text-sm leading-7 text-on-secondary-container/80">
                  Our next roadmap includes a digital skills center focused on
                  youth empowerment in semi-urban communities.
                </p>
                <Link
                  href="/join-movement"
                  className="inline-flex rounded-lg bg-primary-container px-5 py-3 font-semibold text-on-primary"
                >
                  Support This Vision
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 block text-4xl text-outline-variant">“</span>
            <p className="mb-6 font-headline text-3xl italic leading-tight text-primary md:text-4xl">
              Philanthropy is not an act of charity, but a strategic investment
              in the collective resilience of our people. We build to last.
            </p>
            <cite className="not-italic text-sm font-bold uppercase tracking-[0.3em] text-secondary">
              — Shola Jimmy Idiagbon
            </cite>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-20 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-headline text-4xl italic text-primary md:text-5xl">
              Join the Movement for Progress
            </h2>
            <p className="mx-auto mb-8 max-w-2xl leading-8 text-on-surface-variant">
              Receive updates on education, empowerment, and direct-impact
              programs shaping the next chapter of service.
            </p>
            <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-1 py-3 text-lg outline-none transition focus:border-secondary"
              />
              <Link
                href="/join-movement"
                className="cta-magic rounded-xl bg-secondary-container px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-on-secondary-container transition hover:opacity-90"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="bg-surface-container-low px-6 py-10 md:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-headline text-xl italic text-primary">SIJ</div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.2em] text-primary/70">
            <a href="#home">Home</a>
            <a href="#mission">About</a>
            <a href="#impact">Impact</a>
          </div>
          <p className="text-center text-sm uppercase tracking-[0.2em] text-primary/60">
            © 2026 Shola Jimmy Idiagbon. A Legacy of Discipline.
          </p>
        </div>
      </footer>
    </div>
  );
}
