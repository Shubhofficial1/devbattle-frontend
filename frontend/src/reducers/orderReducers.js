import {
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDERS_DETAIL_REQUEST,
  ORDERS_DETAIL_SUCCESS,
  ORDERS_DETAIL_FAIL,
  ORDERS_DETAIL_RESET,
  ORDERS_LIST_REQUEST,
  ORDERS_LIST_SUCCESS,
  ORDERS_LIST_FAIL,
  ORDERS_LIST_RESET,
} from '../constants/orderConstants'

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true }
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      }
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}

export const ordersDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDERS_DETAIL_REQUEST:
      return { loading: true }
    case ORDERS_DETAIL_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      }
    case ORDERS_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDERS_DETAIL_RESET:
      return {}
    default:
      return state
  }
}

export const ordersListReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDERS_LIST_REQUEST:
      return { loading: true }
    case ORDERS_LIST_SUCCESS:
      return {
        loading: false,
        ordersList: action.payload,
      }
    case ORDERS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDERS_LIST_RESET:
      return {}
    default:
      return state
  }
}
