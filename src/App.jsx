import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import Loader from './components/common/Loader/Loader'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Router>
        <ScrollToTop />
        <AppRouter />
      </Router>
    </>
  )
}
