import Image from "next/image";
import Link from "next/link";

interface SpotlightCardProps {
  title: string;
  description: string;
  imageSrc: string;
  articleUrl: string;
}

export default function SpotlightCard({
  title,
  description,
  imageSrc,
  articleUrl,
}: SpotlightCardProps) {
  return (
    <Link href={articleUrl} target="_blank">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
        <div className="relative w-full h-96">
          {/* Adjust height as needed */}
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          {/* Container for title + bar with responsive alignment */}
          <div className="inline-block mx-auto text-center lg:text-left">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C8102E] via-white to-[#006341]"></div>
          </div>
          <p className="text-sm text-gray-600 mt-3">{description}</p>
        </div>
      </div>
    </Link>
  );
}
