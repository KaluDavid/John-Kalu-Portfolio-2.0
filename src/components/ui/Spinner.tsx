export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="max-lg:bg-salem size-20 flex justify-center items-center  rounded-full ">
        <span className="lg:bg-salem bg-white size-10 animate-ping  rounded-full "></span>
      </span>
    </div>
  );
}
