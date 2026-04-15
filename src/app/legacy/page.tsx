import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import jimmyWhite from "@/app/assets/jimmy-white.jpeg";
import SiteNavbar from "@/app/components/site-navbar";

export const metadata: Metadata = {
  title: "Legacy | SIJ",
  description: "The heritage, values, and public service legacy behind SIJ.",
};

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteNavbar ctaLabel="Support" ctaHref="/join-movement" />

      <main className="pt-24 sm:pt-28">
        <section className="relative overflow-hidden px-6 py-16 md:px-8 md:py-24">
          <div
            className="absolute inset-0 opacity-20 grayscale"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDW6i6617d7VBTR9jv9vMH69MfLr80J3WCIiR8LMQqDq-CPt5f9tVf8wqDLFNNfZA2utU5TPM-UijdXQRr44XM63BfsN_Sl81OO-p114EGDdRZf2MZ807PPnQnc-VRqi4Exb-4lsDxhkDC6FpWGEPkD3fcYVveHqhya9A2-DZQ_9TT89kp0_ZQ1W923UITNh-Fqb-fksO96T4eDRvktYazdoSKJS6hj92PuE2dC1VWiF8NZ2-srjSPLdADhmyqOFUs_3oc9p-XXD6s')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="mb-5 inline-flex rounded-full bg-secondary-container px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-on-secondary-container">
                The Name Behind the Vision
              </span>
              <h1 className="mb-6 font-headline text-5xl leading-[0.9] tracking-tight text-primary md:text-7xl lg:text-8xl">
                Shola Jimmy <br /> Idiagbon
              </h1>
              <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
                Carrying a mantle of discipline and excellence into a new era of
                representative leadership for Kwara.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="ambient-glow relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={jimmyWhite}
                  alt="Jimmy Idiagbon portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            <div
              className="aspect-[4/5] rounded-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbvs6Mi1j1H_DrjPNLVCi_qLs_h-kbUXdUToR_MKA5ZvvQ3Ttz3CJ-dT3Q9aMWrXaGvLaUqtHMDm4qvsIsIhwaRkvUG1BFbavigttKQZeXZVtmNsa0u7ZRAAhFdyP7GjyyXBP3iL-PWIlHichJfWHwQUcznktltk29WXxdx3vIoYL_TbB1bwoxOAxiSLkyyuzKyWzLWzhdofxmrvxDIW9iiJugZWmHuxlx8VXQpE52LpdBgraNnlKVfrLm16i7y3AG81XU1UEa3CM')",
              }}
            />
            <div>
              <h2 className="mb-6 font-headline text-4xl italic text-primary md:text-5xl">
                Heritage of Integrity
              </h2>
              <div className="space-y-5 text-lg leading-8 text-on-surface-variant">
                <p>
                  For generations, the name Idiagbon has been synonymous with an
                  unyielding commitment to service and discipline.
                </p>
                <p>
                  This legacy bridges a storied past with a technocratic future,
                  keeping accountability and regional pride at the heart of
                  public duty.
                </p>
              </div>
              <div className="mt-8 rounded-xl bg-surface-container-lowest p-6 shadow-ambient">
                <p className="font-headline text-2xl italic text-primary">
                  We do not inherit the land from our ancestors; we borrow it
                  from our children.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            <article className="rounded-xl bg-primary p-8 text-white md:col-span-2">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-secondary-fixed">
                Global Certification
              </p>
              <h3 className="mb-5 font-headline text-4xl">
                United States Institute of Peace Specialist
              </h3>
              <p className="max-w-2xl leading-8 text-primary-fixed-dim">
                Certified in conflict resolution, bringing world-class mediation
                expertise to local challenges and community bridge-building.
              </p>
            </article>
            <article className="rounded-xl bg-secondary-container p-8 text-on-secondary-container">
              <h3 className="mb-4 font-headline text-3xl">The Peacemaker</h3>
              <p className="leading-8 text-on-secondary-container/80">
                A representative with the technical skill to foster harmony
                between diverse interests.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-surface-container-highest px-6 py-16 text-center md:px-8 md:py-20">
          <p className="mx-auto max-w-5xl font-headline text-4xl leading-none text-primary md:text-7xl">
            Our Brother&apos;s <span className="text-secondary">Keeper</span>
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
            Leadership is not an elevation above the people, but a deepening of
            responsibility toward them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/economic-blueprint"
              className="rounded-full bg-primary px-6 py-3 font-semibold text-on-primary"
            >
              View Economic Blueprint
            </Link>
            <Link
              href="/join-movement"
              className="rounded-full bg-secondary-container px-6 py-3 font-semibold text-on-secondary-container"
            >
              Join the Movement
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
