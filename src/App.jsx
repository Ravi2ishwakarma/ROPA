import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Trust from './components/Trust'
import HowItWorks from './components/HowItWorks'
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CityTour from "./components/CityTour";
import CustomTour from "./pages/CustomTour";
import SelectCaptain from "./pages/SelectCaptain";
import TourPayment from "./pages/TourPayment";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Trust />
              <HowItWorks />
            </>
          }
        />
        <Route path="/tour" element={<CityTour/>}/>
        <Route path="/customtour" element={<CustomTour/>}/>
        <Route path="/tourcaptain" element={<SelectCaptain/>}/>
        <Route path="/tour-payment" element={<TourPayment/>}/>
      </Routes>
      <Footer/>
    </>

  )
}

export default App
