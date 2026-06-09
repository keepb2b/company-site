import { Outlet } from 'react-router-dom'
import { GlobalHeader } from './GlobalHeader'
import { GlobalFooter } from './GlobalFooter'
import { FixedContactCTA } from './FixedContactCTA'

export function Layout() {
  return (
    <div className="page-shell">
      <GlobalHeader />
      <main className="page-section overflow-x-clip">
        <Outlet />
      </main>
      <GlobalFooter />
      <FixedContactCTA />
    </div>
  )
}
