import { siteConfig } from "@/lib/site-config";

const GHL_TRACKING_ENDPOINT = "https://backend.leadconnectorhq.com/external-tracking/events";

export function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);

  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

export async function submitExternalFormSubmission({
  formId,
  formData,
  formLabels,
}: {
  formId: string;
  formData: Record<string, string>;
  formLabels: Record<string, string>;
}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId,
    formData,
    formLabels,
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: siteConfig.gohighlevel.trackingId,
    locationId: siteConfig.gohighlevel.locationId,
    sessionId: crypto.randomUUID(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
    },
  };

  await fetch(GHL_TRACKING_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      version: "2021-07-28",
    },
    body: JSON.stringify(payload),
  });
}

export const quoteFormFieldLabels = {
  first_name: "First Name",
  last_name: "Last Name",
  email: "Email Address",
  phone: "Phone Number",
  "contact.service_requested": "Service Requested",
  "contact.project_timeline": "Project Timeline",
  "contact.project_details": "Project Details",
} as const;
