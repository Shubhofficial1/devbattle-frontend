import React, { useEffect, useState } from 'react'
import './DashBoardScreen.css'
const DashBoardScreen = () => {
  const videos = [
    {
      name: 'Section 1. Welcome to the Course',
      contents: [
        {
          name: '1. Course Introduction',
          videoLink: 'https://www.youtube.com/embed/5HSoS7x8VP8',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2. Project Overview',
          videoLink:
            'https://player.vimeo.com/video/259075537?h=ceba1415fe&title=0&byline=0&portrait=0&color=e88e4d&title=0&byline=0&portrait=0&badge=0',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3.Optional Node.Js Begineer Crash Course ',
          videoLink:
            'https://player.vimeo.com/video/641605882?h=9eae649b38&autoplay=1&color=e88e4d&title=0&byline=0&portrait=0&badge=0',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4. Environmental Setup',
          videoLink:
            'https://player.vimeo.com/video/249675407?h=fe64540578&color=e88e4d&title=0&byline=0&portrait=0&badge=0',
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
          videoLink: 'https://www.youtube.com/embed/jH9Ln-LoneA',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '2. Installing NodeMon',
          videoLink: 'https://www.youtube.com/embed/tOttqIZuPvQ',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '3. Responding With Data ',
          videoLink: 'https://www.youtube.com/embed/Naa85K5n4sY',
          imageLink: 'hey.png',
          isCompleted: false,
        },
        {
          name: '4. Http Status Codes',
          videoLink: 'https://www.youtube.com/embed/aaRFyHGiAAY',
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

  const [clicked, setClicked] = useState('0')
  let firstVideo = videos[0].contents[0].videoLink
  console.log(firstVideo)
  const [currentVideo, setCurrentVideo] = useState(firstVideo)

  const toggle = (idx) => {
    if (clicked === idx) {
      return setClicked('0')
    }
    setClicked(idx)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__left'>
          {/* <iframe
            title='Youtube player'
            className='dashboard__video'
            frameborder='0'
            src={`https://www.youtube.com/embed/5HSoS7x8VP8`}
          ></iframe> */}
          <iframe
            title='video'
            className='dashboard__video'
            src={currentVideo}
            frameBorder='0'
            allowFullScreen
            background
          ></iframe>
          {/* <p>{currentVideo}</p> */}
        </div>
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
                  <button
                    onClick={() => {
                      console.log(content.videoLink)
                      setCurrentVideo(content.videoLink)
                    }}
                    key={index}
                    className={`contentCard `}
                  >
                    <p>{content.name}</p>
                  </button>
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
