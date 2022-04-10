import {
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
  COURSES_LIST_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
} from '../constants/coursesConstants'

export const coursesListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSES_LIST_REQUEST:
      return {
        loading: true,
        courses: [],
      }
    case COURSES_LIST_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
      }
    case COURSES_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const courseDetailsReducer = (
  state = { course: { stacks: [], reviews: [], notes: [], features: [] } },
  action
) => {
  switch (action.type) {
    case COURSE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      }
    case COURSE_DETAILS_SUCCESS:
      return {
        loading: false,
        course: action.payload,
      }
    case COURSE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
