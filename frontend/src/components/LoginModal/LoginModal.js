import React, {  useState } from 'react'
import './LoginModal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { login } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'

const LoginModal = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    setEmail('')
    setPassword('')
    props.setShow(false)
  }

  return (
    <div
      className={`modal ${props.show ? 'show' : ''}`}
      onClick={props.onClose}
    >
      <div
        className='modal__content'
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className='modal__close__container'>
          <button onClick={props.onClose} className='modal__button'>
            <AiOutlineClose />
          </button>
        </div>

        <div className='modal__body'>
          <h3>Sign Up or Login</h3>

          <form onSubmit={submitHandler} className='modal__form'>
            <input
              value={email}
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              className='modal__email noselect'
              placeholder='Enter your email'
            ></input>

            <input
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              className='modal__password noselect'
              placeholder='Enter your password'
            ></input>

            <button
              disabled={!email && !password}
              className='modal__login__button noselect'
              type='submit'
            >
              Login
            </button>
          </form>
          <p>
            Creating an account means you accept our Privacy Policy, Terms of
            Service and Placement policy.
          </p>
        </div>

        {/* {!userInfo ? (
          <div className='modal__body'>
            <h3>Sign Up or Login</h3>

            <form onSubmit={submitHandler} className='modal__form'>
              <input
                value={email}
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                className='modal__email noselect'
                placeholder='Enter your email'
              ></input>

              <input
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                className='modal__password noselect'
                placeholder='Enter your password'
              ></input>

              <button
                disabled={!email && !password}
                className='modal__login__button noselect'
                type='submit'
              >
                Login
              </button>
            </form>
            <p>
              Creating an account means you accept our Privacy Policy, Terms of
              Service and Placement policy.
            </p>
          </div>
        ) : (
          <h1>Logged In</h1>
        )} */}
      </div>
    </div>
  )
}

export default LoginModal
