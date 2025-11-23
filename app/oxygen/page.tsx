import GasQuiz from "@/components/GasQuiz";
import Link from "next/link";

export default function OxygenPage() {
  return (
    <main className="min-h-screen flex flex-col items-center text-slate-50 bg-gradient-to-b from-slate-950 via-emerald-950/40 to-slate-950 fade-in-up">
      {/* Top Section */}
      <section className="w-full max-w-5xl px-6 pt-16 pb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
            Gas Detail View
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold">
            Oxygen <span className="text-emerald-300">(O₂)</span>
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
          {/* Percentage card */}
          <div className="rounded-2xl border border-emerald-400/40 bg-slate-900/70 p-5">
            <p className="text-xs text-emerald-300 mb-1">Percentage in air</p>
            <p className="text-4xl font-bold text-emerald-200">21%</p>
            <p className="mt-2 text-sm text-slate-300">
              About one fifth of the air we breathe is oxygen. This is just
              enough to support life and burning, but not so much that things
              catch fire too easily.
            </p>
          </div>

          {/* Role cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Role in living things</p>
              <p className="text-sm text-slate-200">
                Cells use oxygen in <strong>respiration</strong> to release
                energy from food. Without oxygen, complex animals (including us)
                cannot survive.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Role in burning</p>
              <p className="text-sm text-slate-200">
                Oxygen supports <strong>combustion</strong>. Fuels like wood,
                petrol or gas only burn when oxygen is present.
              </p>
            </div>
          </div>

          {/* Source card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400 mb-2">Where it comes from</p>
            <ul className="text-sm text-slate-200 list-disc list-inside space-y-1">
              <li>Produced by green plants during photosynthesis.</li>
              <li>Released by algae in the oceans (major source).</li>
              <li>Recycled in the atmosphere through the oxygen cycle.</li>
            </ul>
          </div>
        </div>

        {/* Right: Oxygen Molecule Visualization */}
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/40 via-sky-500/40 to-slate-800 border border-emerald-400/50 air-orb">
            {/* Two oxygen atoms */}
            <div className="absolute left-8 top-20 h-16 w-16 rounded-full bg-emerald-300/90 border border-emerald-100/70 flex items-center justify-center text-slate-950 font-bold">
              O
            </div>
            <div className="absolute right-8 bottom-20 h-16 w-16 rounded-full bg-emerald-300/90 border border-emerald-100/70 flex items-center justify-center text-slate-950 font-bold">
              O
            </div>

            {/* Bond */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1 w-28 rounded-full bg-emerald-200/80" />
            </div>

            {/* Labels */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-emerald-200 border border-emerald-400/60">
              Diatomic molecule
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 border border-slate-600/70">
              Formula: O₂ • Colorless gas • Slightly heavier than air
            </div>
          </div>
        </div>
        <GasQuiz
  gasName="Oxygen (O₂)"
  questions={[
    {
      id: 1,
      question: "What is the main role of oxygen in living things?",
      options: [
        "It cools the atmosphere",
        "Cells use it in respiration to release energy from food",
        "It stops nitrogen from reacting",
        "It makes metals shine"
      ],
      correctIndex: 1,
      explanation:
        "Oxygen is needed in respiration — the process that releases energy from our food. Without oxygen, complex animals (including humans) cannot survive."
    }
  ]}
/>

      </section>
    </main>
  );
}
