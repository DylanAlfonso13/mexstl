import Image from "next/image";
import Link from "next/link";

interface PastEventProps {
  titleEn: string;
  titleEs: string;
  dateEn: string;
  dateEs: string;
  location?: string | React.ReactNode;
  locationEn?: string | React.ReactNode;
  locationEs?: string | React.ReactNode;
  admissionEn?: string;
  admissionEs?: string;
  descriptionEn: React.ReactNode;
  descriptionEs: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  language: string;
  slug: string; // URL slug for the detail page
}

export default function PastEvent({
  titleEn,
  titleEs,
  dateEn,
  dateEs,
  location,
  locationEn,
  locationEs,
  admissionEn,
  admissionEs,
  descriptionEn,
  descriptionEs,
  imageUrl,
  imageAlt,
  language,
  slug,
}: PastEventProps) {
  return (
    <Link href={`/events/${slug}`}>
      <div className="max-w-4xl w-full my-8 cursor-pointer">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? titleEn : titleEs}
            </h2>
            <div className="text-lg sm:text-xl mb-4">
              <p className="font-semibold">
                {language === "en" ? dateEn : dateEs}
              </p>
              {(locationEn || locationEs || location) && (
                <p className="text-gray-700">
                  {language === "en"
                    ? locationEn || location
                    : locationEs || location}
                </p>
              )}
              {(admissionEn || admissionEs) && (
                <p className="font-semibold mt-2">
                  {language === "en" ? admissionEn : admissionEs}
                </p>
              )}
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              {language === "en" ? descriptionEn : descriptionEs}
            </p>
            <div className="mt-6">
              <span className="inline-block bg-[#006341] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                {language === "en" ? "Learn More →" : "Más Información →"}
              </span>
            </div>
          </div>
          {imageUrl && (
            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              <Image
                src={imageUrl}
                alt={imageAlt || "Event flyer"}
                width={1200}
                height={1600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
