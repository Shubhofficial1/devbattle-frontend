import React,{useEffect} from 'react'
import Account from '../../components/Account/Account'
import Details from '../../components/Details/Details'
import Settings from '../../components/Settings/Settings'
import './AccountScreen.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AccountScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      history('/')
    }
  }, [history, userInfo])
  return (
    <div className='account'>
      <div className='account_container'>
        <Settings />
        <Account />
        <Details />
      </div>
    </div>
  )
}

export default AccountScreen
