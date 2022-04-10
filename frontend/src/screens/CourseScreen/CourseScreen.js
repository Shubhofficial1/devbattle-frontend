import React, { useEffect } from 'react'
import './CourseScreen.css'
import Rating from '../../components/Rating/Rating'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listCourses } from '../../actions/coursesActions'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
const CourseScreen = () => {
  const dispatch = useDispatch()

  const coursesList = useSelector((state) => state.coursesList)

  const { loading, courses, error } = coursesList

  useEffect(() => {
    dispatch(listCourses())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <div className='course'>
          <h1>Explore Best Courses Here</h1>
          <p>Learn Anything here with best possible guidance</p>
          <div className='course__grid'>
            {courses.map((course) => (
              <Link key={course._id} to={`/courses/${course._id}`}>
                <div className='course__card noselect'>
                  <div className='course_img'></div>
                  <h1>{course.name}</h1>
                  <p>{course.description}</p>
                  <Rating
                    value={course.rating}
                    text={`${course.numReviews} reviews`}
                  />
                  <div className='course__price'>
                    <div className='course__stacks'>
                      {course.stacks.map((stack) => (
                        <div key={stack.name} className='course__stack'>
                          <img src={stack.imageUrl} alt={stack.name}></img>
                        </div>
                      ))}
                    </div>
                    <h3>₹{course.price}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default CourseScreen
