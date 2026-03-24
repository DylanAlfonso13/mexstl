"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import { useLanguage } from "@/context/LanguageContext";

export default function MexicanAmericanExhibit() {
  const { language } = useLanguage();

  return (
    <div>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText
          text={
            language === "en"
              ? "Mexican American Pop-Up Exhibit"
              : "Exhibición Emergente Mexicoamericana"
          }
        />

        <div className="max-w-4xl w-full my-8">
          <div className="text-lg sm:text-xl mb-4">
            <p className="font-semibold">
              {language === "en"
                ? "Open January 30 - February 28, 2026"
                : "Abierto del 30 de enero al 28 de febrero de 2026"}
            </p>
            <p className="text-gray-700">
              Missouri Historical Society Library and Research Center
              <br />
              225 S Skinker Blvd, St. Louis, MO 63105
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            {language === "en" ? (
              <>
                St. Louis has a prominent Mexican American community and a
                rich history dating back to the early 1800s. This bilingual
                exhibit recognizes the deep-rooted Mexican presence in St.
                Louis and acknowledges the city&apos;s role in a larger
                historical narrative of mexicanos in the United States.
              </>
            ) : (
              <>
                St. Louis tiene una prominente comunidad mexicoamericana y
                una rica historia que se remonta a principios del siglo XIX.
                Esta exhibición bilingüe reconoce la presencia mexicana
                profundamente arraigada en St. Louis y reconoce el papel de
                la ciudad en una narrativa histórica más amplia de mexicanos
                en los Estados Unidos.
              </>
            )}
          </p>
          <div className="mt-6">
            <a
              href="https://www.facebook.com/events/1916072968982801/1916072985649466/?ref_source=NEWS_FEED"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006341] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {language === "en" ? "Learn More" : "Más Información"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
