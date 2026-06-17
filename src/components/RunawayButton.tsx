"use client";

import { useCallback, useRef } from "react";

type RunawayButtonProps = {
  onClick?: () => void;
  label?: string;
};

export function RunawayButton({
  onClick,
  label = "No 😢",
}: RunawayButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const dodge = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const maxX = window.innerWidth - btn.offsetWidth - 24;
    const maxY = window.innerHeight - btn.offsetHeight - 24;
    const x = 12 + Math.random() * Math.max(maxX - 12, 0);
    const y = 12 + Math.random() * Math.max(maxY - 12, 0);

    btn.style.position = "fixed";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    btn.style.zIndex = "40";
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      onMouseEnter={dodge}
      onTouchStart={dodge}
      onClick={onClick}
      className="rounded-full border-2 border-rose-200 bg-white px-6 py-3 text-sm font-medium text-[var(--brown-soft)] shadow-sm transition hover:border-rose-300"
    >
      {label}
    </button>
  );
}
