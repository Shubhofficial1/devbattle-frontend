import React, { useState } from 'react'
import './LoginModal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { login, register } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../Message/Message.js'

const LoginModal = (props) => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const [showLoginBody, setShowLoginBody] = useState(true)
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, error, loading } = userLogin

  // const userRegister = useSelector((state) => state.userRegister)
  // const { loading, error, userInfo } = userRegister

  // One idea is to change text in reducer

  const submitLoginHandler = (e) => {
    e.preventDefault()
    dispatch(login(loginEmail, loginPassword))
    setLoginEmail('')
    setLoginPassword('')
    props.setShow(false)
  }

  const submitRegisterHandler = (e) => {
    e.preventDefault()
    dispatch(register(registerName, registerEmail, registerPassword))
    setRegisterName('')
    setRegisterEmail('')
    setRegisterPassword('')
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

        {userInfo && (
          <h1 style={{ textAlign: 'center' }}>Logged In Successfully. 🚀</h1>
        )}

        {!userInfo && showLoginBody && (
          <div className='modal__body'>
            <h3>Sign Up or Login</h3>
            <form onSubmit={submitLoginHandler} className='modal__form'>
              <input
                value={loginEmail}
                type='email'
                onChange={(e) => setLoginEmail(e.target.value)}
                className='modal__email noselect'
                placeholder='Enter your email'
              ></input>

              <input
                value={loginPassword}
                type='password'
                onChange={(e) => setLoginPassword(e.target.value)}
                className='modal__password noselect'
                placeholder='Enter your password'
              ></input>
              {error && <Message variant='danger' error={error}></Message>}

              <button
                disabled={!loginEmail && !loginPassword}
                className='modal__login__button noselect'
                type='submit'
              >
                Login
              </button>
            </form>

            <span className='login__text'>
              New Here ?
              <span
                className='login__link'
                onClick={() => setShowLoginBody(false)}
              >
                {'   '} Resister Now
              </span>
            </span>
            <p>
              Creating an account means you accept our Privacy Policy, Terms of
              Service and Placement policy.
            </p>
          </div>
        )}

        {!userInfo && !showLoginBody && (
          <div className='modal__body'>
            <h3>Sign Up or Login</h3>
            <form onSubmit={submitRegisterHandler} className='modal__form'>
              <input
                value={registerName}
                type='text'
                onChange={(e) => setRegisterName(e.target.value)}
                className='modal__name noselect'
                placeholder='Enter your name'
              ></input>

              <input
                value={registerEmail}
                type='email'
                onChange={(e) => setRegisterEmail(e.target.value)}
                className='modal__email noselect'
                placeholder='Enter your email'
              ></input>

              <input
                value={registerPassword}
                type='password'
                onChange={(e) => setRegisterPassword(e.target.value)}
                className='modal__password noselect'
                placeholder='Enter your password'
              ></input>

              {error && <Message variant='danger' error={error}></Message>}

              <button
                disabled={!registerEmail && !registerPassword}
                className='modal__login__button noselect'
                type='submit'
              >
                Create An Account
              </button>
            </form>

            <span className='register__text'>
              Already Have an account ?
              <span
                className='register__link'
                onClick={() => setShowLoginBody(true)}
              >
                {'   '} Login
              </span>
            </span>
            <p>
              Creating an account means you accept our Privacy Policy, Terms of
              Service and Placement policy.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginModal
