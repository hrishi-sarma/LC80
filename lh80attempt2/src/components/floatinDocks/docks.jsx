import React, { useEffect, useState } from 'react';
import './docks.css'; // Import the CSS file

const FloatingDock = ({ scrollToSection }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const icons = [
    { name: 'intro', iconClass: 'fas fa-home' },        // Home Icon
    { name: 'skills', iconClass: 'fas fa-tasks' },      // Skills Icon
    { name: 'projects', iconClass: 'fas fa-laptop-code' },   // Projects Icon
    { name: 'github', iconClass: 'fa-brands fa-github' }, // Contacts Icon
    { name: 'linkedin', iconClass: 'fa-brands fa-linkedin' }, // Contacts Icon
  ];

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setIsScrolling(true);

      // Clear the timeout if it already exists
      clearTimeout(timer);

      // Set a timeout to remove the class after scrolling stops
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 200); // Adjust this value to control how quickly it returns
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`dock-container ${isScrolling ? 'moving' : ''}`}>
      <div className="docks">
        {icons.map((icon, index) => (
          <DockIcon key={index} icon={icon} scrollToSection={scrollToSection} />
        ))}
      </div>
    </div>
  );
};

const DockIcon = ({ icon, scrollToSection }) => {
  const handleClick = () => {
    if (icon.name === 'linkedin') {
      window.open('https://www.linkedin.com/in/hrishikesh-sarma-043915283/', '_blank');
    } else if (icon.name === 'github') {
      window.open('https://github.com/hrishi-sarma', '_blank');
    } else {
      scrollToSection(icon.name);
    }
  };

  return (
    <div
      className="icon-container group relative"
      onClick={handleClick}
    >
      {/* Icon */}
      <div className="dock-icon group-hover:scale-125">
        <i className={`${icon.iconClass}`}></i> {/* Font Awesome Icon */}
      </div>

      {/* Text on hover */}
      <div className="icon-label group-hover:opacity-100">
        {icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}
      </div>
    </div>
  );
};


export default FloatingDock;
