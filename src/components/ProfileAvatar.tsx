"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

type ProfileAvatarProps = {
  size?: "md" | "lg";
};

export function ProfileAvatar({ size = "lg" }: ProfileAvatarProps) {
  const dim = size === "lg" ? 96 : 72;
  const { photoUrl } = siteConfig.recipient;

  if (photoUrl) {
    return (
      <div
        className="mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-pink-200"
        style={{ width: dim, height: dim }}
      >
        <Image
          src={photoUrl}
          alt={siteConfig.recipient.name}
          width={dim}
          height={dim}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="mx-auto flex items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-100 to-rose-200 shadow-lg ring-2 ring-pink-200"
      style={{ width: dim, height: dim }}
    >
      <span className="text-4xl animate-pulse-soft">💖</span>
    </div>
  );
}
