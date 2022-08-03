import React, { useState, useEffect } from 'react'
import './Header.scss'
import { BsThreeDots } from 'react-icons/bs'
import { BsBrightnessHigh } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import {
  USERS_LIST_RESET,
  USER_DETAILS_ADMIN_RESET,
  USER_DETAILS_RESET,
  USER_REGISTER_RESET,
} from '../../constants/userConstants'
import {
  ORDERS_DETAIL_RESET,
  ORDERS_LIST_RESET,
  ORDER_PAY_RESET,
} from '../../constants/orderConstants'
import { COURSE_CREATE_RESET } from '../../constants/coursesConstants'

const Header = ({ show, setShow }) => {
  // const [showNav, setShowNav] = useState(true)
  // const controlNav = () => {
  //   if (window.scrollY > 250) {
  //     setShowNav(true)
  //   } else {
  //     setShowNav(false)
  //   }
  // }
  const [theme, setTheme] = useState('dark')

  const history = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    // document.documentElement.setAttribute(
    //   'data-theme',
    //   localStorage.getItem('theme')
    // )
    // setTheme(localStorage.getItem('theme'))
    // window.addEventListener('scroll', controlNav)
    // return () => {
    //   window.removeEventListener('scroll', controlNav)
    // }
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: ORDER_PAY_RESET })
    dispatch({ type: ORDERS_DETAIL_RESET })
    dispatch({ type: ORDERS_LIST_RESET })
    dispatch({ type: USERS_LIST_RESET })
    dispatch({ type: USER_REGISTER_RESET })
    dispatch({ type: USER_DETAILS_ADMIN_RESET })
    dispatch({ type: COURSE_CREATE_RESET })
  }

  const handleClick = () => {
    history('/profile')
  }
  const handleClickToHome = () => {
    history('/')
  }

  // const saveTheme = (theme) => {
  //   setTheme(theme)
  //   localStorage.setItem('theme', theme)
  //   document.documentElement.setAttribute('data-theme', theme)
  // }

  // const switchTheme = () => {
  //   if (theme === 'light') {
  //     saveTheme('dark')
  //   } else {
  //     saveTheme('light')
  //   }
  // }

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
      <div className={`header_container noselect `}>
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
          {/* <BsBrightnessHigh className='header_darkmode' onClick={switchTheme} /> */}
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
