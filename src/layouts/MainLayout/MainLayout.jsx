import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/common/Navbar/Navbar'
import Footer from '../../components/common/Footer/Footer'
import ScrollToTop from '../../components/common/ScrollToTop/ScrollToTop'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main className="relative z-0">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
