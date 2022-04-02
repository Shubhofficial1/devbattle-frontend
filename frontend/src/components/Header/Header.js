import React, { useState, useEffect } from 'react'
import './Header.css'
import { BsThreeDots } from 'react-icons/bs'
import { BsBrightnessHigh } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [theme, setTheme] = useState('light')
  const [loggedIn, setLoggedIn] = useState(true)

  const history = useNavigate()

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    )
    setTheme(localStorage.getItem('theme'))
  }, [])

  const handleClick = () => {
    history('/profile')
  }
  const handleClickToHome = () => {
    history('/')
  }

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
    <header>
      <div className='header_container noselect'>
        <div className='header_triplebar'>
          <BsThreeDots />
        </div>
        <div className='header_logo' onClick={handleClickToHome}>
          Dev
        </div>
        <div className='header_content'>
          <button>Products</button>
          <button>Content</button>
          <button>Team</button>
          <button>Purchase</button>
        </div>

        <div className='header_profile'>
          <BsBrightnessHigh className='header_darkmode' onClick={switchTheme} />

          {loggedIn ? (
            <div className='header_profile_img' onClick={handleClick}></div>
          ) : (
            <>Log In</>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
