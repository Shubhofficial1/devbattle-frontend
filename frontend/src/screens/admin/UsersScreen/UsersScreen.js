import React, { useEffect } from 'react'
import './UsersScreen.scss'
import { deleteUserById, getUsersList } from '../../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'
import Message from '../../../components/Message/Message'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
const UsersScreen = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useNavigate()

  const usersList = useSelector((state) => state.usersList)

  const { loading, error, users } = usersList

  const userDelete = useSelector((state) => state.userDelete)

  const { success } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUsersList())
    } else {
      history('/')
    }
  }, [dispatch, history, userInfo, success])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUserById(id))
    }
  }

  const handleEdit = (id) => {
    history(`/admin/users/edit/${id}`)
  }

  return (
    <div className='users'>
      <h1>Users</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          {success && (
            <div className='success__container'>
              <p>USER DELETED SUCCESSFULLY</p>
            </div>
          )}
          <table className='users__table'>
            <thead>
              <tr className='table__head'>
                <td className='table__id'>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>ROLE</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr className='table__data' key={user._id}>
                  <td className='table__id'>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className='user__role noselect'>
                    <div
                      className={`${user.isAdmin === true ? 'admin' : 'user'}`}
                    >
                      {user.isAdmin === false ? 'USERS' : ''}
                      {user.isAdmin === true ? 'ADMIN' : ''}
                    </div>
                  </td>
                  <td className='user__action'>
                    <AiOutlineDelete
                      className='user__delete__button'
                      onClick={() => handleDelete(user._id)}
                    />
                    <BiEdit
                      className='user__edit__button'
                      onClick={() => handleEdit(user._id)}
                    />
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

export default UsersScreen
