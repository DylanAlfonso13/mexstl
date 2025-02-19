export default function HeroSection() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/MEXSTL_green_image.png')" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl px-5 py-6 mt-5 --font-outfit">
            Mexican History in St. Louis
          </h1>
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C8102E] via-white to-[#006341] mt-2"></div>
        </div>
        <p className="text-xl max-w-4xl text-center py-6">
          MexStl is a grassroots project that engages with collective memory in
          St. Louis. In a city with a prominent Mexican American community, we
          invite the public to explore this rich history that dates back to the
          early 1800s. Through an interactive map, we strive to recognize the
          deep-rooted Mexican presence in St. Louis and acknowledge the city’s
          role in a larger historical narrative of mexicanos in the United
          States.
        </p>
      </div>
    </div>
  );
}
