import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div>
      <div
        className="relative w-full min-h-[120vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/MEXSTL_green_image.png')" }}
      >
        <Nav />
        <HeroSection />
      </div>
      <section id="map">
        <iframe
          width="100%"
          height="1000px"
          src="https://storymaps.arcgis.com/stories/05acb66411224a4d87b8fc1efd584868"
        ></iframe>
      </section>
    </div>
  );
}
