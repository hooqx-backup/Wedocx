import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import DepartmentPage from '../pages/Department/DepartmentPage'
import ComingSoonPage from '../pages/ComingSoon/ComingSoonPage'
import NotFound from '../pages/NotFound/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/department/:deptId" element={<DepartmentPage />} />
      </Route>
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
