import React, { useEffect } from 'react'
import './OrdersScreen.scss'
import Details from '../../../components/Details/Details'
import Orders from '../../../components/Orders/Orders'
import Settings from '../../../components/Settings/Settings'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const OrdersScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      history('/')
    }
  }, [history, userInfo])

  return (
    <div className='orders'>
      <div className='orders_container'>
        <Settings />
        <Orders />
        <Details />
      </div>
    </div>
  )
}

export default OrdersScreen
