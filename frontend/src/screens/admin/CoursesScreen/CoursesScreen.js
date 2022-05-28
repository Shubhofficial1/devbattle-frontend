import React, { useEffect } from 'react'
import './CoursesScreen.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'
import Message from '../../../components/Message/Message'
import { listCourses } from '../../../actions/coursesActions'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { deleteCourse } from '../../../actions/coursesActions'

const CoursesScreen = () => {
  const dispatch = useDispatch()
  const history = useNavigate()

  const coursesList = useSelector((state) => state.coursesList)

  const { loading, courses, error } = coursesList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const courseDelete = useSelector((state) => state.courseDelete)

  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = courseDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listCourses())
    } else {
      history('/')
    }
  }, [history, userInfo, dispatch, successDelete])

  const handleCreateCourse = (e) => {
    e.preventDefault()
    history('/admin/create-course')
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteCourse(id))
    }
  }

  return (
    <div className='courses1'>
      <div className='courses__heading__row'>
        <h1>Courses</h1>
        <button onClick={handleCreateCourse}>+ ADD COURSE</button>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          {loadingDelete && <Loader />}
          {errorDelete && <Message error={errorDelete} />}
          {successDelete && (
            <div className='success__container'>
              <p>COURSE DELETED SUCCESSFULLY</p>
            </div>
          )}
          <table className='courses__table'>
            <thead>
              <tr className='table__head'>
                <td className='table__id'>ID</td>
                <td>NAME</td>
                <td>PRICE</td>
                <td className='table__category'>CATEGORY</td>
                <td className='table__rating'>RATING</td>
                <td className='table_language'>LANGUAGE</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course) => (
                <tr className='table__data' key={course._id}>
                  <td className='table__id'>{course._id}</td>
                  <td>{course.name}</td>
                  <td>{course.price}</td>
                  <td className='table__category'>{course.category}</td>
                  <td className='table__rating'>{course.rating}</td>
                  <td className='table_language'>{course.language}</td>
                  <td className='course__action'>
                    <AiOutlineDelete
                      className='course__delete__button'
                      onClick={() => handleDelete(course._id)}
                    />
                    <BiEdit className='course__edit__button' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default CoursesScreen
