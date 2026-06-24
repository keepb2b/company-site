import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import type { BlogPost } from '../../data/blogPosts'

interface Props {
  post: BlogPost | null
  onClose: () => void
}

export function BlogCardDialog({ post, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return

    if (post) {
      el.showModal()
    } else {
      el.close()
    }
  }, [post])

  function handleClick(e: MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) onClose()
  }

  if (!post) return null

  const formattedDate = post.date.replace(/\./g, '-')

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClick}
      onClose={onClose}
      className="m-auto max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] overflow-hidden rounded-[1.35rem] border border-white/70 bg-white p-0 shadow-[0_32px_100px_rgba(16,34,51,0.32)] backdrop:bg-navy-950/65 backdrop:backdrop-blur-md open:animate-[dialog-in_0.2s_ease-out] md:max-h-[min(760px,calc(100dvh-2rem))] md:w-[min(940px,calc(100vw-2rem))] md:rounded-3xl"
    >
      <article className="flex max-h-[calc(100dvh-1rem)] flex-col overflow-y-auto bg-white md:grid md:max-h-[min(760px,calc(100dvh-2rem))] md:grid-cols-[0.95fr_1.05fr] md:overflow-hidden">
        <div className="relative flex min-h-[220px] shrink-0 items-center justify-center overflow-hidden bg-sand-50 p-4 md:min-h-full md:p-6">
          <img
            src={post.image}
            alt={post.title}
            className="relative z-0 max-h-[min(42dvh,320px)] w-full object-contain md:max-h-[calc(min(760px,100dvh-2rem)-3rem)]"
            suppressHydrationWarning
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent md:bg-gradient-to-r md:from-navy-950/12 md:via-transparent md:to-transparent" aria-hidden />
          <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-3 py-1 text-xs font-bold text-navy-950 shadow-sm backdrop-blur">
            {post.serviceNumber}
          </span>
          <div className="absolute bottom-5 left-5 right-5">
            <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex min-h-0 shrink-0 flex-col md:shrink">
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-sand-200/80 bg-white/95 px-5 py-3.5 backdrop-blur md:static md:px-6 md:py-4">
            <time className="text-xs font-semibold text-navy-700/65" dateTime={formattedDate}>
              {formattedDate}
            </time>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sand-200 bg-white text-xl leading-none text-navy-700 shadow-sm transition-colors hover:border-button-500 hover:bg-button-500 hover:text-brand-ink"
            >
              ×
            </button>
          </div>

          <div className="px-5 py-5 md:min-h-0 md:flex-1 md:overflow-y-auto md:px-8 md:py-7">
            <h2 className="font-serif text-xl font-bold leading-snug text-navy-950 md:text-2xl">
              {post.description.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-navy-700/85 md:mt-5 md:text-[0.9375rem]">
              {post.description.overview}
            </p>

            <div className="mt-5 rounded-2xl border border-sand-200 bg-sand-50/70 p-4 md:mt-7 md:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-700/70">主な内容</p>
              <ul className="mt-4 space-y-3">
                {post.description.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-navy-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-end border-t border-sand-200/80 bg-white/95 px-5 py-3.5 md:px-6 md:py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[linear-gradient(135deg,var(--color-button-400)_0%,var(--color-button-600)_100%)] px-6 py-2.5 text-sm font-semibold text-brand-ink shadow-[0_12px_26px_rgba(255,139,26,0.24)] transition hover:brightness-105"
            >
              閉じる
            </button>
          </div>
        </div>
      </article>
    </dialog>
  )
}
