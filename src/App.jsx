import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import TechReligion from './pages/TechReligion'
import GoldenAge from './pages/GoldenAge'
import Generation from './pages/Generation'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-religion" element={<TechReligion />} />
          <Route path="/golden-age" element={<GoldenAge />} />
          <Route path="/generation" element={<Generation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
