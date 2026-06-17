"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import { Confetti } from "@/components/Confetti";
import { InviteCard } from "@/components/InviteCard";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { RunawayButton } from "@/components/RunawayButton";

type Step = "ask" | "confirm" | "schedule" | "food" | "success";

type Selections = {
  date: string;
  time: string;
  food: string;
};

function PrimaryButton({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full bg-gradient-to-r from-pink-400 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/40 transition hover:from-pink-500 hover:to-rose-600 hover:shadow-pink-400/50 active:scale-[0.98]"
    >
      {children}
    </button>
  );
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(`${dateStr}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function formatTime(timeStr: string) {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function DateInviteApp() {
  const [step, setStep] = useState<Step>("ask");
  const [selections, setSelections] = useState<Selections>({
    date: "",
    time: siteConfig.schedule.defaultTime,
    food: "",
  });

  const { sender, recipient, proposal, schedule, food, success } = siteConfig;

  const selectedFood = useMemo(
    () => food.options.find((o) => o.id === selections.food),
    [selections.food, food.options],
  );

  const scheduleSummary = useMemo(() => {
    if (!selections.date) return "soon";
    const datePart = formatDate(selections.date);
    const timePart = formatTime(selections.time);
    return `${datePart} at ${timePart}`;
  }, [selections.date, selections.time]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Confetti active={step === "success"} />

      {/* Floating hearts background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {["💕", "✨", "🌸", "💗"].map((heart, i) => (
          <span
            key={heart}
            className="absolute animate-float text-2xl opacity-20"
            style={{
              left: `${15 + i * 22}%`,
              top: `${10 + (i % 2) * 60}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {heart}
          </span>
        ))}
      </div>

      <InviteCard>
        {step === "ask" && (
          <div className="space-y-8 text-center">
            <ProfileAvatar />
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brown-soft)]">
                For {recipient.name}
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-snug text-[var(--brown)] sm:text-3xl">
                {proposal.greeting} {recipient.name},{" "}
                <span className="text-rose-500">{proposal.question}</span>{" "}
                {proposal.emoji}
              </h1>
              <p className="text-sm text-[var(--brown-soft)]">
                from {sender.name}{" "}
                <span dir="rtl" className="inline-block">
                  {sender.nameArabic}
                </span>
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton onClick={() => setStep("confirm")}>
                Yes! 💖
              </PrimaryButton>
              <RunawayButton />
            </div>
          </div>
        )}

        {step === "confirm" && (
          <div className="space-y-8 text-center">
            <p className="text-5xl">{proposal.confirmEmoji}</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--brown)]">
              {proposal.confirmQuestion}
            </h2>
            <PrimaryButton onClick={() => setStep("schedule")}>
              Okay! 💖
            </PrimaryButton>
          </div>
        )}

        {step === "schedule" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--brown)]">
                {schedule.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--brown-soft)]">
                {schedule.subtitle}
              </p>
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--brown-soft)]">
                  Date
                </span>
                <input
                  type="date"
                  value={selections.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setSelections((s) => ({ ...s, date: e.target.value }))
                  }
                  className="w-full rounded-xl border border-rose-100 bg-white px-4 py-3 text-[var(--brown)] outline-none ring-rose-200 focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--brown-soft)]">
                  Time
                </span>
                <input
                  type="time"
                  value={selections.time}
                  onChange={(e) =>
                    setSelections((s) => ({ ...s, time: e.target.value }))
                  }
                  className="w-full rounded-xl border border-rose-100 bg-white px-4 py-3 text-[var(--brown)] outline-none ring-rose-200 focus:ring-2"
                />
              </label>
            </div>
            <div className="flex justify-center pt-2">
              <PrimaryButton
                onClick={() => selections.date && setStep("food")}
              >
                Set the date 🎯
              </PrimaryButton>
            </div>
          </div>
        )}

        {step === "food" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--brown)]">
                {food.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--brown-soft)]">
                {food.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {food.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    setSelections((s) => ({ ...s, food: option.id }))
                  }
                  className={`rounded-2xl border-2 px-4 py-4 text-left transition ${
                    selections.food === option.id
                      ? "border-rose-400 bg-rose-50 shadow-md"
                      : "border-rose-100 bg-white hover:border-rose-200"
                  }`}
                >
                  <span className="text-2xl">{option.emoji}</span>
                  <p className="mt-2 text-sm font-semibold text-[var(--brown)]">
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
            <div className="flex justify-center pt-2">
              <PrimaryButton
                onClick={() => selections.food && setStep("success")}
              >
                This one! 💖
              </PrimaryButton>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="space-y-6 text-center">
            <ProfileAvatar />
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-snug text-[var(--brown)] sm:text-[1.65rem]">
                {success.headline}
                <br />
                {success.message} {success.messageEmoji}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--brown-soft)]">
                {success.ps}
              </p>
            </div>

            <div className="rounded-2xl bg-rose-50/80 px-4 py-3 text-left text-sm text-[var(--brown-soft)]">
              <p>
                <span className="font-semibold text-[var(--brown)]">When:</span>{" "}
                {scheduleSummary}
              </p>
              {selectedFood && (
                <p className="mt-1">
                  <span className="font-semibold text-[var(--brown)]">
                    Food:
                  </span>{" "}
                  {selectedFood.emoji} {selectedFood.label}
                </p>
              )}
            </div>

            <div className="flex justify-center gap-2 text-xl">
              <span className="animate-float">💗</span>
              <span className="animate-float" style={{ animationDelay: "0.3s" }}>
                💗
              </span>
              <span className="animate-float" style={{ animationDelay: "0.6s" }}>
                💗
              </span>
            </div>

            <p className="text-xs text-[var(--brown-soft)]">
              {success.builtBy}{" "}
              <span className="font-semibold text-rose-500">
                {sender.name} {sender.nameArabic}
              </span>{" "}
              🌸
            </p>
          </div>
        )}
      </InviteCard>

      <p className="mt-8 text-center text-xs text-[var(--brown-soft)] opacity-60">
        made with 💖 · just for {recipient.name}
      </p>
    </main>
  );
}
