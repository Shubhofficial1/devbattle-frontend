import React, { useState } from 'react'
import './Faqs.scss'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const Faqs = () => {
  const [clicked, setClicked] = useState('0')
  const [arrow, setArrow] = useState(true)

  const toggleFaq = (idx) => {
    if (clicked === idx) {
      return setClicked('0')
    }
    setClicked(idx)
  }

  const toggleArrow = () => {
    setArrow(!arrow)
  }
  const questions = [
    {
      questionText: 'Is this Course for Beginners?',
      answerText:
        'YES, This course covers everything from the BASICS to the most ADVANCED topics. This is a FULL Stack tutorial meaning both Frontend and Backend technologies will be taught. Whether you have ZERO experience or 10+ years of experience, this course is for you!',
    },
    {
      questionText: 'Can I Buy a Package of multiple Courses with discounts?',
      answerText:
        'YES ,To do this, simply contact us or email us at support@devbattle.in, we will get back to you and we will be happy to resolve the issue for you!',
    },
    {
      questionText: 'Do you offer Refunds after Purchase?',
      answerText:
        'Currently we do not offer refunds. This is because we are building a COMMUNITY of ACTION-TAKERS.  We only want those who are COMMITTED to success inside this community.',
    },
  ]
  return (
    <div className='faqs'>
      <h1>Frequently Asked Questions</h1>
      <div className='faqs__Container'>
        {questions.map((question, idx) => (
          <div key={idx}>
            <div
              onClick={() => {
                toggleFaq(idx)
                toggleArrow(idx)
              }}
              className='faqs__question noselect'
            >
              <h1>{question.questionText}</h1>
              {arrow && <AiOutlineDown size={10} />}
              {!arrow && <AiOutlineUp size={10} />}
            </div>
            <div
              className={`faqs__answer hidden ${
                clicked === idx ? 'active' : 'hide'
              } `}
            >
              {question.answerText}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs
