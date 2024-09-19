export default function Achievements({
  achievements,
}: {
  achievements: IAchievements;
}) {
  return (
    <>
      <div className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200 p-2 pl-4">
        <div className="animate-[fadeSlideLeft_1s] w-full flex gap-2 items-center justify-center md:justify-start">
          {achievements?.icon}
          <p className="font-bold text-lg uppercase">{achievements?.title}</p>
        </div>
      </div>
      <div className="animate-[fadeIn_1s] p-2 card-h-full overflow-y-auto">
        {achievements?.achievements?.map((achievement) => {
          return (
            <div key={achievement}>
              <p className="text-lg">{achievement}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
