"use client";

import { type ReactNode } from "react";

type InviteCardProps = {
  children: ReactNode;
  className?: string;
};

export function InviteCard({ children, className = "" }: InviteCardProps) {
  return (
    <div
      className={`relative w-full max-w-md animate-fade-up rounded-[2rem] border border-white/70 bg-[var(--cream-card)] px-8 py-10 shadow-[0_20px_60px_-15px_rgba(236,72,153,0.25)] backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink-200/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-rose-100/60 blur-2xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
