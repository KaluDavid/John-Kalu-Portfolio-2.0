import { H_Tags } from "../../../components/common/H-Tags";
import { Hr } from "../../../components/common/Hr";
import Last_section_Flex from "../../../components/common/Last-section-Flex";
import { Optima } from "../../../components/common/Optima";
import useRedirect from "../../../hooks/use-redirect";

export function Last_section() {
  const redirect = useRedirect({
    redirectLink: "https://www.codarhq.com/",
  });
  return (
    <div className=" flex flex-col items-start justify-center gap-10 sm:px-12.5 px-5 xl:px-20 w-full">
      <H_Tags>
        My design Journey so far. <br className="sm:block hidden" /> Walk with
        me
      </H_Tags>

      <div className="flex flex-col items-center justify-center gap-14 w-full ">
        <Hr />
        <Last_section_Flex
          text1="4 years Pioneering Unique Solutions"
          text2="4+ years of working with Dynamic Teams and as a Freelancer to transform ideas into great Products"
        />
        <Hr />
        <div className="w-full sm:flex-row flex-col max-sm:gap-5  flex items-start justify-between gap-8 ">
          <Optima
            text="75+ Mentees across Africa"
            style="text-2xl md:leading-12 lg:text-nowrap"
          />
          <p className="md:text-3xl sm:text-2xl md:leading-12 font-optima font-bold md:w-[500px]  xl:w-[604px] text-xl max-sm:font-medium ">
            Overtime i have been able to mentor both Newbies and already
            experienced designers. I achieved this in {""}
            <span onClick={redirect} className="text-codar">
              Codar Tech.
            </span>
          </p>
        </div>

        <Hr />
        <Last_section_Flex
          text1="25+ Completed Projects"
          text2="Successfully completed different projects across industries both as a freelancer and as Team. "
        />
      </div>
    </div>
  );
}
