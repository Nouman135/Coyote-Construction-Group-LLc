"use client";

import React, { createContext, useCallback, useContext } from "react";

const QuoteFormContext = createContext<{ openQuoteForm: () => void }>({
  openQuoteForm: () => {},
});

export const useQuoteForm = () => useContext(QuoteFormContext);

export const QuoteFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const openQuoteForm = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.pathname === "/") {
      document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#quote-form");
      return;
    }

    window.location.href = "/#quote-form";
  }, []);

  return <QuoteFormContext.Provider value={{ openQuoteForm }}>{children}</QuoteFormContext.Provider>;
};
