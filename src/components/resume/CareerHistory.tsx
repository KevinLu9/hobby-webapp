import {
  CalendarDaysIcon,
  CircleStackIcon,
  ComputerDesktopIcon,
  NewspaperIcon,
  UserGroupIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import FlipCard from "../FlipCard";
import {
  AppConnectivity,
  Chemistry,
  ConnectionSignal,
  InfinitySymbol,
  TransmissionLte,
} from "@carbon/icons-react";

export default function CareerHistory({
  careerHistory,
}: {
  careerHistory?: ICareerHistory;
}) {
  const [selectedHistoryIndex, setSelectedHistoryTab] = useState(0);
  const [selectedHistory, setSelectedHistory]: [
    IHistory | undefined,
    React.Dispatch<React.SetStateAction<IHistory | undefined>>,
  ] = useState();

  useEffect(() => {
    careerHistory?.history &&
      setSelectedHistory(careerHistory?.history[selectedHistoryIndex]);
  }, [selectedHistoryIndex, careerHistory]);

  const renderJobImage = (index: number) => {
    if (index == 0) {
      return (
        <img
          src="sac.png"
          className="w-20 h-20 rounded-full p-2 border animate-[rotateIn_1.5s] bg-white z-[1]"
        />
      );
    } else if (index == 1) {
      return (
        <img
          src="muas.png"
          className="w-20 h-20 rounded-full border animate-[rotateIn_1.5s] z-[1]"
        />
      );
    } else if (index == 2) {
      return (
        <img
          src="techreative.png"
          className="w-20 h-20 rounded-full p-2 border animate-[rotateIn_1.5s] bg-white z-[1]"
        />
      );
    }
  };
  return (
    <>
      <div className="flex gap-2 items-center animate-[fadeSlideLeft_1s]">
        {careerHistory?.icon}
        <p className="font-bold text-lg uppercase">{careerHistory?.title}</p>
      </div>
      <div className="animate-[fadeIn_1s] h-[95%] p-2 flex flex-col lg:flex-row gap-2">
        <div className="h-fit lg:h-full w-full lg:w-max lg:border-r md:-mx-4 px-4 z-[1] bg-base-100">
          {/* Career Selector START */}
          <ul className="steps steps-horizontal lg:steps-vertical">
            {careerHistory?.history?.map((career, index) => {
              return (
                <li
                  key={index}
                  className={`step lg:w-1/4 text-sm md:text-md font-semibold cursor-pointer ${index <= selectedHistoryIndex ? "step-info" : ""}`}
                  onClick={() => {
                    setSelectedHistoryTab(Number(index));
                  }}
                >
                  {career?.company}
                </li>
              );
            })}
          </ul>
          {/* Career Selector END */}
        </div>
        {/* Career Information START */}
        <div
          key={selectedHistoryIndex}
          className="w-full h-full flex flex-col animate-[fadeSlideRight_1s] z-[0] lg:pl-2 lg:ml-2"
        >
          <div className="flex gap-2 items-center pb-2">
            {renderJobImage(selectedHistoryIndex)}
            <p className="font-bold text-xl underline animate-[slideRight_1.5s] z-[0]">
              {selectedHistory?.company}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <WrenchIcon className="w-5 h-5" />
            <p className="font-bold italic">{selectedHistory?.job_title}</p>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarDaysIcon className="w-5 h-5" />
            <p className="text-sm">
              {dayjs(selectedHistory?.start_date).format("MMM YYYY")} -{" "}
              {selectedHistory?.present
                ? "Present"
                : dayjs(selectedHistory?.finish_date).format("MMM YYYY")}
            </p>
          </div>

          {/* <p className="whitespace-pre text-wrap">
            {selectedHistory?.description}
          </p> */}
          {/* First Career START */}
          {selectedHistoryIndex == 0 && (
            <div className="flex w-full h-full flex-wrap pb-4">
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <Chemistry className="w-10 h-10" />
                      <p className="font-bold">Tutored in STEM Subjects</p>
                    </div>
                  }
                  back={
                    <div className="text-xs">
                      <p className="font-bold">Subjects</p>
                      <p>Year 11/12 VCE Physics</p>
                      <p>Year 11/12 VCE Chemistry</p>
                      <p>Year 11/12 VCE Further Maths.</p>
                      <p>Year 10 Maths</p>
                      <p>Year 6 Maths + English</p>
                      <p className="pt-2">
                        <b>Substituted for</b> <br />
                        Year 11/12 VCE Methods, <br /> Year 11/12 VCE
                        Specialist, <br /> Year 10 Science, <br />
                        Year 4 Maths + English
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <UserGroupIcon className="w-10 h-10" />
                      <p className="font-bold">Classes of up to 15 Students</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-1">
                      <p className="font-bold">Classes of up to 15 Students</p>
                      <p className="text-sm">
                        Handled classes between 5 to 15 students.
                      </p>
                      <p className="text-sm">
                        Catered for students with varying academic skills.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <NewspaperIcon className="w-10 h-10" />
                      <p className="font-bold">Administrative Work</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Administrative Work</p>
                      <p className="text-sm">
                        Created solutions for fellow tutors for various
                        subjects.
                      </p>
                      <p className="text-sm">
                        Handled printing of worksheets for a large quantity of
                        students.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <UserGroupIcon className="w-10 h-10" />
                      <p className="font-bold">Trained New Employees</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Trained New Employees</p>
                      <p className="text-sm">
                        Gave training to tutors to prepare them for the job.
                      </p>
                      <p className="text-sm">
                        Taught fellow tutors skills on how to keep students
                        engaged.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          )}
          {/* First Career END */}
          {/* Second Career START */}
          {selectedHistoryIndex == 1 && (
            <div className="flex w-full h-full flex-wrap pb-4">
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <ComputerDesktopIcon className="w-10 h-10" />
                      <p className="font-bold">Frontend Development</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Frontend Development</p>
                      <p className="text-sm">
                        Created a reactive user interface to display the state
                        of a drone live.
                      </p>
                      <p className="text-sm">
                        Used VueJS, TailwindCSS, and MaterialUI to provide a
                        reactive and clean user experience.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <CircleStackIcon className="w-10 h-10" />
                      <p className="font-bold">Backend Development</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Backend Development</p>
                      <p className="text-sm">
                        Created a backend to relay live telemtry to the frontend
                        user interface.
                      </p>
                      <p className="text-sm">
                        Backend was created in Python using technologies such
                        as: OpenCV, Websockets, and Sockets.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <ConnectionSignal className="w-10 h-10" />
                      <p className="font-bold">Electronics Programming</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-sm">Hardware Interfacing</p>
                      <p className="text-sm">
                        Programmed software that interfaces with a drone to
                        provide live telemtry to users.
                      </p>
                      <p className="text-sm">
                        Looked into source code written in C/C# and Lua.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <TransmissionLte className="w-10 h-10" />
                      <p className="font-bold">RF Technology</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-1">
                      <p className="font-bold">RF Technology</p>
                      <p className="text-sm">
                        Utilized 900Mhz radio to provide live telemetry to
                        ground station.
                      </p>
                      <p className="text-sm">
                        Learnt skills relating to OpenCV, MAVLink, and Mission
                        Planner
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          )}
          {/* Second Career END */}
          {/* Third Career START */}
          {selectedHistoryIndex == 2 && (
            <div className="flex w-full h-full flex-wrap pb-4">
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <ComputerDesktopIcon className="w-10 h-10" />
                      <p className="font-bold">Frontend Development</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Frontend Development</p>
                      <p className="text-sm">
                        Worked on creating data driven UI/UX for clients to
                        optimise, standardise and automate company processes.
                      </p>
                      <p className="text-sm">
                        ReactJS, VueJS, SvelteJS, TailwindCSS, and TypeScript.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <CircleStackIcon className="w-10 h-10" />
                      <p className="font-bold">Backend Development</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Backend Development</p>
                      <p className="text-sm">
                        Worked on designing server-side infrastructure to
                        provide ease of use APIs for frontend development.
                      </p>
                      <p className="text-sm">
                        MeteorJS, Python Django, REST APIs, and Soap APIs.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <AppConnectivity className="w-10 h-10" />
                      <p className="font-bold">Database Design</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-sm">Database Design</p>
                      <p className="text-sm">
                        Designed and developed Relational and Non-Relational
                        databases based on client requirements.
                      </p>
                      <p className="text-sm">
                        MySQL, PostgreSQL, MongoDB, and UML.
                      </p>
                    </div>
                  }
                />
              </div>
              <div className="w-full md:w-1/2 aspect-video p-2 animation-delay-100 animate-[fadeIn_1s]">
                <FlipCard
                  front={
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      <InfinitySymbol className="w-10 h-10" />
                      <p className="font-bold">DevOps</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col gap-1">
                      <p className="font-bold">DevOps</p>
                      <p className="text-sm">
                        Configured applications to have CI/CD practices, which
                        enables incremental code changes to staging and
                        production.
                      </p>
                      <p className="text-sm">
                        AWS, Linux, Docker, and Github Actions.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          )}
          {/* Third Career END */}
        </div>
        {/* Career Information END */}
      </div>
    </>
  );
}
