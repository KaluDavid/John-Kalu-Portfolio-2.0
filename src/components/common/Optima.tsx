import React from "react";

export function Optima({ style, text }: { style: string; text: string }) {
  return (
    <span className={`font-optima font-bold flex items-center ${style} `}>
      {text}
    </span>
  );
}
