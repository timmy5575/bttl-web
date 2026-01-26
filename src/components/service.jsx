import React from 'react'
import "./service.css"
import LI1 from "../assets/li2.png"
import LI2 from "../assets/li1.png"
import LI3 from "../assets/li4.png"
import LI4 from "../assets/li5.png"

const Service = () => {
  return (
    <>
    <div className='back'>
      <div className='all'>
        <h1>Service I provide</h1>
      
        <div className='sev'>
<div className="container">
  <div className="box">
  <img id='o' src={LI1} alt="" />
    <span id='i' className="title">Mobile photography</span>

  </div>
</div>

<div className="container">
  <div className="box">
      <img  id='u' src={LI2} alt="" />
    <span className="title">Photo editing</span>

  </div>
</div>

<div className="container">
  <div className="box">
      <img id='o' src={LI3} alt="" />
    <span id='i' className="title">Mobile videography</span>
  </div>
</div>

<div className="container">
  <div className="box">
      <img id='o' src={LI4} alt="" />
    <span className="title">video editing</span>
  </div>
</div>

        </div>
      
      </div>
    </div>
    </>
  )
}

export default Service