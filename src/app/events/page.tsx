import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";

export default function Media() {
  return (
    <div>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText text="Coming soon" />
      </div>
    </div>
  );
}
