import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import SpotlightCard from "@/components/SpotlightCard";

export default function Media() {
  return (
    <div>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText text="Media" />
        <div className="mt-10"></div>
        <SpotlightCard
          title="Public Humanities Lab Takes on Reparative Memory"
          description="Explore the article and podcast that mentions our work with the Public Humanities Lab on reparative memory in Missouri."
          imageSrc="/reparative-memory.png" // Change this to a real image URL
          articleUrl="https://www.kbia.org/missouri-news/2023-04-27/public-humanities-lab-takes-on-reparative-memory-to-uncover-the-legacy-of-slavery-in-missouri"
        />
      </div>
    </div>
  );
}
