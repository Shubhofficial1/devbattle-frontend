import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  courseDetailsReducer,
  coursesListReducer,
} from './reducers/coursesReducers'

const reducer = combineReducers({
  coursesList: coursesListReducer,
  courseDetails: courseDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
