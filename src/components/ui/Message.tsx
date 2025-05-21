import React from "react";
import { Button } from "../common/Button";
import useRedirect from "../../hooks/use-redirect";

export function Message({ children }: { children: React.ReactNode }) {
  const redirectWhatsapp = useRedirect({
    redirectLink: "https://wa.link/276pe5",
  });
  return (
    <div className="flex items-center sm:flex-row flex-col gap-4.5 text-salem font-optima pt-3.5 w-full">
      <Button
        HandleClick={redirectWhatsapp}
        style="!text-salem !rounded-full bg-white border-1  border-salem hover:bg-salem hover:!text-white py-5"
      >
        Message me on Whatsapp <img src="/images/whatsapp.svg" alt="whatsapp" />
      </Button>
      <div className="flex items-center gap-4.5">
        <span className="rounded-full bg-salem size-2.5 "></span>
        {children}
      </div>
    </div>
  );
}
