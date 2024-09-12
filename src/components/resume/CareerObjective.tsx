import { RocketLaunchIcon } from "@heroicons/react/16/solid";

export default function CareerObjective({
  careerObjective,
}: {
  careerObjective?: ICareerObjective;
}) {
  console.log({ careerObjective });
  return (
    <>
      <div className="flex gap-2 items-center animate-[fadeSlideLeft_1s]">
        <RocketLaunchIcon className="w-5 h-5" />
        <p className="font-bold text-lg uppercase">{careerObjective?.title}</p>
      </div>
      <div className="w-full h-auto lg:h-5/6 p-4">
        <p className="animate-[fadeIn_1s] border shadow-md rounded-md p-4">
          {careerObjective?.description}
        </p>
      </div>
    </>
  );
}
