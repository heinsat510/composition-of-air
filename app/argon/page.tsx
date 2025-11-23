import GasQuiz from "@/components/GasQuiz";
import Link from "next/link";

export default function ArgonPage() {
  return (
    <main className="min-h-screen flex flex-col items-center text-slate-50 bg-gradient-to-b from-slate-950 via-violet-950/40 to-slate-950 fade-in-up">

      {/* Top Section */}
      <section className="w-full max-w-5xl px-6 pt-16 pb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
            Gas Detail View
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold">
            Argon <span className="text-violet-300">(Ar)</span>
          </h1>
        </div>

        <Link
          href="/"
          className="rounded-full border border-slate-600 px-4 py-1.5 text-sm text-slate-200 hover:border-violet-400 hover:text-violet-200 transition"
        >
          ⬅ Back to overview
        </Link>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-5xl px-6 pb-16 grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-8">
        {/* Info cards */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-violet-400/50 bg-slate-900/70 p-5">
            <p className="text-xs text-violet-300 mb-1">Percentage in air</p>
            <p className="text-4xl font-bold text-violet-200">0.93%</p>
            <p className="mt-2 text-sm text-slate-300">
              Argon is the third most abundant gas in dry air. It is a{" "}
              <span className="text-violet-300">noble gas</span>, which means it
              is extremely unreactive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Chemical behaviour</p>
              <p className="text-sm text-slate-200">
                Argon atoms do not easily gain, lose or share electrons. That is
                why they almost never take part in chemical reactions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs text-slate-400 mb-1">Uses</p>
              <p className="text-sm text-slate-200">
                Used in light bulbs, welding and lasers where a non-reactive
                atmosphere is needed.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400 mb-2">Why it matters</p>
            <ul className="text-sm text-slate-200 list-disc list-inside space-y-1">
              <li>Helps protect hot metals from reacting with oxygen.</li>
              <li>Gives a soft purple glow in some signs and lamps.</li>
              <li>
                Shows that not all gases in the air are active – some just “chill”.
              </li>
            </ul>
          </div>
        </div>

        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/50 via-purple-500/40 to-slate-900 border border-violet-400/60 air-orb">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-violet-300/90 border border-violet-100/80 flex items-center justify-center text-slate-950 font-bold text-2xl">
                Ar
              </div>
            </div>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-violet-300 border border-violet-400/70">
              Noble gas
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 border border-slate-600/70 text-center">
              Single atoms • Monatomic gas • Very unreactive
            </div>
          </div>
        </div>
        <GasQuiz
  gasName="Argon (Ar)"
  questions={[
    {
      id: 1,
      question: "Why is argon used in light bulbs and welding instead of oxygen?",
      options: [
        "It is explosive and makes the light brighter",
        "It reacts with hot metal to form colorful flames",
        "It is inert, so it does not react with the hot metal or filament",
        "It is the lightest gas in the atmosphere"
      ],
      correctIndex: 2,
      explanation:
        "Argon is an inert noble gas. It does not react with hot metal or the filament in a bulb, so it protects them from burning or corroding."
    }
  ]}
/>

      </section>
    </main>
  );
}
