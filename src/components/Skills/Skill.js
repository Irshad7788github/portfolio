import React from 'react'
import './Skill.css';
import UIDesign from '../../Assest/UIDesign.jpg.jpeg'
import WebDesign from '../../Assest/WebDesign.jpg.jpeg'
import AppDesign from '../../Assest/AppDesign.jpg.jpeg'


const Skill = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDosc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto, cupiditate expedita modi laboriosam saepe!</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="AppDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>UI/Ux Design</h2>
                    <p>This is a demo text, you cam write your own content here.</p>
                </div>
             </div>

             <div className="skillBar">
                <img src={WebDesign} alt="UIDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text, you cam write your own content here.</p>
                </div>
             </div>

             <div className="skillBar">
                <img src={AppDesign} alt="UIDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text, you cam write your own content here.</p>
                </div>
             </div>

        </div>
    </section>
  )
}

export default Skill
