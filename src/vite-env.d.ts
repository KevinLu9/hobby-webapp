/// <reference types="vite/client" />

interface IResumeData {
  careerObjective?: ICareerObjective,
  careerHistory: ICareerHistory,
  education: IEducation,
  skills: ISkills,
  achievements: IAchievements,
  referees: IReferees,
}

type IconType = CarbonIconType | React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>,"ref"> & {title?: string;titleId?: string;} & React.RefAttributes<SVGSVGElement>>;

interface ICareerObjective {
  title?: string,
  icon?: IconType,
  description?: string,
}

interface IHistory {
  company?: string,
  start_date?: string,
  finish_date?: string,
  present?:boolean,
  job_title?: string,
  description?: string
}
interface ICareerHistory {
  title?: string,
  icon?: IconType,
  history?: IHistory[],
}

interface IEdu {
  institution?: string,
  description?: string,
  start_date?: string,
  finish_date?: string,
}

interface IEducation {
  title?: string,
  icon?: IconType,
  education?: IEdu[]
}

interface ISkill {
  name?: string,
  description?: string,
}

interface ISkills {
  title?: string,
  icon?: IconType,
  skills?: ISkill[]
}

interface IAchievements {
  title?: string,
  icon?: IconType,
  achievements?: string[],
}

interface IReferees {
  title: string,
  icon?: IconType,
  description: string,
}

// interface IProject[] {
// }