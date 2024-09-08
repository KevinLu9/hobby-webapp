import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import "../App.css";
import FlipCard from "../components/FlipCard";
import dayjs from "dayjs";
import {
  BuildingLibraryIcon,
  Cog8ToothIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { RecentlyViewed } from "@carbon/icons-react";
import { useState } from "react";

export default function Resume() {
  const resumeData = {
    careerObjective: `I am a university graduate looking for full-time employment. I have a background in technology, coding and engineering.
                        My goal is to currently broaden my skills and knowledge by tackling difficult problems. Being a very self-driven person, I
                        constantly pursue improvement and refinement in the work I do. As a result, I aspire to be diligent in my work. My
                        current goal is to develop myself as a professional engineer or any other related fields that can make use of my hardware
                        and software skills.
                        `,
    careerHistory: [
      {
        company: "School of Academic Coaching",
        start_date: dayjs("2018-12-01"),
        finish_date: dayjs("2021-09-01"),
        present: false,
        job_title: " Primary and Secondary Tutor",
        description: `  - Tutored children in primary and secondary school
                        - Managed classes from 5 to 15 students.
                        - Aided in administrative work.
                        - Trained new employees.
                      `,
      },
      {
        company: "Monash Uncrewed Aerial Systems",
        start_date: dayjs("2023-04-01"),
        finish_date: dayjs("2024-01-01"),
        present: false,
        job_title: " Primary and Secondary Tutor",
        description: `  - Programming software that interfaces with the drone to provide live telemetry to users (OpenCV, Mavlink, Mission Planner).
                        - Sending and requesting data using RF technologies (900MHz).
                        - Frontend Development (VueJS, MaterialUI).
                        - Backend Development (Python WebSockets, RESTful API).
                      `,
      },
      {
        company: "Techreative",
        start_date: dayjs("2023-05-01"),
        finish_date: null,
        present: true,
        job_title: " Primary and Secondary Tutor",
        description: `  - Programming software that interfaces with the drone to provide live telemetry to users (OpenCV, Mavlink, Mission Planner).
                        - Sending and requesting data using RF technologies (900MHz).
                        - Frontend Development (VueJS, MaterialUI).
                        - Backend Development (Python WebSockets, RESTful API).
                      `,
      },
    ],
    education: [
      {
        institution: "Lighthouse Christian College",
        description: `- Completed VCE (English, Physics, Chemistry, Specialist Math, Math Methods, and Further Math) - 96.7`,
      },
      {
        institution: "Monash University",
        description: `- Bachelor of Electrical and Computer Systems Engineering (Honours).
                      - Bachelor of Computer Science (Advanced).
                      - Distinction Level WAM - 79
                      - GPA - 3.5 / 4.0
                      `,
      },
    ],
    skills: [
      {
        name: "Programming",
        description: "",
      },
      {
        name: "",
        description: "",
      },
      {
        name: "LEADERSHIP SKILLS",
        description: `- In university, I led engineering projects, which enabled me to demonstrate my proficiency when managing
        workload and time effectively, while also understanding each team member's strengths and weaknesses.`,
      },
      {
        name: "COMMUNICATION SKILLS",
        description: `- As a result from my work experience as a tutor, I have experience in speaking openly and clearly to customers
        and clients.`,
      },
      {
        name: "PROBLEM SOLVING SKILLS",
        description: `- As an Engineering and IT student, I enjoy looking at problems from different perspectives and make calculated
        decisions. Due to this, I am eager to confront new challenges and find new solutions to problems.`,
      },
      {
        name: "TEAMWORK",
        description: `- I have worked under various team environments during my time as an engineering student and as a software
        engineer at Techreative. This has given me the opportunity to understand the requirements and characterstics that
        make up a team.`,
      },
      {
        name: "ADAPTABILITY",
        description: `- While working as a tutor, I was given up to dozens of students of varying year levels. Adjusting to each students'
        needs and accommodating each student has developed my ability to work under stressful circumstances.`,
      },
      {
        name: "CODING SKILLS",
        description: `- Python (Flask, Django), C, C++
        - Javascript, HTML, CSS (ReactJS, VueJS, SvelteJS, TailwindCSS, MeteorJS)`,
      },
    ],
    achievements: [
      "DUX of Lighthouse Christian College (2018).",
      "Monash University: Faculty of Engineering Dean’s Honour List (2019, 2023).",
      "Vice-Chancellor’s Scholarship for Excellence at Monash (2019).",
    ],
  };

  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 w-full items-center justify-center">
          <div className="flex gap-2 items-center animate-[fadeIn_1s]">
            <ClipboardDocumentListIcon className="w-8 h-8 p-0 m-0" />
            <p className="font-bold text-2xl uppercase text-center">Resume</p>
          </div>
          <div className="w-full md:w-2/3 h-2/3 md:h-fit aspect-video bg-base-100 rounded-md shadow-xl animate-[slideRight_1s]">
            <div className="w-full h-fit md:h-full flex flex-col md:flex-row">
              {/* <FlipCard front={<>FRONT</>} back={<>BACK</>} /> */}
              {/* Side Buttons START */}
              <div className=" relative z-[10] bg-white dark:bg-gray-800 border-r shadow-md md:shadow-xl w-full md:w-fill max-w-fit h-full flex flex-row md:flex-col items-center justify-start md:justify-center gap-1 p-2 overflow-x-scroll md:overflow-x-hidden">
                {/* <ChevronLeftIcon className="absolute -left-2 w-8 h-8 animate-pulse" /> */}
                <ChevronRightIcon className="fixed right-0 w-8 h-8 animate-pulse text-indigo-200" />
                <button
                  className={`btn btn-sm w-fit md:w-full ${tab == 0 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-600 text-white"}`}
                  onClick={() => {
                    setTab(0);
                  }}
                >
                  <div className="flex items-center justify-start w-full gap-1">
                    <RocketLaunchIcon className="w-5 h-5" />
                    <p className="whitespace-nowrap">Career Objective</p>
                  </div>
                </button>
                <button
                  className={`btn btn-sm w-fit md:w-full ${tab == 1 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-600 text-white"}`}
                  onClick={() => {
                    setTab(1);
                  }}
                >
                  <div className="flex items-center justify-start w-full gap-1">
                    <RecentlyViewed className="w-5 h-5" />
                    <p className="whitespace-nowrap">Career History</p>
                  </div>
                </button>
                <button
                  className={`btn btn-sm w-fit md:w-full ${tab == 2 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-600 text-white"}`}
                  onClick={() => {
                    setTab(2);
                  }}
                >
                  <div className="flex items-center justify-start w-full gap-1">
                    <BuildingLibraryIcon className="w-5 h-5" />
                    <p className="whitespace-nowrap">Education</p>
                  </div>
                </button>
                <button
                  className={`btn btn-sm w-fit md:w-full ${tab == 3 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-600 text-white"}`}
                  onClick={() => {
                    setTab(3);
                  }}
                >
                  <div className="flex items-center justify-start w-full gap-1">
                    <Cog8ToothIcon className="w-5 h-5" />
                    <p className="whitespace-nowrap">Skills</p>
                  </div>
                </button>
                <button
                  className={`btn btn-sm w-fit md:w-full ${tab == 4 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-600 text-white"}`}
                  onClick={() => {
                    setTab(4);
                  }}
                >
                  <div className="flex items-center justify-start w-full gap-1">
                    <TrophyIcon className="w-5 h-5" />
                    <p className="whitespace-nowrap">Achievements</p>
                  </div>
                </button>
                <button
                  className={`btn btn-sm w-fit md:w-full ${tab == 5 ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-600 text-white"}`}
                  onClick={() => {
                    setTab(5);
                  }}
                >
                  <div className="flex items-center justify-start w-full gap-1">
                    <UserIcon className="w-5 h-5" />
                    <p className="whitespace-nowrap">Referees</p>
                  </div>
                </button>
              </div>
              {/* Side Buttons END */}
              {/* Tab Information START */}
              <div className="z-[5] w-full h-[60dvh]">
                <div className="w-full border-2 border-blue-600 hidden md:block" />
                {tab == 0 && (
                  <div className="p-2 w-full h-full overflow-y-auto overflow-x-hidden">
                    <div className="flex gap-2 items-center animate-[slideLeft_1s]">
                      <RocketLaunchIcon className="w-5 h-5" />
                      <p className="font-bold text-lg uppercase">
                        Career Objective
                      </p>
                    </div>
                    <div className="w-full p-4 flex items-center justify-center">
                      <p className="animate-[fadeIn_1s] border border-black rounded-md p-4">
                        {resumeData?.careerObjective}
                      </p>
                    </div>
                  </div>
                )}
                {tab == 1 && (
                  <div className="p-2 w-full h-full">
                    <div className="flex gap-2 items-center animate-[slideLeft_1s]">
                      <RecentlyViewed className="w-5 h-5" />
                      <p className="font-bold text-lg uppercase">
                        Career History
                      </p>
                    </div>
                    <p className="animate-[fadeIn_1s]">desc</p>
                  </div>
                )}
                {tab == 2 && (
                  <div className="p-2 w-full h-full">
                    <div className="flex gap-2 items-center w-full animate-[slideLeft_1s]">
                      <BuildingLibraryIcon className="w-5 h-5" />
                      <p className="font-bold text-lg uppercase">Education</p>
                    </div>
                    <p className="animate-[fadeIn_1s]">desc</p>
                  </div>
                )}
                {tab == 3 && (
                  <div className="p-2 w-full h-full">
                    <div className="flex gap-2 items-center w-full animate-[slideLeft_1s]">
                      <Cog8ToothIcon className="w-5 h-5" />
                      <p className="font-bold text-lg uppercase">Skills</p>
                    </div>
                    <p className="animate-[fadeIn_1s]">desc</p>
                  </div>
                )}
                {tab == 4 && (
                  <div className="p-2 w-full h-full">
                    <div className="flex gap-2 items-center w-full animate-[slideLeft_1s]">
                      <TrophyIcon className="w-5 h-5" />
                      <p className="font-bold text-lg uppercase">
                        Achievements
                      </p>
                    </div>
                    <p className="animate-[fadeIn_1s]">desc</p>
                  </div>
                )}
                {tab == 5 && (
                  <div className="p-2 w-full h-full">
                    <div className="flex gap-2 items-center w-full animate-[slideLeft_1s]">
                      <UserIcon className="w-5 h-5" />
                      <p className="font-bold text-lg uppercase">Referees</p>
                    </div>
                    <p className="animate-[fadeIn_1s]">desc</p>
                  </div>
                )}
              </div>
              {/* Tab Information END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
