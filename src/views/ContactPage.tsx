import { useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { useI18n } from '../i18n'

export function ContactPage() {
  const { dict } = useI18n()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  return (
    <>
      <PageHero
        en={dict.contact.page.en}
        ja={dict.contact.page.ja}
        breadcrumbs={[{ label: dict.contact.page.ja }]}
      />
      <section className="contact-form-section">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="contact-form-card">
            <form
              className="contact-form"
              onSubmit={async (e) => {
                e.preventDefault()
                setStatus('sending')

                const form = e.currentTarget
                const formData = new FormData(form)
                const payload = Object.fromEntries(formData.entries())

                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                  })

                  if (!res.ok) {
                    const error = await res.json().catch(() => null)
                    console.error('Contact form failed', error)
                    throw new Error('Failed to send contact form')
                  }

                  setStatus('success')
                  form.reset()
                } catch {
                  setStatus('error')
                }
              }}
            >
              <div className="contact-form-row">
                <label htmlFor="company">
                  {dict.contact.company}
                  <span>*</span>
                </label>
                <input id="company" name="company" type="text" required placeholder="御社名を入力してください" />
              </div>

              <div className="contact-form-row">
                <label htmlFor="name">
                  {dict.contact.name}
                  <span>*</span>
                </label>
                <input id="name" name="name" type="text" required placeholder="担当者を入力してください" />
              </div>

              <div className="contact-form-row">
                <label htmlFor="email">
                  {dict.contact.email}
                  <span>*</span>
                </label>
                <input id="email" name="email" type="email" required placeholder="メールアドレスを入力して下さい" />
              </div>

              <div className="contact-form-row">
                <label htmlFor="phone">
                  電話番号
                  <span>*</span>
                </label>
                <input id="phone" name="phone" type="tel" required placeholder="電話番号を入力して下さい" />
              </div>

              <div className="contact-form-row contact-form-row--textarea">
                <label htmlFor="message">
                  {dict.contact.message}
                  <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  placeholder={'こちらにご相談やお問い合わせ内容をご記入ください。\n\n・希望納期\n・予算感\n・デザインファイルURL\nなどもありましたら、こちらにご記入ください。'}
                />
              </div>

              <div className="contact-form-divider" />

              <div className="contact-form-note">
                <p>必要事項をご記入のうえ、「内容を確認する」ボタンを押してください。</p>
                <p>
                  <a href="/privacy">プライバシーポリシー</a>
                  の内容をご参照いただき、ご同意いただいた上でお問い合わせください
                </p>
              </div>

              <label className="contact-form-consent">
                <input type="checkbox" required />
                <span>個人情報の取扱いに同意する</span>
              </label>

              <div className="contact-form-action">
                <button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? '送信中...' : '入力内容を送信する'}
                </button>
                <span aria-hidden />
              </div>
              {status === 'success' && (
                <p className="text-center text-sm font-bold text-navy-800">{dict.contact.success}</p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-bold text-navy-900">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
            </form>
          </div>

          <div className="contact-map-card">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=%E3%80%92171-0031%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B1%8A%E5%B3%B6%E5%8C%BA%E7%9B%AE%E7%99%BD4-13-3%20%E5%A4%A7%E5%92%8C%E3%83%93%E3%83%AB2F&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
