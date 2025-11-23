import GasQuiz from "@/components/GasQuiz";
import Link from "next/link";

export default function CO2Page() {
  return (
    <main className="min-h-screen flex flex-col items-center text-slate-50 bg-gradient-to-b from-slate-950 via-rose-950/40 to-slate-950 fade-in-up">

      {/* Top Section */}
      <section className="w-full max-w-5xl px-6 pt-16 pb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-rose-400">
            Gas Detail View
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold">
            Carbon Dioxide <span className="text-rose-300">(CO₂)</span>
          </h1>
        </div>

        <Link
          href="/"
          className="rounded-full border border-slate-600 px-4 py-1.5 text-sm text-slate-200 hover:border-rose-400 hover:text-rose-200 transition"
        >
          ⬅ Back to overview
        </Link>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-5xl px-6 pb-16 grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-8">
        {/* Info cards */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-rose-400/50 bg-slate-900/70 p-5">
            <p className="text-xs text-rose-300 mb-1">Percentage in air</p>
            <p className="text-4xl font-bold text-rose-200">0.04%</p>
            <p className="mt-2 text-sm text-slate-300">
              CO₂ is only a tiny fraction of the atmosphere, but it has a
              powerful effect on temperature because it is a{" "}
              <span className="text-rose-300">greenhouse gas</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Role in climate</p>
              <p className="text-sm text-slate-200">
                CO₂ traps heat from the Sun. Increasing CO₂ from burning fossil
                fuels leads to global warming and climate change.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Role in living things</p>
              <p className="text-sm text-slate-200">
                Plants use CO₂ in{" "}
                <span className="text-emerald-300">photosynthesis</span> to make
                glucose and oxygen. Animals release CO₂ when they respire.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400 mb-2">Main sources</p>
            <ul className="text-sm text-slate-200 list-disc list-inside space-y-1">
              <li>Burning coal, oil and natural gas in power stations.</li>
              <li>Cars, planes and factories.</li>
              <li>Deforestation (fewer trees to absorb CO₂).</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              Reducing CO₂ emissions and planting more trees are key ways to
              slow climate change.
            </p>
          </div>
        </div>
        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-rose-500/50 via-orange-500/40 to-slate-900 border border-rose-400/60 air-orb">
            {/* Three atoms */}
            <div className="absolute left-6 top-24 h-14 w-14 rounded-full bg-slate-900/90 border border-slate-200/70 flex items-center justify-center text-slate-100 text-sm font-semibold">
              O
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-rose-300/90 border border-rose-100/80 flex items-center justify-center text-slate-950 font-bold">
                C
              </div>
            </div>
            <div className="absolute right-6 bottom-24 h-14 w-14 rounded-full bg-slate-900/90 border border-slate-200/70 flex items-center justify-center text-slate-100 text-sm font-semibold">
              O
            </div>

            {/* Bonds */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1 w-24 rounded-full bg-rose-200/90" />
            </div>

            {/* Labels */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-rose-300 border border-rose-400/70">
              Linear molecule
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 border border-slate-600/70 text-center">
              Formula: CO₂ • Greenhouse gas • Colorless, acidic in water
            </div>
          </div>
        </div>
        <GasQuiz
  gasName="Carbon Dioxide (CO₂)"
  questions={[
    {
      id: 1,
      question: "Which statement best describes carbon dioxide's role on Earth?",
      options: [
        "It is the main gas we breathe in",
        "It blocks sunlight from reaching Earth",
        "It is a greenhouse gas that helps trap heat in the atmosphere",
        "It makes up about 78% of the air"
      ],
      correctIndex: 2,
      explanation:
        "Carbon dioxide is a greenhouse gas. In small amounts it helps keep Earth warm, but too much CO₂ traps extra heat and leads to global warming and climate change."
    }
  ]}
/>

      </section>
    </main>
  );
}

