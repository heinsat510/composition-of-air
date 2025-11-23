"use client";

import { useState, useMemo } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

interface GasQuizProps {
  gasName: string;
  questions: Question[];
}

export default function GasQuiz({ gasName, questions }: GasQuizProps) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // 🔊 sound setup (inside component)
  const clickSound = useMemo(
    () =>
      typeof Audio !== "undefined" ? new Audio("/sounds/click.wav") : null,
    []
  );

  const correctSound = useMemo(
    () =>
      typeof Audio !== "undefined" ? new Audio("/sounds/correct.wav") : null,
    []
  );

  const wrongSound = useMemo(
    () =>
      typeof Audio !== "undefined" ? new Audio("/sounds/wrong.wav") : null,
    []
  );

  const current = questions[activeQuestion];
  const total = questions.length || 1;
  const progress = ((activeQuestion + 1) / total) * 100;

  const handleOptionClick = (index: number) => {
    // click sound
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }

    const correct = index === current.correctIndex;

    // correct / wrong sound
    if (correct) {
      if (correctSound) {
        correctSound.currentTime = 0;
        correctSound.play();
      }
    } else {
      if (wrongSound) {
        wrongSound.currentTime = 0;
        wrongSound.play();
      }
    }

    setSelectedOption(index);
    setIsCorrect(correct);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setActiveQuestion((prev) =>
      prev + 1 < questions.length ? prev + 1 : 0
    );
  };

  return (
    <section className="mt-20 mb-16 px-4">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800/80 bg-slate-950/80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(147,51,234,0.18),_transparent_55%)] shadow-[0_0_60px_-30px_rgba(56,189,248,0.9)] backdrop-blur-xl p-6 md:p-10">
        {/* Top row: title + tag */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
              Quick Check
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">
              Can you master{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                {gasName}
              </span>
              ?
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Choose the best answer. You&apos;ll see instantly if you&apos;re right.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-sky-500/40 bg-sky-500/5 px-4 py-1 text-xs font-medium text-sky-200 md:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>
              Question {activeQuestion + 1} / {total}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="h-1.5 w-full rounded-full bg-slate-800/80">
            <div
              className="h-1.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main content: question + options */}
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          {/* Question text block */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Question
            </p>
            <h3 className="mt-3 text-lg md:text-xl font-semibold text-slate-50 leading-snug">
              {current.question}
            </h3>
            <p className="mt-3 text-xs text-slate-400">
              Tip: think back to the information above on this page. This quiz
              only uses facts you’ve already seen.
            </p>
          </div>

          {/* Options */}
          <div className="grid gap-4 sm:grid-cols-2">
            {current.options.map((option, index) => {
              const selected = selectedOption === index;
              const correct = current.correctIndex === index;

              let baseClasses =
                "group flex h-full w-full items-start rounded-2xl border px-4 py-3 text-sm md:text-base transition-all duration-200";
              let extraClasses =
                "border-slate-700/80 bg-slate-900/70 hover:bg-slate-800/90 hover:border-sky-400/70 hover:shadow-[0_0_25px_-18px_rgba(56,189,248,0.9)]";

              if (selected && isCorrect === true) {
                extraClasses =
                  "border-emerald-400/80 bg-emerald-500/10 shadow-[0_0_35px_-18px_rgba(52,211,153,0.9)]";
              } else if (selected && isCorrect === false) {
                extraClasses =
                  "border-rose-400/80 bg-rose-500/10 shadow-[0_0_35px_-18px_rgba(248,113,113,0.9)]";
              } else if (!selected && isCorrect !== null && correct) {
                extraClasses =
                  "border-emerald-400/70 bg-emerald-500/5";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`${baseClasses} ${extraClasses}`}
                >
                  <span className="mr-3 mt-0.5 text-xs font-semibold text-slate-300">
                    ({String.fromCharCode(65 + index)})
                  </span>
                  <span className="flex-1 text-left leading-snug text-slate-200">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback + Next */}
        {isCorrect !== null && (
          <div className="mt-7 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 md:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isCorrect ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {isCorrect ? "✅ Correct!" : "❌ Not quite."}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {current.explanation}
                </p>
              </div>

              {questions.length > 1 && (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center justify-center rounded-full border border-sky-500/70 bg-sky-500/10 px-5 py-2 text-xs font-medium text-sky-100 hover:bg-sky-500/20 transition"
                >
                  Next question
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
