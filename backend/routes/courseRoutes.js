import express from 'express'
const router = express.Router()
import { getCourseById, getCourses } from '../controller/courseController.js'

router.route('/').get(getCourses)
router.route('/:id').get(getCourseById)

export default router
