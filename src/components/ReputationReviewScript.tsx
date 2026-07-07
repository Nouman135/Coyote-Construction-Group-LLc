import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const ReputationReviewScript = () => (
  <Script
    id="reputation-review-widget"
    src={siteConfig.reputationHub.reviewWidgetScriptSrc}
    strategy="beforeInteractive"
  />
);

export default ReputationReviewScript;
