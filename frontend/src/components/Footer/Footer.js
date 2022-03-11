import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer noselect'>
      <div className='footer_container'>
        <div className=' footer_card'>
          <h1>Laerning Paths</h1>
          <p>Web app development</p>
          <p>Mobile app development</p>
          <p>Python Programming</p>
        </div>
        <div className='footer_card '>
          <h1>Company</h1>
          <p>Blog</p>
          <p>Carrers</p>
          <p>Refer & Earn</p>
        </div>

        <div className=' footer_card '>
          <h1>Support</h1>
          <p>Contact Us</p>
          <p>Pricing</p>
        </div>
        <div className='footer_newsletter'>
          <h1>NewsLetter</h1>
          <p>Subscribe to our newsletter</p>
          <input placeholder='Enter Your Email Address' />
          <button className='noselect'>Subscribe</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
