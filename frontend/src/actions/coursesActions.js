import axios from 'axios'
import {
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
  COURSE_DELETE_FAIL,
  COURSE_DELETE_REQUEST,
  COURSE_DELETE_SUCCESS,
  COURSE_DETAILS_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
} from '../constants/coursesConstants'

export const listCourses = () => async (dispatch) => {
  try {
    dispatch({ type: COURSES_LIST_REQUEST })
    const { data } = await axios.get(`/api/courses`)
    dispatch({
      type: COURSES_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COURSES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/courses/${id}`)
    dispatch({
      type: COURSE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COURSE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteCourse = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/courses/${id}`, config)
    dispatch({
      type: COURSE_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: COURSE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
