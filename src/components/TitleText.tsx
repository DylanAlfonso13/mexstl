interface TitleTextProps {
    text: string;
    as?: "h1" | "h2" | "h3";
}

export default function TitleText({ text, as: Tag = "h1" }: TitleTextProps) {
  return (
    <div className="flex flex-col items-center">
      <Tag className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl px-5 py-6 mt-5 --font-outfit text-center">
        {text}
      </Tag>
      <div className="w-1/2 h-[1.5px] bg-gradient-to-r from-[#C8102E] via-white to-[#006341]"></div>
    </div>
  );
}
