import { useEffect, useRef } from "react";

function useBackToTop() {
  const scrollToTop = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return scrollToTop;
}

export default useBackToTop;
