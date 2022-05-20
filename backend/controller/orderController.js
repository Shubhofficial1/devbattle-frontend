import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'
import Razorpay from 'razorpay'

// @desc    Checkout using Stripe
// @route   POST /api/orders/checkout
// @access  Public

const checkoutOrder = asyncHandler(async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    })

    const options = {
      amount: req.body.amount,
      currency: 'INR',
    }

    const order = await instance.orders.create(options)

    if (!order) return res.status(500).send('Some error occured')
    res.json(order)
  } catch (error) {
    res.status(500).send(error)
  }
})

// @desc    Save Order in Database
// @route   POST /api/orders/pay
// @access  Protected

const payOrder = asyncHandler(async (req, res) => {
  try {
    const {
      amount,
      course,
      paymentMethod,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body

    const alreadyEnrolled = await Order.find({ user: req.user._id })
    const found = alreadyEnrolled.find((c) => c.course == course._id)

    if (found) {
      res.status(409)
      throw new Error('Already Enrolled')
    }

    const newOrder = Order({
      user: req.user._id,
      course: course._id,
      paymentMethod: paymentMethod,
      paymentResult: {
        id: razorpayPaymentId,
        orderId: razorpayOrderId,
        signature: razorpaySignature,
        update_time: Date.now(),
        email_address: req.user.email,
      },
      paidPrice: amount,
      isPaid: true,
      paidAt: Date.now(),
    })

    const payment = await newOrder.save()
    res.status(200).json(payment)
  } catch (error) {
    res.status(500).send(error)
  }
})

// @desc    Get razorpay key
// @route   GET /api/orders/razorpay-key
// @access  Public

const getRazorpayKey = asyncHandler(async (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID })
})

// @desc    Get Order By Id
// @route   GET /api/orders/:id
// @access  Private

const getOrdersById = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    'course',
    'name imageUrl description category price'
  )
  res.status(200).json(orders)
})

const getOrdersList = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('course')
  let ordersList = []
  const order = orders.map((order) => {
    ordersList.push(order.course._id)
  })
  res.status(200).json(ordersList)
})

export { checkoutOrder, payOrder, getRazorpayKey, getOrdersById, getOrdersList }
