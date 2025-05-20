import React from "react";
import { Button } from "../common/Button";

export function Message({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4.5 text-salem font-optima pt-3.5">
      <Button style="!text-salem !rounded-full bg-white border-1  border-salem hover:bg-salem hover:!text-white py-5">
        Message me on Whatsapp <img src="/images/whatsapp.svg" alt="whatsapp" />
      </Button>
      <span className="rounded-full bg-salem size-2.5"></span>

      {children}
    </div>
  );
}
