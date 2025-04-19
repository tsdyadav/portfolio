import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ec74ccf9-09f2-4ecd-9233-1d56b282069f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Submit");
          event.target.reset();
        }
      };
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=" "/>
        </div>
        <div className="contact">
            <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Ready to collaborate on your next big idea! I bring hands-on experience in building full-stack web applications,
                     and I'm available to take on new development projects that demand clean code, scalability, and fast delivery.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                     <img src={mail_icon} alt=" "/>
                     <p>Ydharampal192@gmail.com</p>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={call_icon} alr=" "></img>
                        <p>+91 8178981495</p>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={location_icon} alt=" "/>
                        <p>Greater Noida</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onsubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Ente your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='text' placeholder='Ente your Email' name='email'/>
                <label htmlFor=''>Write your message here</label>
                <textarea name="message"  rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
