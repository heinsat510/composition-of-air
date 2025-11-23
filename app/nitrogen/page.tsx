import GasQuiz from "@/components/GasQuiz";
import Link from "next/link";

export default function NitrogenPage() {
  return (
    <main className="min-h-screen flex flex-col items-center text-slate-50 bg-gradient-to-b from-slate-950 via-sky-950/40 to-slate-950 fade-in-up">

      {/* Top Section */}
      <section className="w-full max-w-5xl px-6 pt-16 pb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            Gas Detail View
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold">
            Nitrogen <span className="text-sky-300">(N₂)</span>
          </h1>
        </div>

        <Link
          href="/"
          className="rounded-full border border-slate-600 px-4 py-1.5 text-sm text-slate-200 hover:border-sky-400 hover:text-sky-200 transition"
        >
          ⬅ Back to overview
        </Link>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-5xl px-6 pb-16 grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-8">
        {/* Left Info Cards */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-sky-400/40 bg-slate-900/70 p-5">
            <p className="text-xs text-sky-300 mb-1">Percentage in air</p>
            <p className="text-4xl font-bold text-sky-200">78%</p>
            <p className="mt-2 text-sm text-slate-300">
              Nitrogen makes up most of the air around us. It does not react
              easily, which helps keep the atmosphere stable and prevents oxygen
              from being too reactive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Why so much Nitrogen?</p>
              <p className="text-sm text-slate-200">
                Nitrogen is very stable. It does not burn or react easily,
                making it a “filler gas” that keeps oxygen levels safe.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Importance in nature</p>
              <p className="text-sm text-slate-200">
                Plants need nitrogen to grow. They absorb nitrogen compounds
                from the soil, which are produced by bacteria and lightning.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400 mb-2">
              Fun facts about Nitrogen
            </p>
            <ul className="text-sm text-slate-200 list-disc list-inside space-y-1">
              <li>Liquid nitrogen is extremely cold (-196°C).</li>
              <li>Used in medicine to freeze warts and preserve samples.</li>
              <li>Makes up almost 4/5 of the entire atmosphere.</li>
            </ul>
          </div>
        </div>

        {/* Right: Nitrogen Molecule Visualization */}
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-sky-500/40 via-indigo-500/40 to-slate-800 border border-sky-400/50 air-orb">
            {/* Two nitrogen atoms */}
            <div className="absolute left-8 top-20 h-16 w-16 rounded-full bg-sky-300/90 border border-sky-100/70 flex items-center justify-center text-slate-950 font-bold">
              N
            </div>
            <div className="absolute right-8 bottom-20 h-16 w-16 rounded-full bg-sky-300/90 border border-sky-100/70 flex items-center justify-center text-slate-950 font-bold">
              N
            </div>

            {/* Bond */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1 w-28 rounded-full bg-sky-200/80" />
            </div>

            {/* Labels */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-sky-300 border border-sky-400/60">
              Diatomic molecule
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 border border-slate-600/70">
              Formula: N₂ • Stable • Non-reactive • Colorless gas
            </div>
          </div>
        </div>
        <GasQuiz
  gasName="Nitrogen (N₂)"
  questions={[
    {
      id: 1,
      question: "Why does nitrogen make up the largest part of Earth's atmosphere?",
      options: [
        "It is highly reactive and burns very easily",
        "It is very stable and does not react easily under normal conditions",
        "It is heavier than all other gases",
        "Plants do not use nitrogen at all"
      ],
      correctIndex: 1,
      explanation:
        "Nitrogen gas (N₂) is very stable and unreactive at normal temperatures, so it can safely fill most of the atmosphere without causing too many reactions."
    }
  ]}
/>

      </section>
    </main>
  );
}

