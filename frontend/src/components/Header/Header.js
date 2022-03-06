import React, { useState, useEffect } from 'react'
import './Header.css'
import { BsThreeDots } from 'react-icons/bs'
import { BsBrightnessHigh } from 'react-icons/bs'

const Header = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    )
    setTheme(localStorage.getItem('theme'))
  }, [])

  const saveTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }
  return (
    <header className='header_container noselect'>
      <div className='header_triplebar'>
        <BsThreeDots />
      </div>
      <div className='header_logo'>Dev</div>
      <div className='header_content'>
        <button>Products</button>
        <button>Content</button>
        <button>Team</button>
        <button>Purchase</button>
      </div>

      <div className='header_profile'>
        <BsBrightnessHigh className='header_darkmode' onClick={switchTheme} />
        Log In
      </div>
    </header>
  )
}

export default Header
