import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import EventsPage from "./pages/EventsPage"
import Footer from "./components/Footer"
import EventDetails  from './pages/EventDetails'


function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
