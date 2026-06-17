"use client";

import { useEffect, useState } from "react";

const COLORS = ["#f9a8d4", "#fda4af", "#fcd34d", "#c4b5fd", "#86efac", "#fb7185"];

export function Confetti({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<
    { id: number; left: number; delay: number; color: string; size: number }[]
  >([]);

  useEffect(() => {
    if (!active) return;

    setPieces(
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 8,
      })),
    );
  }, [active]);

  if (!active) return null;

  return (
    <>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animationDuration: `${3 + Math.random() * 2}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}
