import React, { useState } from 'react';
import './projects.css'; 
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Projects = () => {
  const [hoveredTitle, setHoveredTitle] = useState('Projects');

  const cardsData = [
    {
      image: 'catto.jpeg',
      title: 'Buddy: The Discord Chatbot',
      link: 'https://github.com/hrishi-sarma/Buddy-the-discord-chatbot'
    },
    {
      image: 'cattosleep.jpeg',
      title: 'Vehicle Showcase 3D',
      link: 'https://github.com/hrishi-sarma/PhantomShowcase3D'
    },
    {
      image: 'cattoawake.jpeg',
      title: 'Dino game in 3D',
      link: 'https://github.com/hrishi-sarma/Fossil404'
    },
    {
      image: 'cattosleep.jpeg',
      title: 'Quotes App',
      link: 'https://github.com/hrishi-sarma/QuotesAppCodsoft'
    },
    {
      image: 'catto.jpeg',
      title: 'Edtech project (WIP)',
      link: 'https://github.com/hrishi-sarma/Educrow'
    }
  ];

  return (
    <div className="layout">
      
      <div className="main-layout">
        {cardsData.map((card, index) => (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="circle"
            onMouseEnter={() => setHoveredTitle(card.title)}
            onMouseLeave={() => setHoveredTitle('Projects')}
          >
            <img src={card.image} alt={card.title} className="circle-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button className="card-button">{card.buttonText}</button>
            </div>
          </a>
        ))}
      </div>
            <div className="title">
              <div className="title-text">{hoveredTitle}</div>
            </div>
    </div>
  );
};

export default Projects;
