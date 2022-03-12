import './App.css'
import React from 'react'
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
// import ChangelogScreen from './screens/ChangelogScreen/ChangelogScreen'

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/account' element={<AccountScreen />} />
          <Route path='/security' element={<SecurityScreen />} />
          <Route path='/appearance' element={<AppearanceScreen />} />
          <Route path='/notification' element={<NotificationScreen />} />
          <Route path='/courses' element={<CourseScreen />} />
          {/* <Route path='/changelog' element={<ChangelogScreen />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
