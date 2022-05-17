import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/public/HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router-dom'
import ProfileScreen from './screens/private/ProfileScreen/ProfileScreen'
import AccountScreen from './screens/private/AccountScreen/AccountScreen'
import OrdersScreen from './screens/private/OrdersScreen/OrdersScreen'
import AppearanceScreen from './screens/private/AppearanceScreen/AppearanceScreen'
import NotificationScreen from './screens/private/NotificationScreen/NotificationScreen'
import CourseScreen from './screens/public/CourseScreen/CourseScreen'
import PricingScreen from './screens/public/PricingScreen/PricingScreen'
import CourseDetailsScreen from './screens/public/CourseDetailsScreen/CourseDetailsScreen'
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
          {/* public --done */}
          <Route path='/' exact element={<HomeScreen />} />
          {/* private --done */}
          <Route path='/profile' element={<ProfileScreen />} />
          {/* private --done*/}
          <Route path='/account' element={<AccountScreen />} />
          {/* private --done*/}
          <Route path='/orders' element={<OrdersScreen />} />
          {/* private */}
          <Route path='/appearance' element={<AppearanceScreen />} />
          {/* private */}
          <Route path='/notification' element={<NotificationScreen />} />
          {/* public --done*/}
          <Route path='/courses' element={<CourseScreen />} />
          {/* public --done*/}
          <Route path='/courses/:id' element={<CourseDetailsScreen />} />
          {/* public */}
          <Route path='/pricing' element={<PricingScreen />} />
          {/* admin --done */}
          <Route path='/admin/users' element={<UsersScreen />} />
          {/* admin --done*/}
          <Route path='/admin/users/edit/:id' element={<UserEditScreen />} />
          {/* admin --done*/}
          <Route path='/admin/courses' element={<CoursesScreen />} />
          {/* admin --done*/}
          <Route path='/admin/create-course' element={<CourseCreateScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
