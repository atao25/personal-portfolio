import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
       
            <div className="about-para">
              <p>I am currently a 3rd year Mathematics and Data Science student at the University of British Columbia with interests in
                machine learning, data analytics, and web development. I hope to solve real world problems,
                contribute to impactful solutions, and connect with like-minded individuals that are passionate about 
                using technology to make a difference!
              </p>
              <p>Outside of class, you will find trying new cafes, swimming, or catching up on shows!</p>
                {/* <p>I am a Frontend and Backend Developer, a Data Analyst, and a Tutor</p> */}
            </div>
       
      </div>
    </div>
  )
}

export default About
