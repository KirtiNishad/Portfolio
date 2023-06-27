import React from 'react'
import "./AboutContentStyles.css"
import img from "../../assets/about.png"
import { Link } from 'react-router-dom'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Know Who  <span className="color">I'm?</span></h1>
                <p>Hi Everyone, I am <span className="color">Kirti Nishad</span> from <span className="color">Ayodhya, Uttar Pradesh, India.</span>
                <p>
                    I have recently completed my Bachelor of Technology from Dr. A. P. J. Abdul Kalam Technical University, Lucknow with Information Technology branch.</p>
                    <p>Coming to my skills I am MERN Developer. Currently I am trying to find the job which inhance my performance.</p>

                    <p>Apart from coding, some other activities that I love to do!
                    <ul>
                        <li>#Reading Books</li>
                        <li>#Painting</li>
                        <li>#Sketching</li>
                    </ul>
                    </p>
                    
                </p>
                <Link to="/">
                    <button className="btn">Home</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutContent