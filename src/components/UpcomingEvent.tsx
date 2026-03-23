import Image from "next/image";

interface UpcomingEventProps {
  titleEn: string;
  titleEs: string;
  dateEn: string;
  dateEs: string;
  location?: string;
  locationEn?: string;
  locationEs?: string;
  admissionEn?: string;
  admissionEs?: string;
  descriptionEn: React.ReactNode;
  descriptionEs: React.ReactNode;
  registerUrl?: string;
  registerTextEn?: string;
  registerTextEs?: string;
  imageUrl?: string;
  imageAlt?: string;
  language: string;
}

export default function UpcomingEvent({
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
  registerUrl,
  registerTextEn = "Register for Event",
  registerTextEs = "Registrarse para el Evento",
  imageUrl,
  imageAlt,
  language,
}: UpcomingEventProps) {
  return (
    <div className="max-w-4xl w-full my-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
          {registerUrl && (
            <div className="mt-6">
              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#006341] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                {language === "en" ? registerTextEn : registerTextEs}
              </a>
            </div>
          )}
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
  );
}
