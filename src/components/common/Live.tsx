import React from "react";

export function Live({ text, style }: { text: string; style?: string }) {
  return (
    <>
      <span
        className={`text-5xl gap-4 font-optima font-bold flex items-center uppercase ${style}`}
      >
        <span className="rounded-full bg-salem size-6"></span>
        {text}
      </span>
    </>
  );
}
