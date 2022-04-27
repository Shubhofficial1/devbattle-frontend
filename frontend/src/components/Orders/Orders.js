import React, { useEffect } from 'react'
import './Orders.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOrdersDetails } from '../../actions/orderActions'
const Security = () => {
  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  const history = useNavigate()

  const dispatch = useDispatch()

  const ordersDetail = useSelector((state) => state.ordersDetail)

  const { loading, orders, error } = ordersDetail

  useEffect(() => {
    if (!userInfo) {
      history('/')
    } else {
      dispatch(getOrdersDetails())
    }
  }, [history, userInfo, dispatch])
  return (
    <div className='orders_content'>
      <h1>Orders</h1>
      {loading ? <h1>loading</h1> : error ? <h1>{error}</h1> : <>Orders</>}
    </div>
  )
}

export default Security
