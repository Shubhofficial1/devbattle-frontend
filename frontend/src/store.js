import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  courseDetailsReducer,
  coursesListReducer,
  courseDeleteReducer,
  courseCreateReducer,
} from './reducers/coursesReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  usersListReducer,
  userDeleteReducer,
  userDetailsAdminReducer,
  userUpdateReducer,
} from './reducers/userReducers'

import {
  orderPayReducer,
  ordersDetailReducer,
  ordersListReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
  coursesList: coursesListReducer,
  courseDetails: courseDetailsReducer,
  courseDelete: courseDeleteReducer,
  courseCreate: courseCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderPay: orderPayReducer,
  ordersDetail: ordersDetailReducer,
  ordersList: ordersListReducer,
  usersList: usersListReducer,
  userDelete: userDeleteReducer,
  userDetailsAdmin: userDetailsAdminReducer,
  userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
