type HeaderProps = {
  header: string;
  body: string;
};

export default function Header({ header, body }: HeaderProps) {
  return (
    <div className="relative mb-8 flex flex-col gap-1.5 ml-8">
      <p className="font-semibold text-[10px] text-indigo-600 uppercase tracking-[0.22em] dark:text-indigo-400/80">
        {header}
      </p>
      <h2 className="font-semibold text-[22px] text-zinc-900 tracking-tight dark:text-white">
        {body}
      </h2>
    </div>
  );
}
