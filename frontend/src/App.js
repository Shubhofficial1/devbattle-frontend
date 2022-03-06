import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
