import "./AboutImgStyle.css";
import blue from "../assets/blue-bg.jpg"
import about from "../assets/about.png"

import React from 'react'

const AboutImg = () => {
  return (
    <div className="hero">

      <div className="mask">
        <img className="into-img" src={blue} alt="IntroImg" />
      </div>

      <div className="about">

            <div className="left">

                <h1>Know Who <span className="color">I'm </span></h1>

                <p>
                    Hi Everyone, I am <span className="color">Kirti Nishad</span> from <span className="color">Ayodhya, Uttar Pradesh, India.</span>
                    <br></br>
                    I have recently completed my Bachelor of Technology from Dr. A. P. J. Abdul Kalam Technical University, Lucknow
                    with Information Technology branch.
                    <br></br>
                    Coming to my skills I am MERN Developer. Currently I am trying to find the job which inhance my performance.
                    <br></br>
                    <br></br>
                    Apart from coding, some other activities that I love to do!
                    <br></br>
                    <br></br>
                    <div>
                        <ul>
                            <li>Reading Books</li>
                            <li>Painting</li>
                            <li>Sketching</li>
                        </ul>
                    </div>
                    
                    
                </p>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack bottom">
                        <img src={about} className="img" alt="true" />
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutImg