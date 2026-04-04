import { Skill } from '../data'

interface SkillCardProps extends Skill {}

export function SkillCard({ icon: Icon, title, description, highlight }: SkillCardProps) {
  return (
    <div className={`skill-card ${highlight ? 'highlight' : ''}`}>
      <Icon className="skill-icon" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}
