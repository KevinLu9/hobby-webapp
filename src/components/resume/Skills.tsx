export default function Skills({ skills }: { skills: ISkills }) {
  return (
    <>
      <div className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200 p-2 pl-4">
        <div className="animate-[fadeSlideLeft_1s] w-full flex gap-2 items-center justify-center md:justify-start">
          {skills?.icon}
          <p className="font-bold text-lg uppercase">{skills?.title}</p>
        </div>
      </div>
      <div className="animate-[fadeIn_1s] p-2 card-h-full overflow-y-auto">
        {skills?.skills?.map((skill) => {
          return (
            <div key={skill?.name}>
              <p className="font-bold text-lg underline">{skill?.name}</p>
              <p className="whitespace-pre text-wrap">{skill?.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
