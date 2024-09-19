import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Education({ education }: { education: IEducation }) {
  let [degreeFlag, setDegreeFlag] = useState(false);
  return (
    <>
      <div className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200 p-2 pl-4">
        <div className="animate-[fadeSlideLeft_1s] w-full flex gap-2 items-center justify-center md:justify-start">
          {education?.icon}
          <p className="font-bold text-lg uppercase">{education?.title}</p>
        </div>
      </div>
      <div className="animate-[fadeIn_1s] flex flex-col md:flex-row card-h-full overflow-y-auto relative">
        {/* {education?.education?.map((edu) => {
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
        })} */}
        <div
          key="engineering-desc"
          className={`w-full md:w-1/2 h-1/2 md:h-full bg-base-300 p-6 overflow-y-auto ${degreeFlag && "animate-[fadeIn_3s]"}`}
        >
          <ul className="list-disc text-xs md:text-sm flex flex-col gap-2">
            <li>
              Core electrical engineering concepts, including circuit theory and
              electronics
            </li>
            <li>Digital systems and microprocessor design</li>
            <li>Signal processing and communications systems</li>
            <li>Control systems and automation</li>
            <li>
              Power systems, renewable energy technologies, and electrical
              machines
            </li>
            <li>Embedded systems design and implementation</li>
            <li>
              Computer networks, software development, and hardware-software
              integration
            </li>
            <li>
              Engineering design, teamwork, and project management through
              practical projects
            </li>
          </ul>
        </div>
        <div
          key="comsci-desc"
          className={`w-full md:w-1/2 h-1/2 md:h-full bg-base-300 p-6 overflow-y-auto  ${!degreeFlag && "animate-[fadeIn_3s]"}`}
        >
          <ul className="list-disc text-xs md:text-sm flex flex-col gap-2">
            <li>
              Learnt Core programming languages: Python, Java, Javascript, and
              C/C++
            </li>
            <li>
              Data structures and algorithms for efficient problem-solving
            </li>
            <li>
              Software engineering principles, including system design and
              testing
            </li>
            <li>
              Artificial intelligence, machine learning, and data analytics
            </li>
            <li>
              Cybersecurity concepts, including encryption and secure coding
              practices
            </li>
            <li>Operating systems, networking, and database management</li>
            <li>Theory of computation and discrete mathematics</li>
            <li>
              Teamwork through project-based learning in real-world scenarios
            </li>
          </ul>
        </div>
        <div
          className={`w-full md:w-1/2 h-1/2 md:h-full absolute p-2 duration-1000 overflow-x-hidden ${degreeFlag ? "bg-[#39C481] dark:bg-[#0061B2] rounded-br-md" : "bg-[#C6EE6D] dark:bg-[#2499C0]"} ${degreeFlag && "translate-y-full md:translate-y-0 translate-x-0 md:translate-x-full"}`}
        >
          {!degreeFlag ? (
            <div
              key="com_sci"
              className="w-full h-full flex flex-col justify-between animate-[fadeIn_2s] text-black"
            >
              <div className="animate-[slideLeft_1s] p-2">
                <div className="w-full flex justify-center">
                  <img src="monash.png" className="w-1/3 md:w-1/2" />
                </div>
                <p className="font-bold text-md md:text-sm">
                  Bachelor of Computer Science
                </p>
                <p className="text-sm">Advanced Computer Science</p>
                <div className="flex gap-1 items-center">
                  <CalendarDaysIcon className="w-5 h-5" />
                  <p className="text-sm">March 2019 - November 2023</p>
                </div>
                <p className="text-sm italic">
                  (Double Degree with Honours - 5 Year Duration)
                </p>
              </div>
              <div className="w-full flex md:justify-end">
                <button
                  className="btn btn-primary btn-xs"
                  onClick={() => {
                    setDegreeFlag((val) => !val);
                  }}
                >
                  Engineering{" "}
                  <ChevronDownIcon className="w-4 h-4 flex md:hidden" />{" "}
                  <ChevronRightIcon className="w-4 h-4 hidden md:flex" />
                </button>
              </div>
            </div>
          ) : (
            <div
              key="engineering"
              className="w-full h-full flex flex-col-reverse md:flex-col justify-end md:justify-between animate-[fadeIn_2s] text-black"
            >
              <div className="animate-[slideRight_1s] p-2">
                <div className="w-full flex justify-center">
                  <img src="monash.png" className="w-1/3 md:w-1/2" />
                </div>
                <p className="text-right font-bold">
                  Bachelor of Engineering (Honours)
                </p>
                <p className="text-right text-sm">
                  Electrical and Computer Systems
                </p>
                <div className="flex gap-1 items-center justify-end">
                  <p className="text-sm">March 2019 - November 2023</p>
                  <CalendarDaysIcon className="w-5 h-5" />
                </div>
                <p className="text-end text-sm italic">
                  (Double Degree with Honours - 5 Year Duration)
                </p>
              </div>

              <div className="w-full md:flex justify-start">
                <button
                  className="btn btn-primary btn-xs"
                  onClick={() => {
                    setDegreeFlag((val) => !val);
                  }}
                >
                  <ChevronUpIcon className="w-4 h-4 flex md:hidden" />
                  <ChevronLeftIcon className="w-4 h-4 hidden md:flex" />{" "}
                  Computer Science{" "}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
