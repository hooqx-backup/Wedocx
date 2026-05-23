import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Contact from '../pages/Contact/Contact'
import ClinicSpaces from '../pages/ClinicSpaces/ClinicSpaces'
import ShiftPlans from '../pages/ShiftPlans/ShiftPlans'
import Careers from '../pages/Careers/Careers'
import Press from '../pages/Press/Press'
import DepartmentPage from '../pages/Department/DepartmentPage'
import ComingSoonPage from '../pages/ComingSoon/ComingSoonPage'
import NotFound from '../pages/NotFound/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clinic-spaces" element={<ClinicSpaces />} />
        <Route path="/shift-plans" element={<ShiftPlans />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/department/:deptId" element={<DepartmentPage />} />
      </Route>
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

// import { Routes, Route } from 'react-router-dom'
// import MainLayout from '../layouts/MainLayout/MainLayout'
// import Home from '../pages/Home/Home'
// import Services from '../pages/Services/Services'
// import DepartmentPage from '../pages/Department/DepartmentPage'
// import ComingSoonPage from '../pages/ComingSoon/ComingSoonPage'
// import NotFound from '../pages/NotFound/NotFound'

// export default function AppRouter() {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/department/:deptId" element={<DepartmentPage />} />
//       </Route>
//       <Route path="/coming-soon" element={<ComingSoonPage />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   )
// }