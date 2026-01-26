import React from 'react'
import './icon.css'
import One from '../assets/lr.png'
import Two from '../assets/pp.png'
import Three from '../assets/ae.png'
import Four from '../assets/davinci.png'
import Five from '../assets/Capcut.png'
import Seven from '../assets/Canva.png'
import Eigth from '../assets/ps.png'


const Icons = () => {
  return (
    <>
    <div className='ic'>
      <div className='side-1'>
        <p><span style={{color:"blueviolet"}}>Other</span> Works</p>
        <h1>i'm Into</h1>
        <ul>
          <li>social media management</li>
          <li>event coverage</li>
          <li>out door shoots</li>
          <li>content creation</li>
          <li> brand building</li>
          <p>and many others<span style={{color:"blueviolet"}}>........!</span></p>
        </ul>
      </div>
      {/* <hr /> */}
      <div className='side-2'>
        <h1>tools i use </h1>
        <div className='icons'>
         <img src={One} alt="" />
        <img src={Two} alt="" />
        <img src={Three} alt="" />
        <img src={Eigth} alt="" />
        <img src={Four} alt="" />
        <img src={Five} alt="" />
        <img src={Seven} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Icons