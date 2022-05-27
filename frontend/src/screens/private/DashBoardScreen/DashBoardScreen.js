import React, { useEffect, useState } from 'react'
import './DashBoardScreen.scss'

const DashBoardScreen = () => {
  const videos = [
    {
      name: ' Welcome to the Course',
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
      name: ' HTTP Intro,Headers,Body,Status Codes,And More',
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
      name: ' Dont Want to Type',
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
      name: ' Emotional Damage',
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
      name: ' Lets Do It!',
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
      name: ' Working On Css',
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
      name: ' Welcome to the Course',
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
      name: ' HTTP Intro,Headers,Body,Status Codes',
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
      name: ' Dont Want to Type',
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
      name: ' Emotional Damage',
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
      name: ' Lets Do It!',
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
      name: 'Working On Css',
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
          <iframe
            title='video'
            className='dashboard__left--videoPlayer'
            src={currentVideo}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
        <div className='dashboard__right'>
          <div className='dashboard__right--sidebarHeader'>
            <h2>Course Content</h2>
          </div>

          {videos.map((video, idx) => (
            <div key={idx}>
              <div
                className='sidebar__section'
                onClick={() => {
                  toggle(idx)
                }}
              >
                <h1>{`Section  ${idx + 1}  :  ${video.name} `}</h1>
              </div>
              <div className={`${clicked === idx ? 'active' : 'hide'} `}>
                {video.contents.map((content, index) => (
                  <button
                    onClick={() => {
                      setCurrentVideo(content.videoLink)
                    }}
                    key={index}
                    className={'section__item'}
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
