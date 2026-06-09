import { PageHero } from '../components/layout/PageHero'
import { useI18n } from '../i18n'

export function ContactPage() {
  const { dict } = useI18n()

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
              onSubmit={(e) => {
                e.preventDefault()
                alert(dict.contact.success)
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
                <button type="submit">入力内容を確認する</button>
                <span aria-hidden />
              </div>
            </form>
          </div>

          <div className="contact-map-card">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=1-1-1%20Chiyoda%2C%20Chiyoda-ku%2C%20Tokyo%20100-0001&output=embed"
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
