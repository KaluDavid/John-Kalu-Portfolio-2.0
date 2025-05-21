import { Roles } from "../common/Roles";
const brands = [
  {
    text: "Codar Tech Academy",
    circle: <span className="rounded-full bg-white size-2.5 "></span>,
  },
  {
    text: "Viscio Logistics",
    circle: <span className="rounded-full bg-white size-2.5 "></span>,
  },
  {
    text: "Zeph Agency",
    circle: <span className="rounded-full bg-white size-2.5 "></span>,
  },
  {
    text: "Greenie Web",
    circle: <span className="rounded-full bg-white size-2.5 "></span>,
  },
];
export default function Carousel() {
  return (
    <>
      <div className="bg-salem h-16.5  items-center justify-center overflow-hidden  flex py-2 w-full relative flex-nowrap  ">
        <div className="flex items-center justify-center gap-12 w-full slide-track">
          {[...brands, ...brands, ...brands, ...brands, ...brands].map(
            (brand, index) => (
              <Roles key={index} styles="text-white  w-full ">
                <span className="slide perspective-[10px] flex items-center gap-12">
                  <p>{brand.text}</p>
                  {brand.circle}
                </span>
              </Roles>
            )
          )}
        </div>
      </div>
    </>
  );
}
