import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png' //here logo hai
import nav_underline from '../../src/assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from   '../assets/menu_open.svg'
// import menu_close from  '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu]=useState("");
  return (
    <div className='navbar'>
      <img src={logo} alt=" "></img>
      {/* <img src={menu_open } alt=""/> */}
      <ul className='nav-menu'>
        {/* <img src={menu_close} alt="" className="nav-mob-close" /> */}
        <li><AnchorLink className='anchor-link'  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={nav_underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu=="about"?<img src={nav_underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=="services"?<img src={nav_underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu=="work"?<img src={nav_underline} alt='' />:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={nav_underline} alt='' />:<></>}</li>
      </ul>
      <div className="nav-connect" ><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
