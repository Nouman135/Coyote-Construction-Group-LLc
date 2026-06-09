import { FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface EmbeddedQuoteFormProps {
  className?: string;
  height?: number;
  enableScroll?: boolean;
}

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "New Construction",
  timeline: "",
  message: "",
};

const EmbeddedQuoteForm = ({ className, height = 588, enableScroll = false }: EmbeddedQuoteFormProps) => {
  const [form, setForm] = useState(initialForm);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Website estimate request - ${form.name || siteConfig.brand}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Service: ${form.service}`,
        `Timeline: ${form.timeline}`,
        "",
        "Project details:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className={cn("rounded-lg border border-border bg-white p-4", className)}
      style={{ minHeight: enableScroll ? undefined : Math.min(height, 620) }}
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="space-y-1 text-sm font-semibold text-foreground">
            Name
            <input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-foreground">
            Phone
            <input
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
              type="tel"
              required
            />
          </label>
        </div>

        <label className="space-y-1 text-sm font-semibold text-foreground block">
          Email
          <input
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            type="email"
          />
        </label>

        <label className="space-y-1 text-sm font-semibold text-foreground block">
          Service
          <select
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
          >
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm font-semibold text-foreground block">
          Timeline
          <input
            value={form.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            placeholder="As soon as possible, this month, planning ahead..."
          />
        </label>

        <label className="space-y-1 text-sm font-semibold text-foreground block">
          Project Details
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-[110px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            placeholder="Tell us about the project, city, and approximate budget."
          />
        </label>

        <Button type="submit" className="w-full rounded-lg">
          Request Estimate
        </Button>
      </form>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
          <Button variant="outline" className="w-full rounded-lg gap-2">
            <Phone className="h-4 w-4" /> Call {siteConfig.primaryPhoneDisplay}
          </Button>
        </a>
        <a href={`mailto:${siteConfig.email}`}>
          <Button variant="outline" className="w-full rounded-lg gap-2">
            <Mail className="h-4 w-4" /> Email
          </Button>
        </a>
      </div>
    </div>
  );
};

export default EmbeddedQuoteForm;
