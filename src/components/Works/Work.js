import React from 'react'
import './Work.css'
import portfolio from '../../Assest/portfoli2.jpg.jpeg'
import portfolio2 from '../../Assest/portfoli2.jpg.jpeg'
import portfolio3 from '../../Assest/portfolio3.jpg.jpeg'
import portfolio4 from '../../Assest/portfoli4.jpg.jpeg'
import portfolio5 from '../../Assest/portfoli5.jpg.jpeg'
import portfolio6 from '../../Assest/portfoli6.jpg.jpeg'

const Work = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='workDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate quos cum sit inventore optio, ut cumque blanditiis et velit tempora veniam, nulla iure aut!</span>
       <div className="worksImgs">
        <img src={portfolio} alt="portfolio" className='worksImg' />
        <img src={portfolio2} alt="portfolio" className='worksImg' />
        <img src={portfolio3} alt="portfolio" className='worksImg' />
        <img src={portfolio4} alt="portfolio" className='worksImg' />
        <img src={portfolio5} alt="portfolio" className='worksImg' />
        <img src={portfolio6} alt="portfolio" className='worksImg' />
       </div>
       <button className="workBtn">
        See More 
       </button>
    </section>
  )
}

export default Work
