import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profileimg.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile"/>
        <div className="hero-content">
            <h1><span>Hi, I'm Allison Tao!</span></h1>
            <p>I'm a Mathematics + Data Science student at UBC</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <a className="hero-resume" href="../../../public/resume.pdf" target="_blank" rel="noopener noreferrer">
                    My Resume
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
