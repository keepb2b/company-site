import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'

export function FixedContactCTA() {
  const { dict } = useI18n()

  return (
    <aside
      className="fixed-cta group fixed z-[100]"
      aria-label={dict.common.freeConsultShort}
    >
      <Link
        to="/contact"
        className="fixed-cta-link flex items-end gap-2 rounded-2xl bg-sand-50/95 p-2 pr-3 shadow-[0_8px_32px_rgba(30,51,71,0.15)] ring-1 ring-navy-900/8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(196,92,72,0.2)] hover:ring-coral-500/40"
      >
        <div className="relative h-[72px] w-[56px] shrink-0 overflow-hidden rounded-xl bg-gradient-to-b from-sand-100 to-sand-200 md:h-[80px] md:w-[62px]">
          <img
            src="/images/employee-phone-cta.png"
            alt=""
            className="h-full w-full object-cover object-top"
            width={62}
            height={80}
            loading="lazy"
          />
        </div>
        <div className="pb-1.5 text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-coral-500 md:text-[11px]">
            Free
          </p>
          <p className="text-xs font-bold leading-tight text-navy-900 md:text-sm">
            {dict.common.freeConsultShort}
          </p>
          <p className="mt-0.5 hidden text-[10px] text-navy-700/60 sm:block">{dict.common.feelFree}</p>
        </div>
        <span
          className="mb-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white transition-transform group-hover:scale-110"
          aria-hidden
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </aside>
  )
}
