import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import EventsPage from "./pages/EventsPage"
import Footer from "./components/Footer"
import EventDetails  from './pages/EventDetails'
import ContactUs from "./pages/ContactUs"


function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/contactUs" element={<ContactUs /> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
