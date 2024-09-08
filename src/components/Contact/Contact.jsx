import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin.png'
import github_icon from '../../assets/github.png'


const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact me!</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>allisontao04@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin_icon} alt="LinkedIn Icon" />
                        <p><a href="https://www.linkedin.com/in/allisonrtao" target="_blank" rel="noopener noreferrer">My linkedin</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={github_icon} alt="Github Icon" />
                        <p><a href="https://github.com/atao25" target="_blank" rel="noopener noreferrer">My github</a></p>
                    </div>
                </div>
            </div>     
        </div>
      
    </div>
  )
}

export default Contact
