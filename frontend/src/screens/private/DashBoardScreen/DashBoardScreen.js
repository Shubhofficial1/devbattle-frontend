import React, { useState } from 'react'
import './DashBoardScreen.css'
const DashBoardScreen = () => {
  const [clicked, setClicked] = useState('0')
  const toggle = (idx) => {
    if (clicked === idx) {
      return setClicked('0')
    }
    setClicked(idx)
  }
  const videos = [
    {
      name: 'Section 1. Welcome to the Course',
      contents: [
        {
          name: '1. Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2. Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3. Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4. Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 2. HTTP Intro,Headers,Body,Status Codes',
      contents: [
        {
          name: '1. HTTP & Node Http Module',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2. Installing NodeMon',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3. Responding With Data ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4. Http Status Codes',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 3. Dont Want to Type',
      contents: [
        {
          name: '1. Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2. Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3. Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4. Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 4. Emotional Damage',
      contents: [
        {
          name: '1. Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2. Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3. Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4. Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 5. Lets Do It!',
      contents: [
        {
          name: '1.Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2.Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 6. Working On Css',
      contents: [
        {
          name: '1.Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2.Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 7. Welcome to the Course',
      contents: [
        {
          name: '1.Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2.Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 8. HTTP Intro,Headers,Body,Status Codes',
      contents: [
        {
          name: '1.HTTP & Node Http Module',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2. Installing NodeMon',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Responding With Data ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Http Status Codes',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 9. Dont Want to Type',
      contents: [
        {
          name: '1.Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2.Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 10. Emotional Damage',
      contents: [
        {
          name: '1.Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2.Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 11. Lets Do It!',
      contents: [
        {
          name: '1.Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2.Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
    {
      name: 'Section 12. Working On Css',
      contents: [
        {
          name: '1.Course Introduction',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2.Project Overview',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4.Environmental Setup',
          videoLink: 'hey',
          imageLink: 'hey.png',
          isCompleted: false,
        },
      ],
    },
  ]
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__left'>Left</div>
        <div className='dashboard__right'>
          <div className='right__heading'>
            <h2>Course Content</h2>
          </div>
          {videos.map((video, idx) => (
            <div key={idx}>
              <button
                onClick={() => {
                  toggle(idx)
                }}
                className='videoCard__container noselect'
              >
                <h1>{video.name}</h1>
              </button>
              <div
                className={`noselect contentCard__container ${
                  clicked === idx ? 'active' : 'hide'
                } `}
              >
                {video.contents.map((content, index) => (
                  <div key={index} className={`contentCard `}>
                    <p>{content.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashBoardScreen
