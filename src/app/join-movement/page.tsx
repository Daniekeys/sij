import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import jimmyWhite from "@/app/assets/jimmy-white.jpeg";
import SiteNavbar from "@/app/components/site-navbar";

export const metadata: Metadata = {
  title: "Join the Movement | SIJ",
  description:
    "Volunteer, endorse, and join the movement for community impact.",
};

const events = [
  ["Oct 14", "Town Hall: Ilorin East Education Reform", "10:00 AM · Gambari"],
  ["Oct 18", "Youth Empowerment Workshop", "02:30 PM · Oke-Ogun"],
  ["Oct 25", "Stakeholder Policy Review", "11:00 AM · Virtual"],
];

export default function JoinMovementPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteNavbar ctaLabel="Endorse SIJ" ctaHref="/economic-blueprint" />

      <main className="mx-auto max-w-7xl px-6 py-10 pt-28 md:px-8 md:py-16 md:pt-32">
        <section className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h1 className="font-headline text-5xl leading-tight text-primary md:text-7xl">
                The People’s Servant,
                <br />
                <span className="italic text-secondary">A Global Vision.</span>
              </h1>
              <p className="mt-4 max-w-md text-lg leading-8 text-on-surface-variant">
                Join the mission to redefine governance through integrity,
                transparency, and grassroots empowerment in Ilorin.
              </p>
            </div>
            <div className="ambient-glow relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src={jimmyWhite}
                alt="Jimmy Idiagbon in white attire"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <section className="rounded-[1.5rem] bg-surface-container-lowest p-8 shadow-ambient md:p-10">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                Volunteer for SIJ
              </span>
              <h2 className="mb-3 font-headline text-4xl text-primary">
                Lead Capture Form
              </h2>
              <p className="mb-8 text-on-surface-variant">
                Fill out your details to join the grassroots mobilization team.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Full Name
                  </span>
                  <input
                    className="w-full border-0 border-b-2 border-surface-variant bg-transparent py-3 outline-none focus:border-secondary"
                    placeholder="Enter your full name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Phone Number
                  </span>
                  <input
                    className="w-full border-0 border-b-2 border-surface-variant bg-transparent py-3 outline-none focus:border-secondary"
                    placeholder="+234"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Select Ward
                </span>
                <select className="w-full border-0 border-b-2 border-surface-variant bg-transparent py-3 outline-none focus:border-secondary">
                  <option>Agba/Obanisua</option>
                  <option>Gambari I</option>
                  <option>Oke-Ogun</option>
                  <option>Okaka I</option>
                </select>
              </label>
              <div className="mt-8">
                <Link
                  href="/legacy"
                  className="flex w-full items-center justify-center rounded-xl bg-secondary-container px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-on-secondary-container"
                >
                  Submit Interest
                </Link>
              </div>
            </section>

            <section className="rounded-[1.5rem] bg-surface-container-low p-8 md:p-10">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                    Upcoming Events
                  </span>
                  <h2 className="font-headline text-4xl text-primary">
                    Community Gatherings
                  </h2>
                </div>
                <Link
                  href="/economic-blueprint"
                  className="text-sm font-semibold text-primary"
                >
                  View Calendar
                </Link>
              </div>

              <div className="space-y-4">
                {events.map(([date, title, meta]) => (
                  <article
                    key={title}
                    className="rounded-xl bg-surface-container-lowest p-5"
                  >
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                      {date}
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {meta}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="mt-16 rounded-[1.5rem] bg-primary-container px-8 py-12 text-white md:px-12">
          <h2 className="max-w-3xl font-headline text-3xl md:text-5xl">
            Governance is a shared responsibility. Your voice is the catalyst
            for change.
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/economic-blueprint"
              className="rounded-full bg-secondary-container px-6 py-3 font-semibold text-on-secondary-container"
            >
              Read the Blueprint
            </Link>
            <Link
              href="/legacy"
              className="rounded-full bg-white/10 px-6 py-3 font-semibold text-white"
            >
              Discover the Legacy
            </Link>
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
