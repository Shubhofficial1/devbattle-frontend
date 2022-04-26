import {
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from '../constants/orderConstants'
import axios from 'axios'

export const checkoutOrder = (course) => async (dispatch, getState) => {
  let courseOrdered = course
  try {
    dispatch({ type: ORDER_PAY_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    function loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
          resolve(true)
        }
        script.onerror = () => {
          resolve(false)
        }
        document.body.appendChild(script)
      })
    }

    async function displayRazorpay() {
      const res = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js'
      )

      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }

      // creating a new order
      const result = await axios.post(
        '/api/orders/checkout',
        { amount: courseOrdered.price },
        config
      )

      if (!result) {
        alert('Server error. Are you online?')
        return
      }

      // Getting the order details back
      const { amount, id: order_id, currency } = result.data

      const {
        data: { key: razorpayKey },
      } = await axios.get('/api/orders/razorpay-key')
      const options = {
        key: razorpayKey,
        amount: amount.toString(),
        currency: currency,
        name: userInfo.name,
        description: userInfo.email,
        order_id: order_id,
        handler: async function (response) {
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
          const data = {
            amount: amount,
            course: course,
            paymentMethod: 'RAZORPAY',
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          }
          const result = await axios.post('/api/orders/pay', data, config)
          dispatch({ type: ORDER_PAY_SUCCESS, payload: result })
        },
        prefill: {
          name: userInfo.name,
          email: userInfo.email,
        },
        theme: {
          color: '#ff5f5f',
        },
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }

    displayRazorpay()
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const orderReset = () => (dispatch) => {
  dispatch({ type: ORDER_PAY_RESET })
}
