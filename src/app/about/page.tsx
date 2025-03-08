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
            imageURL="/jade_pita_picture.jpg"
          />
          <AboutCard
            name="Jonah Zacks"
            title="Community Outreach"
            imageURL="/jonah_zacks_picture.jpeg"
            linkedinURL="https://www.linkedin.com/in/jonah-zacks-17930019a/"
          />
          <AboutCard
            name="Dylan Alfonso"
            title="Web Developer / Designer"
            imageURL="/dylan_alfonso_picture.jpeg"
            linkedinURL="https://www.linkedin.com/in/dylan-alfonso/"
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
            name="Sara Hernández Angulo"
            title="PhD Candidate in Hispanic Studies"
            imageURL="/sarah_hernandez_picture.png"
          />
          <AboutCard
            name="Elaine Peña"
            title="Professor of Performing Arts, American Culture Studies, and Anthropology"
            imageURL="/elaine_pena_picture.jpg"
          />
        </div>
      </div>
    </div>
  );
}
