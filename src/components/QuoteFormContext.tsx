import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import EmbeddedQuoteForm from "@/components/EmbeddedQuoteForm";
import { siteConfig } from "@/lib/site-config";

const QuoteFormContext = createContext<{ openQuoteForm: () => void }>({
  openQuoteForm: () => {},
});

export const useQuoteForm = () => useContext(QuoteFormContext);

export const QuoteFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openQuoteForm = useCallback(() => setOpen(true), []);
  const closeQuoteForm = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <QuoteFormContext.Provider value={{ openQuoteForm }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm p-3 md:p-6 overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) closeQuoteForm(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[660px] rounded-lg shadow-2xl bg-card/95 border border-white/20 backdrop-blur-md p-3 md:p-4 mt-8 md:mt-0 max-h-[90vh] overflow-y-auto scrollbar-hide"
            >
              <button
                onClick={closeQuoteForm}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="px-1 pb-1">
                <h3 className="font-heading text-xl md:text-2xl text-foreground font-bold mb-2">
                  Request a Free Estimate
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Jean Oliveira personally handles estimates. Call {siteConfig.primaryPhoneDisplay} for immediate help.
                </p>
                <EmbeddedQuoteForm height={980} enableScroll />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteFormContext.Provider>
  );
};
