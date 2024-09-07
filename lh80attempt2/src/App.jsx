import React from 'react'
import Navbar from './components/Nav/navbar'
import MainContent from './components/MainTitle/MainTitle.jsx'
import { Experience } from './components/Experience.jsx'
import ProjectContent from './components/projects/projects.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainContent/>
      <ProjectContent/>
    </div> 
  )
}

export default App