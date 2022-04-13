import React from 'react'
import './LoginModal.css'
import { AiOutlineClose } from 'react-icons/ai'

const LoginModal = (props) => {
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
          <div className='modal__form'>
            <input
              className='modal__email'
              placeholder='Enter your email'
            ></input>

            <input
              className='modal__password'
              placeholder='Enter your password'
            ></input>

            <button className='modal__login__button' type='submit'>
              Login
            </button>
          </div>
          <p>
            Creating an account means you accept our Privacy Policy, Terms of
            Service and Placement policy.
          </p>
        </div>
        <div className='modal__footer'></div>
      </div>
    </div>
  )
}

export default LoginModal
