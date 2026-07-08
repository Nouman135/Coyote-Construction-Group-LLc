"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const TRUSTED_ORIGINS = new Set([
  "https://link.adssurveys.com",
  "https://api.leadconnectorhq.com",
  "https://link.msgsndr.com",
]);

function isFormSubmit(data: unknown): boolean {
  if (data === "msgsndr-form-submit") return true;

  if (typeof data === "object" && data !== null) {
    const payload = data as Record<string, unknown>;
    if (payload.type === "FORM_SUBMITTED") return true;
    if (payload.event === "formSubmitted") return true;
    if (payload.message === "form_submitted") return true;
  }

  return false;
}

function isBookingComplete(data: unknown): boolean {
  if (data === "msgsndr-booking-complete") return true;
  return Array.isArray(data) && data[0] === "msgsndr-booking-complete";
}

type RedirectEvent = "form" | "booking";

export function LeadConnectorEmbedRedirect({
  event,
  redirectTo,
}: {
  event: RedirectEvent;
  redirectTo: string;
}) {
  const router = useRouter();

  useEffect(() => {
    function handleMessage(messageEvent: MessageEvent) {
      if (!TRUSTED_ORIGINS.has(messageEvent.origin)) return;

      const shouldRedirect =
        event === "form"
          ? isFormSubmit(messageEvent.data)
          : isBookingComplete(messageEvent.data);

      if (shouldRedirect) {
        router.push(redirectTo);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [event, redirectTo, router]);

  return null;
}
