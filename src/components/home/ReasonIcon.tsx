import type { ReasonIcon as ReasonIconType } from '../../data/reasons'

const stroke = '#5a8fa8'
const strokeW = 1.6

export function ReasonIcon({ type }: { type: ReasonIconType }) {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 md:h-14 md:w-14" fill="none" aria-hidden>
      {type === 'medal' && (
        <>
          <circle cx="24" cy="20" r="10" stroke={stroke} strokeWidth={strokeW} />
          <path d="M18 30l6 10 6-10M20 18h8" stroke={stroke} strokeWidth={strokeW} strokeLinecap="round" />
        </>
      )}
      {type === 'handshake' && (
        <path
          d="M10 26c4-6 8-8 14-8s10 2 14 8M16 22l4 4 8-8 4 6"
          stroke={stroke}
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {type === 'motion' && (
        <>
          <rect x="10" y="12" width="28" height="20" rx="2" stroke={stroke} strokeWidth={strokeW} />
          <path d="M16 22h16M16 26h10" stroke={stroke} strokeWidth={strokeW} strokeLinecap="round" />
          <circle cx="34" cy="16" r="3" fill={stroke} />
        </>
      )}
      {type === 'team' && (
        <>
          <circle cx="18" cy="18" r="5" stroke={stroke} strokeWidth={strokeW} />
          <circle cx="30" cy="18" r="5" stroke={stroke} strokeWidth={strokeW} />
          <path d="M10 34c2-6 6-8 14-8s12 2 14 8" stroke={stroke} strokeWidth={strokeW} strokeLinecap="round" />
        </>
      )}
      {type === 'meeting' && (
        <>
          <rect x="12" y="10" width="24" height="18" rx="2" stroke={stroke} strokeWidth={strokeW} />
          <path d="M18 18h12M18 22h8M16 34h16" stroke={stroke} strokeWidth={strokeW} strokeLinecap="round" />
        </>
      )}
      {type === 'ec' && (
        <>
          <path d="M12 16h24l-2 18H14l-2-18z" stroke={stroke} strokeWidth={strokeW} strokeLinejoin="round" />
          <path d="M18 16v-4h12v4" stroke={stroke} strokeWidth={strokeW} strokeLinecap="round" />
          <circle cx="20" cy="28" r="2" fill={stroke} />
          <circle cx="28" cy="28" r="2" fill={stroke} />
        </>
      )}
    </svg>
  )
}
