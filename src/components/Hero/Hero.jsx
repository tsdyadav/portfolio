import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

                            
const openResume = () => {
  window.open('/Dharam_resume.pdf', '_blank');
};
function Hero() {
  return (
    <div id ="home" className='hero'>

      <img src={profile_img} alt="profile-img" className='profile_img'/>
      <h1><span>I'm Dharampal Yadav,</span> Frontend developer</h1>
      <p>I'm a passionate fronted developer with a strong foundation in front-end technologies. 
        I love creating clean, user-friendly, and responsive websites that solve real-world problems. 
        Currently diving deeper into the MERN stack and constantly exploring new tools to stay up-to-date in this fast-evolving tech world.</p>
      <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact"> Connect with me</AnchorLink></div>
            <div className="hero-resume" onClick={openResume} >  My resume</div>
      </div>
    </div>
  )
}

export default Hero
                                                                                                                                                             