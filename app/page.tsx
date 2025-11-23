import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-slate-50 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

      {/* Hero */}
      <section className="fade-in-up w-full max-w-5xl px-6 pt-20 pb-10 text-center">

        <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-sm text-sky-300 mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live Air Studio • Grade 11 Science Project
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text side */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Composition of{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-transparent">
                Air
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Explore Oxygen, Nitrogen, Carbon Dioxide and Argon like a
              futuristic control panel instead of a boring textbook page.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="/oxygen"
                className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition"
              >
                Start with Oxygen
              </Link>
              <Link
                href="/nitrogen"
                className="rounded-full border border-slate-500 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-300 transition"
              >
                View all gases
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Developer: <span className="text-sky-300">Mr. Hein Sat</span> ·
              Grade 11 · AMI International School
            </p>
          </div>

          {/* Orb side */}
          <div className="flex-1 flex justify-center">
            <div className="air-orb relative h-56 w-56 rounded-full bg-gradient-to-br from-sky-500/70 via-indigo-500/60 to-emerald-400/70">
              <div className="absolute inset-10 rounded-full bg-slate-950/40 backdrop-blur-sm border border-sky-200/30 flex flex-col items-center justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Major Gases
                </p>
                <p className="mt-2 text-4xl font-bold">100%</p>
                <p className="mt-1 text-xs text-slate-400">
                  Earth&apos;s lower atmosphere
                </p>
              </div>
              <div className="absolute -left-3 top-8 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-sky-200 border border-sky-500/50">
                N₂ • 78%
              </div>
              <div className="absolute -right-4 bottom-10 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-emerald-200 border border-emerald-500/50">
                O₂ • 21%
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] text-slate-300 border border-slate-500/60">
                CO₂ &amp; Ar • &lt; 1%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gas cards */}
      <section className="fade-in-up fade-in-up-delay-1 w-full max-w-5xl px-6 pb-20">

        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Air Spectrum – main gases in our atmosphere
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Nitrogen */}
          <Link
            href="/nitrogen"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-sky-500/60 hover:-translate-y-1 transition transform"
          >
            <p className="text-xs text-slate-400 mb-1">N₂</p>
            <p className="text-lg font-semibold text-sky-300">Nitrogen</p>
            <p className="text-2xl font-bold mt-2">78%</p>
            <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
              The main “filler” gas that keeps oxygen from being too reactive.
            </p>
          </Link>

          {/* Oxygen */}
          <Link
            href="/oxygen"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-emerald-400/70 hover:-translate-y-1 transition transform"
          >
            <p className="text-xs text-slate-400 mb-1">O₂</p>
            <p className="text-lg font-semibold text-emerald-300">Oxygen</p>
            <p className="text-2xl font-bold mt-2">21%</p>
            <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
              Supports breathing, burning and almost all life processes.
            </p>
          </Link>

          {/* Argon */}
          <Link
            href="/argon"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-violet-400/70 hover:-translate-y-1 transition transform"
          >
            <p className="text-xs text-slate-400 mb-1">Ar</p>
            <p className="text-lg font-semibold text-violet-300">Argon</p>
            <p className="text-2xl font-bold mt-2">0.93%</p>
            <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
              Noble gas, chemically lazy but important in air and light bulbs.
            </p>
          </Link>

          {/* CO₂ */}
          <Link
            href="/carbon-dioxide"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-rose-400/70 hover:-translate-y-1 transition transform"
          >
            <p className="text-xs text-slate-400 mb-1">CO₂</p>
            <p className="text-lg font-semibold text-rose-300">CO₂</p>
            <p className="text-2xl font-bold mt-2">0.04%</p>
            <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
              Tiny percentage, huge impact on climate and photosynthesis.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
