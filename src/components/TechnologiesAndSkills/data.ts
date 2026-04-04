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
  title: string
  description: string
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
    title: 'Front-end Development',
    description: 'Expert in React, TypeScript, JavaScript, building modern and responsive interfaces',
    highlight: false
  },
  {
    icon: FaServer,
    title: 'Back-end Development',
    description: 'Proficient in Golang, Java, creating robust and scalable APIs',
    highlight: true
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    description: 'Experience with MySQL, MongoDB, PostgreSQL for efficient data solutions',
    highlight: false
  },
  {
    icon: BiGitBranch,
    title: 'Version Control',
    description: 'Git expert for versioning, collaboration and CI/CD workflows',
    highlight: false
  },
  {
    icon: MdDevices,
    title: 'DevOps & Containers',
    description: 'Docker and Kubernetes for containerization and orchestration of applications',
    highlight: false
  },
  {
    icon: RiPencilRulerLine,
    title: 'Testing & Quality',
    description: 'Automated testing with JUnit, Jest, ensuring code reliability',
    highlight: false
  }
]
