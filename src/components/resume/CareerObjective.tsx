import { RocketLaunchIcon } from "@heroicons/react/16/solid";

export default function CareerObjective({
  careerObjective,
}: {
  careerObjective?: ICareerObjective;
}) {
  console.log({ careerObjective });
  return (
    <>
      <div className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200 p-2 pl-4">
        <div className="animate-[fadeSlideLeft_1s] w-full flex gap-2 items-center justify-center md:justify-start">
          <RocketLaunchIcon className="w-5 h-5" />
          <p className="font-bold text-lg uppercase">
            {careerObjective?.title}
          </p>
        </div>
      </div>
      <div className="w-full lg:h-5/6 p-4 card-h-full overflow-y-auto">
        <p className="animate-[fadeIn_1s] border shadow-md rounded-md p-4">
          {careerObjective?.description}
        </p>
      </div>
    </>
  );
}
