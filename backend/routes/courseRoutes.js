import express from 'express'
const router = express.Router()
import {
  getCourseById,
  getCourses,
  deleteCourse,
} from '../controller/courseController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCourses)
router.route('/:id').get(getCourseById).delete(protect, admin, deleteCourse)

export default router
