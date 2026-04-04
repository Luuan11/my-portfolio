import type { Skill } from '../data'
import { SkillCard } from './SkillCard'

interface SkillsGridProps {
  skills: Skill[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  )
}
