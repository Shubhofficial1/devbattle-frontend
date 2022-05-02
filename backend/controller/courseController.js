import Course from '../models/courseModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Fetch all courses
// @route   GET /api/courses
// @access  Public

const getCourses = async (req, res) => {
  const courses = await Course.find({})
  res.json(courses)
}

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public

const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id).populate(
    'user',
    'name bio'
  )

  if (course) {
    res.json(course)
  } else {
    res.status(404)
    throw new Error('Course not found')
  }
})

// @desc    Delete single course
// @route   DELETE /api/courses/:id
// @access  Private/Admin

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)
  if (course) {
    await course.remove()
    res.json({ message: 'Course Deleted' })
  } else {
    res.status(404)
    throw new Error('Course Not Found')
  }
})

// @desc    Create a Course
// @route   PUT /api/courses
// @access  Private/Admin

const createCourse = asyncHandler(async (req, res) => {
  const { name, imageUrl, videoUrl, description, category, price, language } =
    req.body
  const course = new Course({
    user: req.user._id,
    name,
    imageUrl,
    videoUrl,
    description,
    category,
    price,
    language,
  })

  await course.save()
  res.status(201).json({ message: 'Course Created Successfully' })
})

const updateCourse = asyncHandler(async (req, res) => {
  const { name, imageUrl, videoUrl, description, category, price, language } =
    req.body

  const course = await Course.findById(req.params.id)

  if (course) {
    course.name = name
    course.imageUrl = imageUrl
    course.videoUrl = videoUrl
    course.description = description
    course.category = category
    course.price = price
    course.language = language
    const updateCourse = await course.save()
    res.json(updateCourse)
  } else {
    res.status(404)
    throw new Error('Course Not Found')
  }
})

export { getCourses, getCourseById, deleteCourse, createCourse, updateCourse }
