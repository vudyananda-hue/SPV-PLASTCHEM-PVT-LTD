import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Industries from './pages/Industries'
import Contact from './pages/Contact'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import SmoothScroll from './components/layout/SmoothScroll'
import Preloader from './components/common/Preloader'

export default function App() {
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="industries" element={<Industries />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </>
  )
}

