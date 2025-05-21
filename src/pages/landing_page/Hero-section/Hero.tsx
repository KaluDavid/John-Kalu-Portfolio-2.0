import { H_Tags } from "../../../components/common/H-Tags";
import { Roles } from "../../../components/common/Roles";
import { Message } from "../../../components/ui/Message";

export default function Hero() {
  return (
    <div className="flex sm:px-12.5 px-5 lg:px-20 pb-20 lg:pb-35 flex-col items-start justify-center  gap-5 w-full">
      <Roles styles="max-sm:text-sm max-sm:gap-2 max-sm:[&_small]:size-1.5 max-sm-sm:text-wrap">
        <span>Ui/Ux Designer</span>
        <small className="rounded-full bg-gray-800 size-2.5"></small>
        <span>Design Instructor</span>
        <small className="rounded-full bg-gray-800 size-2.5"></small>
        <span>Design Mentor</span>
      </Roles>{" "}
      <H_Tags>
        I craft digital <span className="text-pantone-green"> products </span>{" "}
        that enhances
        <br className="xl:block hidden" /> Business Growth and Customer
        satisfaction.
      </H_Tags>
      <Message>
        <a
          href="mailto:Mrkalujohn@gmail.com"
          className="flex items-center gap-2"
          target="_blank"
        >
          Send me an Email <img src="/images/gmail.svg" alt="gmail" />
        </a>
      </Message>
    </div>
  );
}
