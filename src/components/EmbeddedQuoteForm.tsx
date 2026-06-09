import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

interface EmbeddedQuoteFormProps {
  className?: string;
  height?: number;
  enableScroll?: boolean;
}

const EmbeddedQuoteForm = ({ className, height = 588, enableScroll = false }: EmbeddedQuoteFormProps) => {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${siteConfig.widgets.formScriptSrc}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = siteConfig.widgets.formScriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={siteConfig.widgets.formIframeSrc}
      id={`inline-${siteConfig.widgets.formId}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={siteConfig.widgets.formName}
      data-height={String(height)}
      data-layout-iframe-id={`inline-${siteConfig.widgets.formId}`}
      data-form-id={siteConfig.widgets.formId}
      title={siteConfig.widgets.formName}
      className={className}
      scrolling={enableScroll ? "yes" : "no"}
      style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "10px" }}
    />
  );
};

export default EmbeddedQuoteForm;
