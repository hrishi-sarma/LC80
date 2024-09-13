import React from 'react'
import Navbar from './components/Nav/navbar'
import MainContent from './components/MainTitle/MainTitle.jsx'
import { Experience } from './components/Experience.jsx'
import ProjectContent from './components/projects/projects.jsx'
import SkillsContent from './components/myskills/skills.jsx'
import FloatingContent from './components/floatinDocks/docks.jsx'
import AnimSkillsContent from './components/skillsAnim/skillanim.jsx'

const App = () => {
  return (
    <div>
      <FloatingContent/>
      <Navbar/>
      <MainContent/>
      <SkillsContent/>
      <AnimSkillsContent/>
      <ProjectContent/>
    </div> 
  )
}

export default App