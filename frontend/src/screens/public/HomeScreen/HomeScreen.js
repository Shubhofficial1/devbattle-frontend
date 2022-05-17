import React from 'react'
import './HomeScreen.css'
import HomeContainer from '../../../components/HomeContainer/HomeContainer'
import HomeCard from '../../../components/HomeCard/HomeCard'
import ProductContainer from '../../../components/ProductContainer/ProductContainer'

const HomeScreen = () => {
  return (
    <div className='home'>
      <HomeContainer />
      <HomeCard />
      <ProductContainer
        heading={'High-Quality Videos 🎯'}
        imageUrl={'https://portfolio-3994e.web.app/images/project4.jpeg'}
        para1={
          'We firmly believe in the effectiveness of video as an educational medium. Thats why our crash courses come with over 50 high-resolution videos, boasting crystal-clear audio for a truly premium experience.Concepts are explained at length and, where applicable, are showcased in action in the browser.'
        }
        para2={
          'Meanwhile, each of our 25 frontend coding questions includes athrough video explanation, where we walk you through every step of the solution in detail. Preparing for frontend interviews has never been easier.'
        }
        buttonText={'Watch Courses'}
      />
      <ProductContainer
        heading={'Data Structures Crash Course 📚'}
        imageUrl={'https://portfolio-3994e.web.app/images/project3.jpeg'}
        para1={
          'Algorithms and data structures go hand in hand; the solution to virtually any coding interview problem will require the implementation of some kind of abstract data type in order to access and manipulate information.'
        }
        para2={
          'Our video series on data structures is the ultimate crash course on this important topic. We cover fundamental concepts pertaining to memory, complexity analysis, and Big O notation, and then break down popular data structures to give you a detailed look at how these concepts are applied under the hood. Linked Lists and Binary Trees will never instill fear in your heart again.'
        }
        buttonText={'Start the Course'}
        reverse={true}
      />
    </div>
  )
}

export default HomeScreen
