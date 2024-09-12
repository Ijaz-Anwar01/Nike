import './App.css'
import Featured from "./Components/Featured/Featured"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Navbar2 from "./Components/Navbar2/Navbar2"
import ProductPage from "./Components/Pages/Product-page/ProductPage.jsx"
import Spotlight from "./Components/Spotlight/Spotlight"
import Topbar from "./Components/TopBar/Topbar"
import Trending from "./Components/Trending/Trending"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <Navbar />
        <Navbar2 />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Featured />
              <Spotlight />
              <Trending />
            </>
          } />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
