import dayjs from "dayjs";

export default function Education({ education }: { education: IEducation }) {
  return (
    <>
      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
        {education?.icon}
        <p className="font-bold text-lg uppercase">{education?.title}</p>
      </div>
      <div className="animate-[fadeIn_1s] p-2">
        {education?.education?.map((edu) => {
          return (
            <div key={edu?.institution}>
              <p className="font-bold text-lg underline">{edu?.institution}</p>
              <p className="text-sm">
                ({dayjs(edu?.start_date).format("MMM YYYY")} -{" "}
                {dayjs(edu?.finish_date).format("MMM YYYY")})
              </p>
              <p className="whitespace-pre text-wrap">{edu?.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
