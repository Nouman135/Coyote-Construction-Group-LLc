"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface GhlFormEmbedProps {
  className?: string;
  height?: number;
}

const GhlFormEmbed = ({ className, height = 828 }: GhlFormEmbedProps) => {
  const formId = siteConfig.gohighlevel.inlineFormId;

  return (
    <div className={cn("w-full overflow-hidden rounded-lg", className)} style={{ minHeight: height }}>
      <iframe
        src={siteConfig.gohighlevel.inlineFormUrl}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "8px" }}
        id={`inline-${formId}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Main Form"
        data-height={String(height)}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title="Main Form"
      />
      <Script src={siteConfig.gohighlevel.inlineFormEmbedScriptSrc} strategy="afterInteractive" />
    </div>
  );
};

export default GhlFormEmbed;
