export default function Referees({ referees }: { referees: IReferees }) {
  return (
    <>
      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
        {referees?.icon}
        <p className="font-bold text-lg uppercase">{referees?.title}</p>
      </div>
      <div className="animate-[fadeIn_1s] p-2">{referees?.description}</div>
    </>
  );
}
