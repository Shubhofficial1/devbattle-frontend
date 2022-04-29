import React, { useEffect } from 'react'
import './UsersScreen.css'
import { getUsersList } from '../../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'
import Message from '../../../components/Message/Message'
const UsersScreen = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useNavigate()

  const usersList = useSelector((state) => state.usersList)

  const { loading, error, users } = usersList

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUsersList())
    } else {
      history('/')
    }
  }, [dispatch, history, userInfo])

  return (
    <div className='users'>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          <table className='users__table'>
            <thead>
              <tr className='table__head'>
                <td className='table__id'>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>ROLE</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className='table__data noselect'>
                  <td className='table__id'>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin === false ? 'USER' : 'ADMIN'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default UsersScreen
