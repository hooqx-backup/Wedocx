import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Concept from './components/Concept';
import Spaces from './components/Spaces';
import Benefits from './components/Benefits';
import Amenities from './components/Amenities';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import ComingSoonPage from './pages/ComingSoonPage';
import DepartmentPage from './pages/DepartmentPage';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Concept />
      <Spaces />
      <Benefits />
      <Amenities />
      <Process />
      <Testimonials />
      {/* <Pricing /> */}
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <ScrollToTop />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/department/:deptId" element={<DepartmentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

