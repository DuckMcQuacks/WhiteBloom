import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./assets/layouts/mainLayout"
import Home from "./assets/pages/Home"
import WomensHairdresser from "./assets/pages/WomensHairdresser"
import Barber from "./assets/pages/Barber"
import FootCare from "./assets/pages/FootCare"
import About from "./assets/pages/About"
import Contact from "./assets/pages/Contact"
import Appointment from "./assets/pages/Appointment"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/noi-fodraszat" element={<WomensHairdresser />} />
          <Route path="/barber" element={<Barber />} />
          <Route path="/labapolas" element={<FootCare />} />
          <Route path="/rolunk" element={<About />} />
          <Route path="/kapcsolat" element={<Contact />} />
          <Route path="/idopontfoglalas" element={<Appointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
