import Live_Project_Temp from "../../components/common/Live-Project-Temp";
import { H_Tags } from "../../components/common/H-Tags";
import { Hr } from "../../components/common/Hr";
import { Project_about } from "../../components/ui/Project_about";
import Last_section_Flex from "../../components/common/Last-section-Flex";
import eco_canada from "/images/eco_canada.png";
import useBackToTop from "../../hooks/use-back-to-top";

function Project_2() {
  const scrollToTop = useBackToTop();
  return (
    <section
      ref={scrollToTop}
      className="flex sm:px-12.5 px-5 xl:px-20 flex-col items-start gap-30 md:pt-40 pt-30  size-full "
    >
      <div className="flex items-center flex-col  gap-20">
        <H_Tags
          style="sm:w-[90%] sm:text-center"
          text="We provide a range of opportunities for career advancement, offering 100+ courses designed to cater to diverse interests and professional needs."
        />
        <Live_Project_Temp
          style="bg-lemon"
          to="/project_2"
          img={eco_canada}
          role="Web Design"
          text="Redesigned an Environmental workforce through training, certification, research and funding, it is estimated to make an increase of 20% in visibility & revenue"
        />
      </div>

      <Project_about
        heading1="Eco Academy"
        heading2="We champion the end-to-end career of an environmental professional. "
        redirectApp="https://www.eco.ca/"
      >
        <Last_section_Flex
          text1="About Eco Academy:"
          text2="At ECO Canada, we offer over 100 courses for career advancement, including workshops, virtual and in-person interactive activities, and webinars with expert presentations on topics from career preparedness to technical trends and skill development."
          style="text-xl"
        />
        <Hr />{" "}
        <Last_section_Flex text1="What we do:">
          <ul className="font-medium">
            <li>Memberships & Designations</li>
            <li>Employment Programs</li>
            <li>HR Services</li>
            <li>Lifelong Learning</li>
            <li>BEAHR Indigenous Training​</li>
            <li>Accreditation & Training Certification</li>
            <li>Labour Market Information</li>
            <li>Occupational Standards</li>
          </ul>
        </Last_section_Flex>
      </Project_about>
    </section>
  );
}
export default Project_2;
