import { ComponentType } from 'react'
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJava, FaGithub, FaAws, FaJenkins, FaPython, FaCode, FaServer, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGo, SiMysql, SiMongodb, SiPostgresql, SiPostman, SiGrafana, SiDatadog } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { MdDevices } from 'react-icons/md'
import { BiGitBranch } from 'react-icons/bi'
import { RiPencilRulerLine } from 'react-icons/ri'

export interface Technology {
  name: string
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  highlight: boolean
}

export interface Skill {
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
  titleKey: string
  descriptionKey: string
  highlight: boolean
}

export const technologies: Technology[] = [
  { name: 'React', icon: FaReact, color: '#61DAFB', highlight: false },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', highlight: false },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', highlight: false },
  { name: 'Python', icon: FaPython, color: '#3776AB', highlight: false },
  { name: 'Golang', icon: SiGo, color: '#00ADD8', highlight: true },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', highlight: false },
  { name: 'Java', icon: FaJava, color: '#E22A2A', highlight: false },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', highlight: false },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', highlight: false },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', highlight: false },
  { name: 'AWS', icon: FaAws, color: '#FF9900', highlight: false },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', highlight: false },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', highlight: false },
  { name: 'GitHub', icon: FaGithub, color: '#6366f1', highlight: false },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', highlight: false },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', highlight: false },
  { name: 'Grafana', icon: SiGrafana, color: '#F46800', highlight: false },
  { name: 'Datadog', icon: SiDatadog, color: '#632CA6', highlight: false },
  { name: 'Jenkins', icon: FaJenkins, color: '#D24939', highlight: false },
]

export const skills: Skill[] = [
  {
    icon: FaCode,
    titleKey: 'skills.cards.frontend.title',
    descriptionKey: 'skills.cards.frontend.description',
    highlight: false
  },
  {
    icon: FaServer,
    titleKey: 'skills.cards.backend.title',
    descriptionKey: 'skills.cards.backend.description',
    highlight: true
  },
  {
    icon: FaDatabase,
    titleKey: 'skills.cards.database.title',
    descriptionKey: 'skills.cards.database.description',
    highlight: false
  },
  {
    icon: BiGitBranch,
    titleKey: 'skills.cards.versionControl.title',
    descriptionKey: 'skills.cards.versionControl.description',
    highlight: false
  },
  {
    icon: MdDevices,
    titleKey: 'skills.cards.devops.title',
    descriptionKey: 'skills.cards.devops.description',
    highlight: false
  },
  {
    icon: RiPencilRulerLine,
    titleKey: 'skills.cards.testing.title',
    descriptionKey: 'skills.cards.testing.description',
    highlight: false
  }
]
