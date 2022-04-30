import React, { useEffect, useState } from 'react'
import './UserEditScreen.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetailsById, updateUser } from '../../../actions/userActions'
import Loader from '../../../components/Loader/Loader'
import Message from '../../../components/Message/Message'
import { useNavigate } from 'react-router-dom'
import { USER_UPDATE_RESET } from '../../../constants/userConstants'

const UserEditScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()
  const history = useNavigate()
  const { id } = useParams()

  const userDetailsAdmin = useSelector((state) => state.userDetailsAdmin)
  const { loading, error, user } = userDetailsAdmin

  const userUpdate = useSelector((state) => state.userUpdate)

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      history('/admin/users')
    } else {
      if (!user.name || user._id !== id) {
        dispatch(getUserDetailsById(id))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [
    dispatch,
    id,
    user.name,
    user.email,
    user.isAdmin,
    user,
    history,
    successUpdate,
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: id, name, email, isAdmin }))
  }

  const handleGoBack = (e) => {
    e.preventDefault()
    history('/admin/users')
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          <div className='user__edit__container'>
            <button
              className='user__edit__goback noselect'
              onClick={handleGoBack}
            >
              Go Back
            </button>

            {loadingUpdate && <Loader />}
            {errorUpdate && <Message error={errorUpdate} />}
            <h1>Edit Profile</h1>
            <form className='user__edit__form' onSubmit={handleSubmit}>
              <p>User Name</p>
              <input
                placeholder='Enter name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <p>Email</p>
              <input
                placeholder='Enter email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <div className='user__edit__row'>
                <p>Is Admin : </p>
                <p>{isAdmin === true ? 'TRUE' : ''}</p>
                <p>{isAdmin === false ? 'FALSE' : ''}</p>
                <input
                  className='isAdmin__checkbox'
                  type='checkbox'
                  placeholder='Enter Role'
                  checked={isAdmin}
                  value={isAdmin}
                  onChange={(e) => {
                    setIsAdmin(!isAdmin)
                  }}
                />
              </div>

              <button
                disabled={!name && !email}
                className='user1__edit__button'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default UserEditScreen
