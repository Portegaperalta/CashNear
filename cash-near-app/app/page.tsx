import MapContent from "@/components/MapContent";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="body-content">
      <Header />
      <main className="px-4 py-4">
        <section className="home">
          <MapContent />
        </section>
      </main>
    </div>
  );
}
