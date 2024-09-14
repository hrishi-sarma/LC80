import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Nav/navbar';
import MainContent from './components/MainTitle/MainTitle.jsx';
import { Experience } from './components/Experience.jsx';
import ProjectContent from './components/projects/projects.jsx';
import SkillsContent from './components/myskills/skills.jsx';
import FloatingContent from './components/floatinDocks/docks.jsx';
import AnimSkillsContent from './components/skillsAnim/skillanim.jsx';
import New from './new.jsx';
import Skills from './skillz.jsx';
import Intro from './intro.jsx';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import ScaleLoader from 'react-spinners/ScaleLoader';

const App = () => {
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'intro':
        introRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className='main'>
      {loading ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          <ScaleLoader
          
            color={'#ffffff'}
            loading={loading}
            cssOverride={{ margin: 'auto' }}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div ref={introRef}><Intro /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={projectsRef}><ProjectContent /></div>
          <FloatingContent scrollToSection={scrollToSection} />
        </>
      )}
      <RemoveScrollBar />
    </div>
  );
};

export default App;
