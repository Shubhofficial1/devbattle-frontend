import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import courses from './data/courses.js'
import User from './models/userModel.js'
import Courses from './models/courseModel.js'
import Order from './models/orderModel.js'
import connectDb from './config/db.js'

dotenv.config()

connectDb()

const importData = async () => {
  try {
    await User.deleteMany()
    await Courses.deleteMany()
    await Order.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleCourses = courses.map((course) => {
      return {
        ...course,
        user: adminUser,
      }
    })

    await Courses.insertMany(sampleCourses)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Courses.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
