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
import { RecentlyViewed, UserCertification } from "@carbon/icons-react";
import { useState } from "react";
import ResumeButtons from "../components/resume/ResumeButtons";
import CareerObjective from "../components/resume/CareerObjective";
import CareerHistory from "../components/resume/CareerHistory";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills";
import Achievements from "../components/resume/Achievements";
import Referees from "../components/resume/Referees";

export default function Resume() {
  const resumeData: IResumeData = {
    careerObjective: {
      title: "Career Objective",
      icon: <RocketLaunchIcon className="w-5 h-5" />,
      description: `I am a recent graduate with a strong foundation in technology, coding, and engineering, actively seeking full-time
                    opportunities. My primary goal is to expand my skills and knowledge by addressing complex challenges. As a highly self motivated individual, I am committed to continuous improvement and excellence in my work. I am focused on advancing
                    my career as a professional engineer, IT worker or in related fields where my expertise in hardware or software can
                    be effectively utilized.
      `,
    },
    careerHistory: {
      title: "Career History",
      icon: <RecentlyViewed className="w-5 h-5" />,
      history: [
        {
          company: "School of Academic Coaching",
          start_date: "2018-12-01",
          finish_date: "2021-09-01",
          present: false,
          job_title: "Primary and Secondary Tutor",
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
          job_title: "Avionics Technical Member",
          description: `- Programming software that interfaces with the drone to provide live telemetry to users (OpenCV, Mavlink, Mission Planner).
- Sending and requesting data using RF technologies (900MHz).
- Frontend Development (VueJS, MaterialUI).
- Backend Development (Python WebSockets, RESTful API).
                      `,
        },
        {
          company: "Techreative",
          start_date: "2023-05-01",
          finish_date: undefined,
          present: true,
          job_title: "Software Engineer",
          description: `- Backend Database Design (MySQL, PostgreSQL and MongoDB).
- Backend Development (MeteorJS, Python Django, SwaggerUI, RESTful API, SOAP).
- Frontend Development using Javascript, HTML and CSS (ReactJS, VueJS, SvelteJS, TailwindCSS).
- CI/CD (Linux, Docker, Github Actions).

                      `,
        },
      ],
    },
    education: {
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
    skills: {
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
    achievements: {
      title: "Achievements",
      icon: <TrophyIcon className="w-5 h-5" />,
      achievements: [
        "DUX of Lighthouse Christian College (2018).",
        "Monash University: Faculty of Engineering Dean's Honour List (2019, 2023).",
        "Vice-Chancellor's Scholarship for Excellence at Monash (2019).",
      ],
    },
    referees: {
      title: "Referees",
      icon: <UserCertification className="w-5 h-5" />,
      description: "Available Upon Request",
    },
  };

  const [tab, setTab] = useState(0);
  const renderTab = () => {
    let tabElement;
    switch (tab) {
      case 0:
        tabElement = (
          <CareerObjective careerObjective={resumeData?.careerObjective} />
        );
        break;
      case 1:
        tabElement = (
          <CareerHistory careerHistory={resumeData?.careerHistory} />
        );
        break;
      case 2:
        tabElement = <Education education={resumeData?.education} />;
        break;
      case 3:
        tabElement = <Skills skills={resumeData?.skills} />;
        break;

      case 4:
        tabElement = <Achievements achievements={resumeData?.achievements} />;
        break;
      case 5:
        tabElement = <Referees referees={resumeData?.referees} />;
        break;
      default:
        <CareerObjective careerObjective={resumeData?.careerObjective} />;
    }
    return <div className="w-full h-full">{tabElement}</div>;
  };
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
              <ResumeButtons {...{ tab, setTab, resumeData }} />
              <div className="z-[5] flex overflow-y-hidden h-full w-full relative">
                <div className="w-full border-2 border-blue-600 hidden md:block absolute top-0" />
                <div className="w-full h-full overflow-x-hidden overflow-y-auto p-2">
                  {renderTab()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
