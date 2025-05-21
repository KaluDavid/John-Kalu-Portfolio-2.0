import Live_Project_Temp from "../../components/common/Live-Project-Temp";
import { H_Tags } from "../../components/common/H-Tags";
import { Hr } from "../../components/common/Hr";
import { Project_about } from "../../components/ui/Project_about";
import Last_section_Flex from "../../components/common/Last-section-Flex";
import siucash from "/images/suicash.png";
import siuIOS from "/images/siuIOS.png";
import useBackToTop from "../../hooks/use-back-to-top";
function Project_3() {
  const scrollToTop = useBackToTop();

  return (
    <section
      ref={scrollToTop}
      className="flex xl:px-20 sm:px-12.5 px-5 flex-col items-start gap-30 md:pt-40 pt-30 size-full "
    >
      <div className="flex items-center flex-col  gap-20">
        <H_Tags
          style="sm:text-center"
          text="Simplify your digital payments with Silicash — send money, pay bills, book flights, and shop online securely from one smart app"
        />
        <Live_Project_Temp
          to="/project_3"
          style="relative lg:!pr-40 bg-lime"
          img={siucash}
          role="Web Design, Mobile app Design"
          roleStyle="text-wrap items-center justify-center"
          text="Designed a Simplify digital Fin Tech payments platform for both IOS and Android."
        >
          <img
            src={siuIOS}
            alt=""
            className="w-[30%] absolute bottom-0 right-0"
          />
        </Live_Project_Temp>
      </div>

      <Project_about
        heading1="Silicash"
        heading2="Your Trusted Digital Payment Companion "
        redirectApp="https://www.silicash.com/"
      >
        <Last_section_Flex
          text1="About Silicash:"
          text2="Silicash is your all-in-one digital wallet built to simplify how you move money. Whether you're sending funds, topping up airtime, paying bills, booking flights, or managing virtual cards, Silicash puts seamless financial control right at your fingertips."
          style="text-xl"
        />
        <Hr />{" "}
        <Last_section_Flex text1="Why Silicash:">
          <ul>
            <li>Instant bank transfers via your virtual account</li>
            <li>Employment Programs</li>
            <li>Create and use Naira & USD virtual cards</li>
            <li>
              Top up airtime, data, electricity, betting accounts, and more Book
              local and international flights effortlessly No queues.
            </li>
            <li> No delays. No hidden fees.</li>
          </ul>
        </Last_section_Flex>{" "}
        <Hr />{" "}
        <Last_section_Flex text1="What we do:">
          <ul>
            <li>
              To empower people with simple, secure, and accessible digital
              payment solutions that improve lives and create opportunities.{" "}
            </li>
            <li>
              To be Africa’s leading digital payment platform, connecting people
              and businesses to a smarter financial future.
            </li>
          </ul>
        </Last_section_Flex>
      </Project_about>
    </section>
  );
}
export default Project_3;
