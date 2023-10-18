import React from 'react'
import './Contact.css'
import facebook from '../../Assest/facebook-image.jpg.jpeg'
import adobe from '../../Assest/adobe.jpg.jpeg'
import walmart from '../../Assest/walmart.jpg.jpeg'
import microsoft from '../../Assest/microsoft.jpg.jpeg'
import facebookIcon from '../../Assest/facebookIcon.jpg.jpeg'
import instagramIcon from '../../Assest/instagramIcon.jpg.jpeg'
import twitterIcon from '../../Assest/twitterIcon.jpg.jpeg'
import utubeIcon from '../../Assest/utubeIcon.jpg.jpeg'

const Contact = () => {
  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eum nesciunt facilis quas mollitia tenetur recusandae assumenda, ratione quisquam fugiat in non, blanditiis consequuntur minus?</p>
        <div className="clientImgs">
            <img src={facebook} alt="client" className='clientImg' />
            <img src={adobe} alt="client" className='clientImg' />
            <img src={walmart} alt="client" className='clientImg' />
            <img src={microsoft} alt="client" className='clientImg' />
        </div>

      </div>
      <div id='contact'>
         <h1 className="contactPageTitle">Contact Me </h1>
         <span className="contactDec">
          please fill out the form below to discuss any work opportunuties
         </span>
         <form className="contactForm">
          <input type="text" className='name' placeholder='Your Name' />
          <input type="email" className='email' placeholder='Enter Your Email' />
          <textarea className='msg' name="message"  rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='send' className="submitBtn">Submit</button>
          <div className="link">
            <img src={facebookIcon} alt="facebook" className="link" />
            <img src={instagramIcon} alt="instagram" className="link" />
            <img src={twitterIcon} alt="twitter" className="link" />
            <img src={utubeIcon} alt="utube" className="link" />
          </div>

         </form>
      </div>
    </section>
  )
}

export default Contact
