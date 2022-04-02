import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        {/* <div className='footer__logo'></div> */}
        <div className='footer__row'>
          <div className='footer__col '>
            <h4>About</h4>
            <p className='noselect'>about</p>
            <p className='noselect'>Help Center</p>
            <p className='noselect'>Submit a Ticket</p>
            <p className='noselect'>Discord</p>
            <p className='noselect'>Contact</p>
          </div>
          <div className='footer__col'>
            <h4>Learning</h4>
            <p className='noselect'>introduction</p>
            <p className='noselect'>Documentation</p>
            <p className='noselect'>Api Access</p>
            <p className='noselect'>Goodies</p>
            <p className='noselect'>Discord</p>
          </div>
          <div className='footer__col'>
            <h4>Company</h4>
            <p className='noselect'>Help Center</p>
            <p className='noselect'>Chat with us</p>
            <p className='noselect'>Careers</p>
            <p className='noselect'>Discord</p>
            <p className='noselect'>Contact</p>
          </div>
          <div className='footer__contact'>
            <h4>Contact Us</h4>
            <p>React out to us & we'll help you with all our best</p>
            <p> &copy; Devbattle 2022 | All Rights Reserved</p>
            <div className='contact__links'>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaYoutube />
              </div>
              <div>
                <GoMarkGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
