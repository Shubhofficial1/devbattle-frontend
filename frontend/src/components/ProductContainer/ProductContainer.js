import React from 'react'
import './ProductContainer.css'
const ProductContainer = ({
  heading,
  imageUrl,
  para1,
  para2,
  buttonText,
  reverse,
}) => {
  return (
    <div className='product__container'>
      {reverse && (
        <div className='product__right'>
          <h1>{heading}</h1>
          <p>{para1}</p>
          <p>{para2}</p>
          <button className='noselect'>{buttonText}</button>
        </div>
      )}

      <div className='product__left'>
        <div className='product__image'>
          {/* <img src={imageUrl} alt='coding' /> */}
        </div>
      </div>

      {!reverse && (
        <div className='product__right'>
          <h1>{heading}</h1>
          <p>{para1}</p>
          <p>{para2}</p>
          <button className='noselect'>{buttonText}</button>
        </div>
      )}
    </div>
  )
}

ProductContainer.defaultProps = {
  reverse: false,
}

export default ProductContainer
