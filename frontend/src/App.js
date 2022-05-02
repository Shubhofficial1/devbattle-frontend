import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router-dom'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import AccountScreen from './screens/AccountScreen/AccountScreen'
import OrdersScreen from './screens/OrdersScreen/OrdersScreen'
import AppearanceScreen from './screens/AppearanceScreen/AppearanceScreen'
import NotificationScreen from './screens/NotificationScreen/NotificationScreen'
import CourseScreen from './screens/CourseScreen/CourseScreen'
import PricingScreen from './screens/PricingScreen/PricingScreen'
import CourseDetailsScreen from './screens/CourseDetailsScreen/CourseDetailsScreen'
import LoginModal from './components/LoginModal/LoginModal'
import UsersScreen from './screens/admin/UsersScreen/UsersScreen'
import UserEditScreen from './screens/admin/UserEditScreen/UserEditScreen'
import CoursesScreen from './screens/admin/CoursesScreen/CoursesScreen'
import CourseCreateScreen from './screens/admin/CourseCreateScreen/CourseCreateScreen'

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
          <Route path='/orders' element={<OrdersScreen />} />
          <Route path='/appearance' element={<AppearanceScreen />} />
          <Route path='/notification' element={<NotificationScreen />} />
          <Route path='/courses' element={<CourseScreen />} />
          <Route path='/courses/:id' element={<CourseDetailsScreen />} />
          <Route path='/pricing' element={<PricingScreen />} />
          <Route path='/admin/users' element={<UsersScreen />} />
          <Route path='/admin/users/edit/:id' element={<UserEditScreen />} />
          <Route path='/admin/courses' element={<CoursesScreen />} />
          <Route path='/admin/create-course' element={<CourseCreateScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
