import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface AboutCardProps {
  name: string;
  title: string;
  additionalTitle?: string;
  imageURL: string;
  linkedinURL?: string;
}

export default function AboutCard({
  name,
  title,
  additionalTitle,
  imageURL,
  linkedinURL,
}: AboutCardProps) {
  return (
    <div className="flex flex-col w-80 h-auto m-10 rounded-lg transition-transform transform hover:shadow-2xl hover:scale-105">
      <Image
        className="size-48 rounded-full mx-auto my-5"
        src={imageURL}
        alt={`${name}'s picture`}
        width={192}
        height={192}
      />
      <div className="text-center pt-3 px-3 mb-7">
        <h1 className="text-2xl mb-3">{name}</h1>
        <h2 className="text-md text-gray-900">{title}</h2>
        {additionalTitle && (
          <h2 className="text-md text-gray-500 whitespace-pre-line">{additionalTitle}</h2>
        )}
      </div>
      {linkedinURL && (
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            className="inline text-gray-500 ml-3 hover:text-blue-500 mb-3"
            size={36}
          />
        </a>
      )}
    </div>
  );
}
