export default function Skills({ skills }: { skills: ISkills }) {
  return (
    <>
      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
        {skills?.icon}
        <p className="font-bold text-lg uppercase">{skills?.title}</p>
      </div>
      <div className="animate-[fadeIn_1s] p-2">
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
