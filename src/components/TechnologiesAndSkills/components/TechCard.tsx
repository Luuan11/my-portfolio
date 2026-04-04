import type { Technology } from '../data'

interface TechCardProps extends Technology {}

export function TechCard({ name, icon: Icon, color, highlight }: TechCardProps) {
  return (
    <div className={`tech-card ${highlight ? 'highlight' : ''}`}>
      <Icon className="tech-icon" style={{ color }} />
      <span>{name}</span>
    </div>
  )
}
