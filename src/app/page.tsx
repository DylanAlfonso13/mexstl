import Nav from '@/components/Nav'
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/MEXSTL_green_image.png')" }}
    >
      <Nav />
      <HeroSection />
    </div>
  );
}
