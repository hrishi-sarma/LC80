import React from 'react';
import './projects.css'; 

const Projects = () => {
  const cardsData = [
    {
      image: 'https://via.placeholder.com/300',
      title: 'Project 1',
      description: 'This is the first project description.',
      buttonText: 'Learn More'
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Project 2',
      description: 'This is the second project description.',
      buttonText: 'Learn More'
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Project 3',
      description: 'This is the third project description.',
      buttonText: 'Learn More'
    }
  ];

  return (
    <div className="main-layout">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
          <button className="card-button">{card.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
