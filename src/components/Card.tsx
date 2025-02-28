import { FaLinkedin } from "react-icons/fa";

interface AboutCardProps {
  name: string;
  title: string;
  imageURL: string;
  linkedinURL?: string;
}

export default function AboutCard({
  name,
  title,
  imageURL,
  linkedinURL,
}: AboutCardProps) {
  return (
    <div className="flex flex-col w-80 h-96 m-10 rounded-lg transition-transform transform hover:shadow-2xl hover:scale-105">
      <img
        className="size-48 rounded-full mx-auto my-5"
        src={imageURL}
        alt={`${name}'s picture`}
      />
      <div className="text-center pt-3 px-3 mb-7">
        <h1 className="text-2xl mb-3">{name}</h1>
        <h2 className="text-md text-gray-500">{title}</h2>
      </div>
      {linkedinURL && (
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="inline text-gray-500 ml-3 hover:text-blue-500" size={36} />
        </a>
      )}
    </div>
  );
}
