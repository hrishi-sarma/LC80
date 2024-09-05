import React from 'react'
import './MainTitle.css'
import Pfps from './Pfps.jpeg';

const MainTitle = () => {
  return (
    <div className='Main'>
        <div className="titlestuff">
            <div className='Title'>
                <h1>
                    Hiksdjfld
                </h1>
                <h1>
                    dgfhdsf
                </h1>

                <div class="container">
                        <div class="typed-out" id="typed-text"></div>
                </div>
                
            </div>

            <div className="titleImg">
                <img src={Pfps} alt="no image" className="profimg" />
            </div>

        </div>

        <div className="Bar"/>

        <div className="aboutme">
            <h1>
                About Me : 
            </h1>

            <p>
                description texts idk what to put here rn
            </p>
        </div>


        

    </div>

    
  )
}

export default MainTitle