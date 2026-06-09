import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { useI18n } from '../i18n'

export function ChatworkPage() {
  const { dict } = useI18n()

  return (
    <>
      <PageHero
        en="ChatWork"
        ja="ChatWork"
        breadcrumbs={[{ label: dict.common.chatwork || 'ChatWork' }]}
      />
      <section className="section-band-white section-band-py">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-2xl border border-sand-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-navy-900 md:text-3xl">
                {dict.chatwork?.title || 'ChatWork Invitation'}
              </h1>
              <p className="mt-4 text-navy-700/80">
                {dict.chatwork?.subtitle || 'ChatWork offers simple, convenient business messaging.'}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href="https://www.chatwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:bg-coral-600 hover:-translate-y-0.5"
              >
                <span className="whitespace-nowrap">
                  {dict.chatwork?.signup || 'New Member Sign-up (Free)'}
                </span>
              </a>
              <p className="text-sm text-navy-700/60">
                {dict.chatwork?.alreadySignedUp || 'If you have already signed up'}
              </p>
              <a
                href="https://www.chatwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-coral-500 hover:underline"
              >
                {dict.chatwork?.login || 'Log in here'}
              </a>
            </div>

            <div className="mt-12 border-t border-sand-200 pt-8">
              <h2 className="text-xl font-semibold text-navy-900">
                {dict.chatwork?.publicProfile || 'Public Profile'}
              </h2>
              <div className="mt-6 flex items-start gap-4">
                <div className="relative shrink-0">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=c45c48&color=fff&size=128&bold=true"
                    alt="Staff"
                    className="h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-white"
                  />
                  <div className="absolute inset-0 rounded-full ring-4 ring-coral-500/30" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy-900">
                    {dict.chatwork?.name || 'NIPPON SYSTEMS'}
                  </p>
                  <p className="text-sm text-navy-700/60">
                    ID: pikachu107
                  </p>
                </div>
              </div>

              <h3 className="mt-8 text-lg font-semibold text-navy-900">
                {dict.chatwork?.basicInfo || 'Basic Information'}
              </h3>
              <dl className="mt-4 space-y-3 text-sm text-navy-700">
                <div className="flex flex-col sm:flex-row">
                  <dt className="w-full sm:w-40 font-medium text-navy-900">
                    {dict.chatwork?.organization || 'Organization name:'}
                  </dt>
                  <dd className="text-navy-700/80">
                    {dict.chatwork?.orgName || 'NIPPON SYSTEMS'}
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="w-full sm:w-40 font-medium text-navy-900">
                    {dict.chatwork?.urlLabel || 'URL:'}
                  </dt>
                  <dd>
                    <a
                      href="https://nippon-systems.example"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coral-500 hover:underline"
                    >
                      https://nippon-systems.example
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="w-full sm:w-40 font-medium text-navy-900">
                    {dict.chatwork?.addressLabel || 'Address:'}
                  </dt>
                  <dd className="text-navy-700/80">
                    {dict.chatwork?.address || '〒100-0001 東京都千代田区千代田 1-1-1'}
                  </dd>
                </div>
              </dl>

              <h3 className="mt-8 text-lg font-semibold text-navy-900">
                {dict.chatwork?.bio || 'Bio'}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
                {dict.chatwork?.bioText ||
                  'We provide comprehensive IT solutions including web development, system integration, and digital transformation services.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
