import express from 'express'
const router = express.Router()
import {
  getCourseById,
  getCourses,
  deleteCourse,
  createCourse,
  updateCourse,
} from '../controller/courseController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCourses).post(protect, admin, createCourse)
router
  .route('/:id')
  .get(getCourseById)
  .delete(protect, admin, deleteCourse)
  .put(protect, admin, updateCourse)

export default router
