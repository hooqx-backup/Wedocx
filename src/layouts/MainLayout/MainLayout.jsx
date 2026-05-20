<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/common/Navbar/Navbar'
import Footer from '../../components/common/Footer/Footer'

export default function MainLayout() {
=======
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

>>>>>>> pritam
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
<<<<<<< HEAD
=======
      <ScrollToTop />
>>>>>>> pritam
    </>
  )
}
