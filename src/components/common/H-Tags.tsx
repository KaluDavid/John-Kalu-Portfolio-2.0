import React, { type ReactNode } from "react";

export function H_Tags({
  text,
  children,
  style,
}: {
  text?: string;
  children?: ReactNode;
  style?: string;
}) {
  return (
    <>
      {children ? (
        <h1
          className={`text-5xxl font-dm-serif font-normal text-gray-800 ${style}`}
        >
          {children}
        </h1>
      ) : (
        <h1
          className={`text-5xxl font-dm-serif font-normal text-gray-800 ${style}`}
        >
          {text}
        </h1>
      )}
    </>
  );
}
