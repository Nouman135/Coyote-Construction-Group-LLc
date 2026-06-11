"use client";

import { useEffect } from "react";

const ScrollToQuoteForm = () => {
  useEffect(() => {
    if (window.location.hash !== "#quote-form") {
      return;
    }

    const scrollToForm = () => {
      document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scrollToForm();
    window.addEventListener("hashchange", scrollToForm);

    return () => {
      window.removeEventListener("hashchange", scrollToForm);
    };
  }, []);

  return null;
};

export default ScrollToQuoteForm;
