import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.png'
const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_pattern} alt=""/> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                {/* <img src={about_profile} alt="" className='profile_img1'/> */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a budding Frontend Developer with hands-on experience through personal and academic projects.
                    I enjoy transforming UI/UX designs into functional websites using modern web technologies 
                   like HTML5, CSS3, JavaScript, and React. 
                  </p>
                    <p>I'm constantly learning and looking forward to contributing to real-world projects and growing in a professional team.</p>
                    
                    
                </div>
                <div className="about-skills">
                  <div className="about-skill"><p> HTML & CSS</p><hr style={{Width:"150px"}}></hr></div>
                  <div className="about-skill"><p> Java script</p><hr style={{Width:'80px'}}></hr></div>
                  <div className="about-skill"><p> React.js</p><hr style={{Width:"90px"}}></hr></div>
                  <div className="about-skill"><p> Node.js</p><hr style={{Width:"100px"}}></hr></div>
                  <div className="about-skill"><p> MongoDB</p><hr style={{Width:"70px"}}></hr></div>
                  
                </div>
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p> YEARS OF EXPERIENCE</p>
            </div>
            <hr></hr>
            <div className="about-achievement">
                <h1>5+</h1>
                <p> PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p> happy clients</p>
            </div>
        </div> */}
      
    </div>
  )
}

export default About
