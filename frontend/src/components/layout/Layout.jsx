import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from '../common/BackToTop'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const isAdminPage = pathname.startsWith('/admin')

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <BackToTop />}
    </div>
  )
}
