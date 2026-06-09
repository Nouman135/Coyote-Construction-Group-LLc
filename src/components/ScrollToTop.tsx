import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowButton(scrolled > 300);
      setProgress(max > 0 ? Math.min((scrolled / max) * 100, 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progressStyle = useMemo(
    () => ({ width: `${progress}%` }),
    [progress],
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-[linear-gradient(90deg,hsl(var(--primary))_0%,hsl(198_95%_50%)_100%)] transition-[width] duration-150"
          style={progressStyle}
        />
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed left-4 sm:left-6 bottom-5 sm:bottom-7 z-[130] h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-xl border border-white/30 transition-all duration-300 ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 mx-auto" />
      </button>
    </>
  );
};

export default ScrollToTop;
