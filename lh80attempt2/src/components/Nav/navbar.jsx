import React from 'react'
import './navbar.css'



const navbar = () => {
  return (
    <div className='navbar'>
       
        <ul className='navstuff'>
            <li><a href="index.html">Home</a></li>
            <li><a href="#skill-bg">Skills</a></li>
            <li><a href="project.html">Projects</a></li>
        </ul>
    </div>

    
  )
}

export default navbar