import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const ExternalTrackingScript = () => {
  return (
    <Script
      src={siteConfig.gohighlevel.externalTrackingScriptSrc}
      data-tracking-id={siteConfig.gohighlevel.trackingId}
      strategy="afterInteractive"
    />
  );
};

export default ExternalTrackingScript;
