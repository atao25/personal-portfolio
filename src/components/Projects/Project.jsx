import React from 'react'
import './Project.css'

const projects = [
  {
    id: 1,
    title: 'ApexFit',
    description: 'An app developed during the UBC youCode Hackathon to encourage users to build healthy habits by completing various wellness tasks, such as drinking water and exercising. The app uses ML5.js to automate photo capturing of users completing tasks, and Firebase is integrated for real-time user traking and data management. The front-end is built with React.',
    imageUrl: 'src/assets/projects/apexfit.png',
    devpostUrl: 'https://devpost.com/software/apexfit-by-arc-teryx', // Add the Devpost link here
  },
  {
    id: 2,
    title: 'ThriveThreads',
    description: 'A health and wellness platform created during the UBC cmd-f Hackathon that connets users through an automated chatbot powered by Cohere`s API, providing instant responses to user-submitted questions. This app also features Cohere`s Rerank Multilingual Model, allowing users to set default languages and translate other responses. The front-end is built using React and CSS.',
    imageUrl: 'src/assets/projects/thrivethreads.png',
    devpostUrl: 'https://devpost.com/software/thrivethread', // Add the Devpost link here
  },
  {
    id: 3,
    title: 'PrioritySync',
    description: 'A productivity-enhancing platform developed during UBC`s nwHack Hackathon, designed to optimize your daily schedule by integrating all your events and data into a personalized calendar. The front=end is built using HTML, CSS, and JavaScript, and thebackend is powered by Node.js with advanced scheduling algorithms supported by OpenAI`s API.',
    imageUrl: 'src/assets/projects/prioritysync.png',
    devpostUrl: 'https://devpost.com/software/priority-sync', // Add the Devpost link here
  },
];

const Project = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div> 
      <div className="mywork-container">
        {projects.map((project) => (
          <a 
            href={project.devpostUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link" // Optional: style the link
            key={project.id}
          >
            <div className="project-item">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project
