import React from 'react'
import './CourseScreen.css'
import { CourseDetails } from '../../Data/CourseDetails'
const CourseScreen = () => {
  const course = CourseDetails.find((course) => course.id === '1')
  const techStack = course.techStack
  const features = course.features
  console.log(course)
  return (
    <div className='course'>
      <div className='course_container'>
        <div className='course_heading'>
          <h1 className='course_heading_title'>{course.title}</h1>
          <p className='course_heading_type noselect'>{course.type}</p>
        </div>
        <div className='course_video'></div>
        <h3 className='course_video_heading'>What we will build</h3>
        <p className='course_video_description'>{course.description}</p>
        <div className='techstack_container noselect'>
          {techStack.map((tech) => {
            return (
              <div
                className='techstack_circle'
                style={{ backgroundColor: `${tech.color}` }}
              >
                {tech.imageUrl}
              </div>
            )
          })}
        </div>
        <div className='features'>
          <h3 className='features_heading'>Silent features</h3>
          {features.map((feature) => {
            return (
              <div className='features_container'>
                <p>
                  {feature.icon}
                  {'             '}
                  {feature.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CourseScreen
