interface TitleTextProps {
    text: string;
}

export default function TitleText({ text }: TitleTextProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl px-5 py-6 mt-5 --font-outfit text-center">
        {text}
      </h1>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C8102E] via-white to-[#006341]"></div>
    </div>
  );
}
