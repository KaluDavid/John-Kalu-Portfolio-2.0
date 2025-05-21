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
          className={`md:text-5xxl sm-xl:text-[38px] text-3l font-dm-serif font-normal text-gray-800 ${style}`}
        >
          {children}
        </h1>
      ) : (
        <h1
          className={`md:text-5xxl sm-xl:text-[38px] text-3l font-dm-serif font-normal text-gray-800 ${style}`}
        >
          {text}
        </h1>
      )}
    </>
  );
}
