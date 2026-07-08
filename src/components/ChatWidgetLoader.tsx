"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

const ChatWidgetLoader = () => {
  useEffect(() => {
    if (!siteConfig.widgets.chatWidgetId) return;

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${siteConfig.widgets.chatLoaderSrc}"]`,
    );
    if (existing?.getAttribute("data-widget-id") === siteConfig.widgets.chatWidgetId) {
      return;
    }
    existing?.remove();

    const script = document.createElement("script");
    script.src = siteConfig.widgets.chatLoaderSrc;
    script.setAttribute("data-resources-url", siteConfig.widgets.chatResourcesUrl);
    script.setAttribute("data-widget-id", siteConfig.widgets.chatWidgetId);
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatWidgetLoader;
