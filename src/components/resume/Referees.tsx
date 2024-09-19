export default function Referees({ referees }: { referees: IReferees }) {
  return (
    <>
      <div className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200 p-2 pl-4">
        <div className="animate-[fadeSlideLeft_1s] w-full flex gap-2 items-center justify-center md:justify-start">
          {referees?.icon}
          <p className="font-bold text-lg uppercase">{referees?.title}</p>
        </div>
      </div>
      <div className="animate-[fadeIn_1s] p-2 card-h-full overflow-y-auto">
        <div className="w-full p-4 flex items-center justify-center">
          <p className="font-bold text-lg text-blue-600">
            {referees?.description}
          </p>
        </div>
      </div>
    </>
  );
}
