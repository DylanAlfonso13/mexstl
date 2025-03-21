import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import AboutCard from "@/components/Card";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText text="Meet the Team" />
        <div className="flex flex-row min-w-full justify-evenly flex-wrap mb-12">
          <AboutCard
            name="Jade Pita Nuñez del Prado"
            title="Director"
            additionalTitle="BA in Latin American Studies, Washington University in St. Louis"
            imageURL="/jade_pita_picture.jpg"
          />
          <AboutCard
            name="Dylan Alfonso"
            title="Web Developer"
            additionalTitle="BS in Computer Science, Washington University in St. Louis"
            imageURL="/dylan_alfonso_picture.jpeg"
            linkedinURL="https://www.linkedin.com/in/dylan-alfonso/"
          />
          <AboutCard
            name="Jonah Zacks"
            title="Community Outreach"
            additionalTitle="BA in Economics, Washington University in St. Louis"
            imageURL="/jonah_zacks_picture.jpeg"
            linkedinURL="https://www.linkedin.com/in/jonah-zacks-17930019a/"
          />
          <AboutCard
            name="Sara Hernández Angulo"
            title="Researcher"
            additionalTitle="PhD Candidate in Hispanic Studies, Washington University in St. Louis"
            imageURL="/sarah_hernandez_picture.png"
          />
        </div>
        <TitleText text="Advisors and Supporters" />
        <div className="flex flex-row min-w-full justify-evenly flex-wrap mb-12">
          <AboutCard
            name="Daniel Gonzales"
            title="Director of Exhibitions Research at Indiana Historical Society"
            imageURL="/daniel_gonzales_picture.png"
          />
          <AboutCard
            name="Gilberto Pinela"
            title="Director of the Office of New Americans"
            additionalTitle="Board of Missouri Historical Society"
            imageURL="/gilberto_pinela_picture.jpeg"
          />
          <AboutCard
            name="Jorge Riopedre"
            title="Former President of Casa de Salud and former Executive Director of Delmar DivINe"
            imageURL="/jorge_riopedre_picture.jpg"
          />
          <AboutCard
            name="Elaine Peña"
            title="Professor of Performing Arts, American Culture Studies, and Anthropology, Washington University in St. Louis"
            imageURL="/elaine_pena_picture.jpg"
          />
        </div>
      </div>
    </div>
  );
}
