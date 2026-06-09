import { useCountUp } from '../../hooks/useCountUp'

type Props = {
  value: number
  suffix: string
  label: string
  unit: string
}

export function AchievementNumber({ value, suffix, label, unit }: Props) {
  const { ref, display } = useCountUp(value)

  return (
    <div ref={ref} className="achievement-card scroll-reveal">
      <div className="achievement-card__icon" aria-hidden>
        {unit}
      </div>
      <p className="achievement-card__number">
        <span>{display.toLocaleString()}</span>
      </p>
      <p className="achievement-card__label">{label}</p>
      <p className="achievement-card__suffix">{suffix === '+' ? '以上' : suffix}</p>
    </div>
  )
}
