import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const ReputationReviewScript = () => {
  if (!siteConfig.reputationHub.reviewWidgetScriptSrc) {
    return null;
  }

  return (
    <Script
      id="reputation-review-widget"
      src={siteConfig.reputationHub.reviewWidgetScriptSrc}
      strategy="beforeInteractive"
    />
  );
};

export default ReputationReviewScript;
