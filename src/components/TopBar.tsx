import { Phone, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const TopBar = () => {
  return (
    <div className="hidden sm:block bg-accent text-accent-foreground border-b border-white/10">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between px-4 py-2 text-xs sm:text-sm gap-1 sm:gap-0">
        <div className="flex items-center gap-4">
          <a href={`mailto:${siteConfig.commercialEmail}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span>{siteConfig.commercialEmail}</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>{siteConfig.serviceHours.weekdays}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${siteConfig.primaryPhoneRaw}`} className="flex items-center gap-2 hover:text-primary transition-colors font-semibold">
            <Phone className="h-3.5 w-3.5 text-primary" />
            <span>{siteConfig.primaryPhoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
