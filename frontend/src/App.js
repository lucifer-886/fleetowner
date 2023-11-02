import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Signin from './Components/auth/Signin'
import Signup from './Components/auth/Signup'
import Complaint from './Components/Complaint'
import DriverList from './Components/DriverList'
import Driver1 from './Components/Driver1'
import Driver2 from './Components/Driver2'
import TodaySchedule from './Components/Owner/TodaySchedule'
import BusDrivers from './Components/Owner/BusDrivers'
import Profile from './Components/Owner/Profile'
function App(){
  return(
    <>
   <BrowserRouter>
   
  <Navbar></Navbar>
   
   <Routes>
    <Route path="/"element={<Home />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/login" element={<Signin />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/complaint" element={<Complaint />}></Route>
    <Route path="/driverlist" element={<DriverList />}></Route>
    <Route path="/driver1" element={<Driver1 />}></Route>
    <Route path="/driver2" element={<Driver2 />}></Route>
    <Route path="/toda" element={<TodaySchedule />}></Route>
    <Route path="/dr" element={<BusDrivers />}></Route>
    <Route path="/pr" element={<Profile />}></Route>

    
    
      </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App