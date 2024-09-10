import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 w-full items-center justify-center">
          <div className="flex gap-2 items-center animate-[fadeIn_1s]">
            <PresentationChartBarIcon className="w-8 h-8 p-0 m-0" />
            <p className="font-bold text-2xl uppercase text-center">Projects</p>
          </div>
          <div className="w-full md:w-2/3 h-2/3 md:h-fit aspect-video bg-base-100 rounded-md shadow-xl animate-[slideRight_1s]">
            <div className="p-4 w-full h-full flex items-center justify-center gap-2">
              <Cog6ToothIcon className="w-10 h-10 text-blue-600 animate-[spin_2s_infinite]" />
              <p className="font-bold text-2xl text-blue-600">Coming Soon</p>
              <p className="animate-bounce font-bold text-3xl animation-delay-100">
                .
              </p>
              <p className="animate-bounce font-bold text-3xl animation-delay-200">
                .
              </p>
              <p className="animate-bounce font-bold text-3xl animation-delay-300">
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
