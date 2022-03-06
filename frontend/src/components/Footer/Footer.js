import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer noselect'>
      <div className='footer_container'>
        <div className=' footer_card'>
          <h1>gallery</h1>
          <p>community</p>
          <p>Trending</p>
          <p>Picks</p>
        </div>
        <div className='footer_card '>
          <h1>Marketplace</h1>
          <p>Trending</p>
          <p>Best Selling</p>
          <p>Latest</p>
        </div>
        <div className=' footer_card '>
          <h1>Magazine</h1>
          <p>Art Skills</p>
          <p>Carrer</p>
          <p>Inspiration</p>
          <p>News</p>
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
