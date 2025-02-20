export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-black px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl px-5 py-6 mt-5 --font-outfit text-center">
          Mexican History in St. Louis
        </h1>
        <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C8102E] via-white to-[#006341] mt-2"></div>
      </div>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-4xl text-center py-6">
        MexStl is a grassroots project that engages with collective memory in
        St. Louis. In a city with a prominent Mexican American community, we
        invite the public to explore this rich history that dates back to the
        early 1800s. Through an interactive map, we strive to recognize the
        deep-rooted Mexican presence in St. Louis and acknowledge the city’s
        role in a larger historical narrative of mexicanos in the United States.
      </p>
      <div className="flex flex-col mt-80 xs:mt-96">
        <p className="text-xs xs:text-sm md:text-base max-w-4xl text-center py-1">
          Scroll to map
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 animate-bounce mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
}
