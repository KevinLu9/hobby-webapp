import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ResumeButtons({
  tab,
  setTab,
  resumeData,
}: {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  resumeData: IResumeData;
}) {
  const handleChangeTab = (index: number) => {
    setTab(index);
    document
      .getElementById(Object.values(resumeData)[index].title)
      ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <div className="z-[10] p-2 md:px-2 bg-white dark:bg-gray-800 border-none md:border-r shadow-md md:shadow-xl w-full md:w-fill max-w-fit h-fit md:h-full flex flex-row md:flex-col items-center justify-start md:justify-center gap-1 overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
      <div className="w-8">
        <ChevronLeftIcon
          className="w-8 h-8 text-black bg-white dark:text-white dark:bg-gray-800 cursor-pointer block md:hidden"
          onClick={() => {
            handleChangeTab(Math.max(tab - 1, 0));
          }}
        />
      </div>
      <div className="w-max flex flex-row md:flex-col gap-1 overflow-x-auto pb-1">
        {Object.values(resumeData).map((page, index) => {
          return (
            <button
              key={index}
              id={page?.title}
              className={`btn btn-sm w-fit md:w-full ${tab == index ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-600 text-white"}`}
              onClick={() => {
                handleChangeTab(index);
              }}
            >
              <div className="flex items-center justify-start w-full gap-1">
                {page?.icon}
                <p className="whitespace-nowrap">{page?.title}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="w-8">
        <ChevronRightIcon
          className="w-8 h-8 text-black bg-white dark:text-white dark:bg-gray-800 cursor-pointer block md:hidden"
          onClick={() => {
            handleChangeTab(
              Math.min(tab + 1, Object.keys(resumeData)?.length - 1)
            );
          }}
        />
      </div>
    </div>
  );
}
