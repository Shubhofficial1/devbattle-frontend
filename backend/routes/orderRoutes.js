import express from 'express'
const router = express.Router()
import {
  checkoutOrder,
  getRazorpayKey,
  payOrder,
  getOrdersById,
} from '../controller/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(protect, getOrdersById)
router.route('/pay').post(protect, payOrder)
router.route('/checkout').post(checkoutOrder)
router.route('/razorpay-key').get(getRazorpayKey)

export default router
