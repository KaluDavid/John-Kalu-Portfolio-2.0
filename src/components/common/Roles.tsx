import React from "react";

function Roles({
  styles,
  children,
}: {
  styles?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex text-nowrap items-center justify-center  gap-5 font-open-sans text-gray-900 ${styles} `}
    >
      {children}
    </div>
  );
}

export { Roles };
