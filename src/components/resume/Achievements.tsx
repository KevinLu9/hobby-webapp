export default function Achievements({
  achievements,
}: {
  achievements: IAchievements;
}) {
  return (
    <>
      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
        {achievements?.icon}
        <p className="font-bold text-lg uppercase">{achievements?.title}</p>
      </div>
      <div className="animate-[fadeIn_1s] p-2">
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
