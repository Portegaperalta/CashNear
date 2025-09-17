import Header from "@/components/Header";
import MapContent from "@/components/MapContent";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function Home() {
  return (
    <div className="content">
      <Header />
      <main className="px-4 py-4">
        <section className="map">
          <MapContent googleMapsApiKey={googleMapsApiKey!} />
        </section>
      </main>
    </div>
  );
}
