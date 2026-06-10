import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations } from "@/lib/locations-data";
import LocationDetailContent from "@/components/LocationDetailContent";

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find((loc) => loc.slug === params.slug);

  if (!location) {
    notFound();
  }

  const nearby = locations.filter((loc) => loc.slug !== location!.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <LocationDetailContent location={location!} nearbyCityNames={nearby.map((city) => city.name)} />
      </main>
      <Footer />
    </div>
  );
}
