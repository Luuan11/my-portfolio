import type { Skill } from '../data'
import { useTranslation } from '../../../hooks/useTranslation'

interface SkillCardProps extends Skill {}

export function SkillCard({ icon: Icon, titleKey, descriptionKey, highlight }: SkillCardProps) {
  const { t } = useTranslation()

  return (
    <div className={`skill-card ${highlight ? 'highlight' : ''}`}>
      <Icon className="skill-icon" />
      <h4>{t(titleKey)}</h4>
      <p>{t(descriptionKey)}</p>
    </div>
  )
}
