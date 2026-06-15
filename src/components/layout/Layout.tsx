import { GlobalHeader } from './GlobalHeader'
import { GlobalFooter } from './GlobalFooter'
import { FixedContactCTA } from './FixedContactCTA'
import { FreeChatbot } from '../shared/FreeChatbot'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <GlobalHeader />
      <main className="page-section overflow-x-clip">
        {children}
      </main>
      <GlobalFooter />
      <FreeChatbot />
      <FixedContactCTA />
    </div>
  )
}
