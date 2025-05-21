import { Roles } from "../../../components/common/Roles";
import { H_Tags } from "../../../components/common/H-Tags";
import { Message } from "../../../components/ui/Message";

export function Hero() {
  return (
    <div className="flex xl:flex-row flex-col pb-35  justify-between w-full  items-start xl:gap-0 gap-20">
      <div className="flex items-start flex-col gap-5">
        <Roles>
          <span>ABOUT ME</span>
          <span className="rounded-full bg-gray-800 size-2.5"></span>
        </Roles>
        <H_Tags style="sm:w-[90%]">
          <span>
            I craft products that not only meet organizational objectives but
            also <br /> deliver exceptional user experiences."
          </span>
        </H_Tags>
        <Message>
          <a
            href="mailto:Mrkalujohn@gmail.com"
            className="flex items-center gap-2"
          >
            View my Resume
          </a>
        </Message>
      </div>
      <fieldset className="flex xl:flex-row flex-col   justify-between w-full  items-center">
        <img
          src="/images/profile.png"
          alt="john kalu"
          className="xl:min-w-[464px]"
        />
      </fieldset>
    </div>
  );
}
