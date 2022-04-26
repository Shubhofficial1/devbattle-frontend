import express from 'express'
const router = express.Router()
import {
  checkoutOrder,
  getOrders,
  getRazorpayKey,
  payOrder,
} from '../controller/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getOrders)
router.route('/pay').post(protect, payOrder)
router.route('/checkout').post(checkoutOrder)
router.route('/razorpay-key').get(getRazorpayKey)

export default router
