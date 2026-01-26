import React from 'react'
import { Link } from "react-router-dom";
import "./about.css"
import me from '../assets/me.PNG'

const About = () => {
  return (
    <>
    <div className='about'>
    <div className='abo'>

        <div className='about-text'>
        <h1>About Me</h1>
    <p>I'm a mobile content creator capturing everyday moments with intentionality and emotion—all through my iPhone. My goal is simple: 
      to create work that is Better Than The Last. I focus on natural light, clean edits, and authentic storytelling across photography, videography, and editing.
From portraits to nature and street photography, mobile videography to carefully crafted photo and video edits—each piece of content is part of my creative journey.
BTTL isn't just a brand name; it's a mindset. It means showing up with growth, not perfection, and always finding beauty in the process.
Every photo and video I share is a piece of me, evolving one frame at a time.</p>
        </div >

        <div className='about-img'>
            <img src={me} alt="" />
        </div>  
    </div>
    
<div className="contact-wrapper">
  <Link to="/contant">
    <button className="contact-button">Contact me</button>
  </Link>
</div>

    </div>


        </>
  )
}

export default About