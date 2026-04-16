import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";

interface CarouselImage {
  src: string;
  alt: string;
}

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
  images?: CarouselImage[];
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
  images,
  language,
  slug,
}: PastEventProps) {
  return (
    <Link href={`/events/${slug}`}>
      <article className="max-w-4xl w-full my-8 cursor-pointer">
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
            {images && images.length > 0 && (
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <ImageCarousel images={images} />
              </div>
            )}
            <div className="mt-6">
              <span className="inline-block bg-[#006341] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                {language === "en" ? "Learn More →" : "Más Información →"}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
