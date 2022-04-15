import React, { useState, useEffect } from 'react'
import './Header.css'
import { BsThreeDots } from 'react-icons/bs'
import { BsBrightnessHigh } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
const Header = ({ show, setShow }) => {
  const [theme, setTheme] = useState('light')

  const history = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    )
    setTheme(localStorage.getItem('theme'))
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

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

  const handleCourses = () => {
    history('/courses')
  }

  const handleTeam = () => {
    history('/team')
  }

  const handleBlogs = () => {
    history('/blogs')
  }

  const handlePricing = () => {
    history('/pricing')
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
          <button onClick={handleCourses}>Courses</button>
          <button onClick={handleTeam}>Team</button>
          <button onClick={handleBlogs}>Blogs</button>
          <button onClick={handlePricing}>Pricing</button>
        </div>

        <div className='header_profile'>
          <BsBrightnessHigh className='header_darkmode' onClick={switchTheme} />

          {userInfo ? (
            <>
              <div className='header_profile_img' onClick={handleClick}>
                <p>{userInfo.name[0]}</p>
              </div>
              <button className='logout' onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button
              className='header__login__button'
              onClick={() => {
                setShow(true)
              }}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
