import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useConcernsColumnAnimation } from '../../hooks/useConcernsColumnAnimation'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useI18n } from '../../i18n'
import { TypewriterHeading } from '../ui/TypewriterHeading'

function WarningIcon() {
  return (
    <span data-concern-icon className="flex h-5 w-5 shrink-0 items-center justify-center md:h-6 md:w-6" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6">
        <path d="M12 3L2 21h20L12 3z" fill="#c45c48" />
        <path d="M12 9v5M12 16v1" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

type ConcernCardProps = {
  text: string
  side: 'left' | 'right'
  index: number
}

function ConcernCard({ text, side, index }: ConcernCardProps) {
  return (
    <li data-concern-item data-side={side} data-index={index} className="m-0 list-none">
      <div
        data-concern-card
        data-side={side}
        className={`concern-card-shell flex items-center gap-1.5 md:gap-2 ${
          side === 'left' ? 'flex-row-reverse text-right' : 'flex-row text-left'
        }`}
      >
        <p className="concern-card-body rounded-sm bg-white px-2 py-1.5 text-[11px] font-medium leading-snug text-navy-900 shadow-[0_2px_12px_rgba(15,39,68,0.08)] sm:text-xs md:whitespace-nowrap md:px-3 md:py-2 md:text-[15px]">
          {text}
        </p>
        <WarningIcon />
      </div>
    </li>
  )
}

function CenterHub({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center ${className}`}
      aria-hidden
    >
      <div className="hub-ring hub-ring--outer" />
      <div className="hub-ring hub-ring--mid" />
      <div className="hub-ring hub-ring--inner" />

      <div className="hub-orbit">
        <span className="hub-dot hub-dot--top" />
        <span className="hub-dot hub-dot--bottom" />
      </div>

      <div className="hub-orbit--reverse">
        <span className="hub-dot hub-dot--side" />
      </div>

      <div className="absolute inset-10 rounded-full bg-aizome-400/10 animate-pulse md:inset-20" />

      <div className="relative z-10 grid grid-cols-2 gap-1.5 p-1.5 sm:gap-2 sm:p-2 md:gap-4 md:p-4">
        <HubIcon label="Code" floatClass="hub-icon-float">
          <rect x="4" y="6" width="16" height="12" rx="2" fill="#2a4460" />
          <path d="M8 11h8M8 14h5" stroke="#9ec4d4" strokeWidth="1.2" strokeLinecap="round" />
        </HubIcon>
        <HubIcon label="Gear" floatClass="hub-icon-float hub-icon-float--delay-1" spin>
          <circle cx="12" cy="12" r="6" fill="#5a8fa8" opacity="0.9" />
          <circle cx="12" cy="12" r="2.5" fill="#e8f4f8" />
        </HubIcon>
        <HubIcon label="Tags" floatClass="hub-icon-float hub-icon-float--delay-2">
          <path d="M8 8l4-2 4 2v8l-4 2-4-2V8z" fill="#6b98ad" />
          <path d="M10 10h4M10 13h3" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </HubIcon>
        <HubIcon label="Cloud" floatClass="hub-icon-float hub-icon-float--delay-3">
          <path d="M7 14a3 3 0 013-3 3.5 3.5 0 017 0 3 3 0 010 6H8a3 3 0 01-1-6z" fill="#457a94" />
          <path d="M12 15v3M10.5 17.5L12 19l1.5-1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </HubIcon>
      </div>

      <div className="hub-phone-bob absolute -right-1 bottom-1 z-20 rounded-xl bg-gradient-to-b from-aizome-300 to-aizome-600 p-1.5 shadow-lg sm:-right-2 sm:bottom-2 sm:p-2 md:-right-4 md:bottom-4 md:p-3">
        <div className="flex h-12 w-9 flex-col items-center justify-center rounded-lg bg-white/90 sm:h-14 sm:w-10 md:h-20 md:w-14">
          <svg className="h-5 w-5 text-aizome-600 sm:h-6 sm:w-6 md:h-8 md:w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <svg
        className="hub-gear-spin pointer-events-none absolute -left-4 top-3 h-10 w-10 text-navy-900/8 sm:-left-6 sm:top-4 sm:h-12 sm:w-12 md:-left-12 md:top-8 md:h-20 md:w-20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5zm8.43-2.52l1.18-2.04-2.04-1.18-1.18 2.04 2.04 1.18zM4.61 17.48l-1.18 2.04 2.04 1.18 1.18-2.04-2.04-1.18z" />
      </svg>

      <div className="absolute -top-3 left-1/2 z-0 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-navy-900/10 bg-white/80 sm:-top-4 sm:h-8 sm:w-8 md:-top-6 md:h-12 md:w-12" />
    </div>
  )
}

function HubIcon({
  children,
  label,
  floatClass = '',
  spin = false,
}: {
  children: ReactNode
  label: string
  floatClass?: string
  spin?: boolean
}) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg sm:h-16 sm:w-16 sm:rounded-xl md:h-32 md:w-32 md:rounded-2xl ${floatClass}`}
      title={label}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-8 w-8 sm:h-10 sm:w-10 md:h-[4.5rem] md:w-[4.5rem] ${spin ? 'hub-gear-spin' : ''}`}
      >
        {children}
      </svg>
    </div>
  )
}

function ConcernColumn({
  items,
  side,
}: {
  items: { id: string; text: string; side: 'left' | 'right' }[]
  side: 'left' | 'right'
}) {
  return (
    <ul
      className={`flex flex-col gap-3 sm:gap-3.5 md:gap-4 ${
        side === 'left' ? 'items-end' : 'items-start'
      }`}
      data-concern-column={side}
    >
      {items.map((item, index) => (
        <ConcernCard key={item.id} text={item.text} side={side} index={index} />
      ))}
    </ul>
  )
}

export function ConcernsRadialSection() {
  const { dict } = useI18n()
  const chevronRef = useScrollReveal<HTMLDivElement>()
  const stageRef = useRef<HTMLDivElement>(null)
  useConcernsColumnAnimation(stageRef)

  const leftItems = dict.concerns.items.filter((item) => item.side === 'left')
  const rightItems = dict.concerns.items.filter((item) => item.side === 'right')

  return (
    <section className="page-section section-band-white section-band-py-compact overflow-x-clip md:overflow-visible">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 md:px-6">
        <header className="mb-6 overflow-hidden md:mb-8">
          <TypewriterHeading
            text={dict.home.concerns.title}
            subtitle={dict.home.concerns.subtitle}
            className="text-3xl md:text-5xl"
            speed={52}
          />
        </header>

        <div
          ref={stageRef}
          className="relative grid w-full grid-cols-2 gap-x-3 sm:gap-x-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-x-8 lg:gap-x-10"
          data-concerns-stage
        >
          <div
            className="col-span-2 mb-1 flex justify-center md:col-span-1 md:col-start-2 md:row-start-1 md:mb-0"
            data-concerns-hub
          >
            <CenterHub className="h-44 w-44 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-[28rem] lg:w-[28rem]" />
          </div>

          <div className="col-start-1 row-start-2 md:row-start-1">
            <ConcernColumn items={leftItems} side="left" />
          </div>

          <div className="col-start-2 row-start-2 md:col-start-3 md:row-start-1">
            <ConcernColumn items={rightItems} side="right" />
          </div>
        </div>

        <div ref={chevronRef} className="scroll-reveal mt-8 flex justify-center md:mt-10">
          <a
            href="#reasons"
            className="hub-chevron-bounce flex h-12 w-12 items-center justify-center text-coral-500 transition-transform hover:translate-y-1"
            aria-label={dict.home.nextSection}
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
