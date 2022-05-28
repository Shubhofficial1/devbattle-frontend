import React, { useEffect } from 'react'
import './Orders.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOrdersDetails } from '../../actions/orderActions'
import Loader from '../Loader/Loader'
import Message from '../Message/Message'
const Orders = () => {
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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          {orders &&
            orders?.map((order) => (
              <div className='order__container' key={order._id}>
                <div className='order__container__left'>
                  <div className='order__image'></div>
                </div>
                <div className='order__container__right'>
                  <div className='order__details'>
                    <h1>COURSE NAME : {order?.course.name}</h1>
                    <p>DESCRIPTION : {order?.course.description}</p>
                    <p>CATEGORY : {order?.course.category}</p>
                    <p>TOTAL : {order?.paidPrice}</p>
                    <p>PAID AT : {order?.paidAt}</p>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default Orders
