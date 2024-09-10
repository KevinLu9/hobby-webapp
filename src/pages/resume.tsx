import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import "../App.css";
// import FlipCard from "../components/FlipCard";
import dayjs from "dayjs";
import {
  BuildingLibraryIcon,
  Cog8ToothIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { RecentlyViewed } from "@carbon/icons-react";
import { useState } from "react";
import ResumeButtons from "../components/ResumeButtons";

export default function Resume() {
  const resumeData = [
    {
      title: "Career Objective",
      icon: <RocketLaunchIcon className="w-5 h-5" />,
      description: `I am a recent university graduate looking for full-time employment. I have a background in technology, coding and engineering.
      My goal is to currently broaden my skills and knowledge by tackling difficult problems. Being a very self-driven person, I
      constantly pursue improvement and refinement in the work I do. As a result, I aspire to be diligent in my work. My
      current goal is to develop myself as a professional engineer or any other related fields that can make use of my hardware
      and software skills.
      `,
    },
    {
      title: "Career History",
      icon: <RecentlyViewed className="w-5 h-5" />,
      history: [
        {
          company: "School of Academic Coaching",
          start_date: "2018-12-01",
          finish_date: "2021-09-01",
          present: false,
          job_title: " Primary and Secondary Tutor",
          description: `- Tutored children in primary and secondary school
- Managed classes from 5 to 15 students.
- Aided in administrative work.
- Trained new employees.
                      `,
        },
        {
          company: "Monash Uncrewed Aerial Systems",
          start_date: "2023-04-01",
          finish_date: "2024-01-01",
          present: false,
          job_title: " Primary and Secondary Tutor",
          description: `- Programming software that interfaces with the drone to provide live telemetry to users (OpenCV, Mavlink, Mission Planner).
- Sending and requesting data using RF technologies (900MHz).
- Frontend Development (VueJS, MaterialUI).
- Backend Development (Python WebSockets, RESTful API).
                      `,
        },
        {
          company: "Techreative",
          start_date: "2023-05-01",
          finish_date: null,
          present: true,
          job_title: "Software Engineer",
          description: `- Programming software that interfaces with the drone to provide live telemetry to users (OpenCV, Mavlink, Mission Planner).
- Sending and requesting data using RF technologies (900MHz).
- Frontend Development (VueJS, MaterialUI).
- Backend Development (Python WebSockets, RESTful API).
                      `,
        },
      ],
    },
    {
      title: "Education",
      icon: <BuildingLibraryIcon className="w-5 h-5" />,
      education: [
        {
          institution: "Lighthouse Christian College",
          description: `- Completed VCE (English, Physics, Chemistry, Specialist Math, Math Methods, and Further Math) - 96.7`,
          start_date: "2014-2-1",
          finish_date: "2018-12-1",
        },
        {
          institution: "Monash University",
          description: `- Bachelor of Electrical and Computer Systems Engineering (Honours).
- Bachelor of Computer Science (Advanced).
- Distinction Level WAM - 79
- GPA - 3.5 / 4.0`,
          start_date: "2019-3-1",
          finish_date: "2023-11-1",
        },
      ],
    },
    {
      title: "Skills",
      icon: <Cog8ToothIcon className="w-5 h-5" />,
      skills: [
        {
          name: "LEADERSHIP SKILLS",
          description: `- In university, I led engineering projects, which enabled me to demonstrate my proficiency when managing workload and time effectively, while also understanding each team member's strengths and weaknesses.`,
        },
        {
          name: "COMMUNICATION SKILLS",
          description: `- As a result from my work experience as a tutor, I have experience in speaking openly and clearly to customers and clients.`,
        },
        {
          name: "PROBLEM SOLVING SKILLS",
          description: `- As an Engineering and IT student, I enjoy looking at problems from different perspectives and make calculated decisions. Due to this, I am eager to confront new challenges and find new solutions to problems.`,
        },
        {
          name: "TEAMWORK",
          description: `- I have worked under various team environments during my time as an engineering student and as a software engineer at Techreative. This has given me the opportunity to understand the requirements and characterstics that make up a team.`,
        },
        {
          name: "ADAPTABILITY",
          description: `- While working as a tutor, I was given up to dozens of students of varying year levels. Adjusting to each students' needs and accommodating each student has developed my ability to work under stressful circumstances.`,
        },
        {
          name: "CODING SKILLS",
          description: `- Python (Flask, Django), C, C++
- Javascript, HTML, CSS (ReactJS, VueJS, SvelteJS, TailwindCSS, MeteorJS)`,
        },
      ],
    },
    {
      title: "Achievements",
      icon: <TrophyIcon className="w-5 h-5" />,
      achievements: [
        "DUX of Lighthouse Christian College (2018).",
        "Monash University: Faculty of Engineering Dean's Honour List (2019, 2023).",
        "Vice-Chancellor's Scholarship for Excellence at Monash (2019).",
      ],
    },
  ];

  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 w-full items-center justify-center">
          <div className="flex gap-2 items-center animate-[fadeIn_1s]">
            <ClipboardDocumentListIcon className="w-8 h-8 p-0 m-0" />
            <p className="font-bold text-2xl uppercase text-center">Resume</p>
          </div>
          <div className="w-full md:w-2/3 h-[70dvh] md:h-[58dvh] aspect-video bg-base-100 rounded-md shadow-xl animate-[slideRight_1s]">
            <div className="w-full h-full md:h-full flex flex-col md:flex-row">
              {/* <FlipCard front={<>FRONT</>} back={<>BACK</>} /> */}
              {/* Side Buttons START */}
              <ResumeButtons {...{ tab, setTab, resumeData }} />
              {/* Side Buttons END */}
              {/* Tab Information START */}
              <div className="z-[5] flex overflow-y-scroll h-full w-full relative">
                <div className="w-full border-2 border-blue-600 hidden md:block absolute top-0" />
                <div className="w-full h-full overflow-x-hidden overflow-y-auto p-2">
                  {tab == 0 && (
                    <div className="w-full h-full">
                      <div className="flex gap-2 items-center animate-[fadeSlideLeft_1s]">
                        <RocketLaunchIcon className="w-5 h-5" />
                        <p className="font-bold text-lg uppercase">
                          {resumeData[0]?.title}
                        </p>
                      </div>
                      <div className="w-full h-auto lg:h-5/6 p-4">
                        <p className="animate-[fadeIn_1s] border shadow-md rounded-md p-4">
                          {resumeData[0]?.description}
                        </p>
                      </div>
                    </div>
                  )}
                  {tab == 1 && (
                    <div className="w-full h-full">
                      <div className="flex gap-2 items-center animate-[fadeSlideLeft_1s]">
                        <RecentlyViewed className="w-5 h-5" />
                        <p className="font-bold text-lg uppercase">
                          {resumeData[1]?.title}
                        </p>
                      </div>
                      <div className="animate-[fadeIn_1s]">
                        {resumeData[1]?.history?.map((career) => {
                          return (
                            <div key={career.company}>
                              <p className="font-bold text-lg underline">
                                {career?.company}
                              </p>
                              <p className="font-bold uppercase italic">
                                {career?.job_title}
                              </p>
                              <p className="text-sm">
                                ({dayjs(career?.start_date).format("MMM YYYY")}{" "}
                                -{" "}
                                {dayjs(career?.finish_date).format("MMM YYYY")})
                              </p>
                              <p className="whitespace-pre text-wrap">
                                {career?.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {tab == 2 && (
                    <div className="w-full h-full">
                      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
                        <BuildingLibraryIcon className="w-5 h-5" />
                        <p className="font-bold text-lg uppercase">
                          {resumeData[2]?.title}
                        </p>
                      </div>
                      <div className="animate-[fadeIn_1s]">
                        {resumeData[2]?.education?.map((edu) => {
                          return (
                            <div key={edu?.institution}>
                              <p className="font-bold text-lg underline">
                                {edu?.institution}
                              </p>
                              <p className="text-sm">
                                ({dayjs(edu?.start_date).format("MMM YYYY")} -{" "}
                                {dayjs(edu?.finish_date).format("MMM YYYY")})
                              </p>
                              <p className="whitespace-pre text-wrap">
                                {edu?.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {tab == 3 && (
                    <div className="w-full h-full">
                      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
                        <Cog8ToothIcon className="w-5 h-5" />
                        <p className="font-bold text-lg uppercase">
                          {resumeData[3]?.title}
                        </p>
                      </div>
                      <div className="animate-[fadeIn_1s]">
                        {resumeData[3]?.skills?.map((skill) => {
                          return (
                            <div key={skill?.name}>
                              <p className="font-bold text-lg underline">
                                {skill?.name}
                              </p>
                              <p className="whitespace-pre text-wrap">
                                {skill?.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {tab == 4 && (
                    <div className="w-full h-full">
                      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
                        <TrophyIcon className="w-5 h-5" />
                        <p className="font-bold text-lg uppercase">
                          {resumeData[4]?.title}
                        </p>
                      </div>
                      <div className="animate-[fadeIn_1s]">
                        {resumeData[4]?.achievements?.map((achievement) => {
                          return (
                            <div key={achievement}>
                              <p className="text-lg">{achievement}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {tab == 5 && (
                    <div className="p-2 w-full h-full">
                      <div className="flex gap-2 items-center w-full animate-[fadeSlideLeft_1s]">
                        <UserIcon className="w-5 h-5" />
                        <p className="font-bold text-lg uppercase">
                          {resumeData[5]?.title}
                        </p>
                      </div>
                      <div className="animate-[fadeIn_1s]">desc</div>
                    </div>
                  )}
                </div>
              </div>
              {/* Tab Information END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
