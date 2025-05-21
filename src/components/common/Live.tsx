export function Live({ text, style }: { text: string; style?: string }) {
  return (
    <>
      <span
        className={`md:text-5xl text-2xl gap-4 font-optima font-bold flex items-center uppercase ${style}`}
      >
        <span className="rounded-full bg-salem sm:size-6 size-4.5"></span>
        {text}
      </span>
    </>
  );
}
