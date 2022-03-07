import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router-dom'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
