import React from 'react'
import './WorkCardStyles.css'
import quiz from '../../assets/quiz.jpg'
import react from '../../assets/react.jpg'
import ecommerce from '../../assets/e_commerce.jpg'

const WorkCard = () => {
    return (
        <div className='work-conatiner'>
            <h1 className='project-heading'>Projects</h1>

            <div className='project-container'>

                <div className='project-card'>
                    <img src={react} alt='wait' />
                    <h2 className='project-title'>My Personal Portfolio</h2>
                    <div className='pro-details'>
                        <p>This is my personal portfolio, and I have created it in order to display my works, skills and overall in order to provide basic details about me.

                            <br></br>
                            List of technologies I have used for preparing this project is as follow:
                            <br></br>
                            <br></br>
                            <ul>Html</ul>
                            <ul>Css</ul>
                            <ul>ReactJS</ul>
                        </p>
                        <div className='pro-btns'>
                            <a href='#under_progress' target='_blank' rel="noreferrer" className='btn'>View</a>
                            <a href='https://github.com/KirtiNishad/Portfolio' target='_blank' rel="noreferrer" className='btn'>Source</a>

                        </div>
                    </div>
                </div>


                <div className='project-card'>
                    <img src={quiz} alt='wait' />
                    <h2 className='project-title'>Quiz Web Application</h2>
                    <div className='pro-details'>
                        <p>This single page Web-Application provide the collection of quiz in various categories. Numerous functions are
                            available for the users like time based quiz, instant result
                            declaration, retake the test, overview of the test and many more.

                            <br></br>
                            List of technologies I have used for preparing this project is as follow:
                            <br></br>
                            <br></br>
                            <ul>ReactJS</ul>
                            <ul>Node.js</ul>
                            <ul>MongoDB</ul>
                        </p>
                        <div className='pro-btns'>
                            <a href='#under_progress' target='_blank' rel="noreferrer" className='btn'>View</a>
                            <a href='https://github.com/KirtiNishad/Quiz_Web_Application' target='_blank' rel="noreferrer" className='btn'>Source</a>
                        </div>
                    </div>
                </div>

                <div className='project-card'>
                    <img src={ecommerce} alt='wait' />
                    <h2 className='project-title'>E_commerce Website</h2>
                    <div className='pro-details'>
                        <p>In this e_commerce website electronic items are displayed for the
                            customers. Seems like, other online shopping apps. React.js is used
                            for frontend part of the website.
                            <br></br>

                            List of technologies I have used for preparing this project is as follow:
                            <br></br>
                            <br></br>
                            <ul>Html</ul>
                            <ul>Css</ul>
                            <ul>ReactJS</ul>
                        </p>
                        <div className='pro-btns'>
                            <a href='#under_progress' target='_blank' rel="noreferrer" className='btn'>View</a>
                            <a href='https://github.com/KirtiNishad/E_Commerce' target='_blank' rel="noreferrer" className='btn'>Source</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WorkCard