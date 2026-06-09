import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n'
import { LoadingProvider } from './context/LoadingContext'
import { Layout } from './components/layout/Layout'
import { PageFallback } from './components/layout/PageFallback'
import { ScrollToTop } from './components/layout/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const StrengthsPage = lazy(() => import('./pages/StrengthsPage').then((m) => ({ default: m.StrengthsPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })))
const FeePage = lazy(() => import('./pages/FeePage').then((m) => ({ default: m.FeePage })))
const FAQPage = lazy(() => import('./pages/FAQPage').then((m) => ({ default: m.FAQPage })))
const WorksPage = lazy(() => import('./pages/WorksPage').then((m) => ({ default: m.WorksPage })))
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })))
const StaffPage = lazy(() => import('./pages/StaffPage').then((m) => ({ default: m.StaffPage })))
const CompanyPage = lazy(() => import('./pages/CompanyPage').then((m) => ({ default: m.CompanyPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const ChatworkPage = lazy(() => import('./pages/ChatworkPage').then((m) => ({ default: m.ChatworkPage })))

export default function App() {
  return (
    <LanguageProvider>
      <LoadingProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="strengths" element={<StrengthsPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="fee" element={<FeePage />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="works" element={<WorksPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="staff" element={<StaffPage />} />
                <Route path="company" element={<CompanyPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="chatwork" element={<ChatworkPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LoadingProvider>
    </LanguageProvider>
  )
}
