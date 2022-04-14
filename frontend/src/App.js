import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router-dom'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import AccountScreen from './screens/AccountScreen/AccountScreen'
import SecurityScreen from './screens/SecurityScreen/SecurityScreen'
import AppearanceScreen from './screens/AppearanceScreen/AppearanceScreen'
import NotificationScreen from './screens/NotificationScreen/NotificationScreen'
import CourseScreen from './screens/CourseScreen/CourseScreen'
import PricingScreen from './screens/PricingScreen/PricingScreen'
import CourseDetailsScreen from './screens/CourseDetailsScreen/CourseDetailsScreen'
import LoginModal from './components/LoginModal/LoginModal'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className='app'>
      <Header show={show} setShow={setShow} />
      <main>
        <LoginModal
          onClose={() => {
            setShow(false)
          }}
          show={show}
          setShow={setShow}
        />
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/account' element={<AccountScreen />} />
          <Route path='/security' element={<SecurityScreen />} />
          <Route path='/appearance' element={<AppearanceScreen />} />
          <Route path='/notification' element={<NotificationScreen />} />
          <Route path='/courses' element={<CourseScreen />} />
          <Route path='/courses/:id' element={<CourseDetailsScreen />} />
          <Route path='/pricing' element={<PricingScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
