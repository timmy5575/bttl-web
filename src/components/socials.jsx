import React from 'react'
import { Link } from "react-router-dom";
import './socical.css'
import ig from '../assets/instagram.png'
import tt from '../assets/tik-tok.png'
import wh from '../assets/whatsapp.png'

const Socials = () => {
  return (
   <>
   <div className='ss'>
   <div className='Social'>
    <h1>my Socials</h1>
    <div className='so'>
    <a
      href="https://www.instagram.com/shotbybttl"
      target="_blank"
      rel="noopener noreferrer"
    > 
      <img src={ig} alt="ig"  /> 
</a>

     <a
      href="https://www.tiktok.com/@shotbybttl?_r=1&_d=el45khk3k3i3dm&sec_uid=MS4wLjABAAAAqcnm6k9nRtR6aQ4Lge_9B2I6hpO0WIqagawuFegthKCsHKHUwwb0NFYuu6V4UMsU&share_author_id=7201645303315923974&sharer_language=en&source=h5_m&u_code=e6e7aehb5392ia&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=88314FD3-7872-4321-A322-078AE52251F9&user_id=7201645303315923974&sec_user_id=MS4wLjABAAAAqcnm6k9nRtR6aQ4Lge_9B2I6hpO0WIqagawuFegthKCsHKHUwwb0NFYuu6V4UMsU&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233"
      target="_blank"
      rel="noopener noreferrer"
    > 
      <img src={tt} alt="tt"  /> 
</a>

     <a
      href="https://wa.me/message/SOPR47P3RV3ZI1"
      target="_blank"
      rel="noopener noreferrer"
    > 
      <img src={wh} alt="ig"  /> 
</a>
    </div>
     <Link to="/contant">
    <button id='but'> get in touch</button>
    </Link>
   </div>
   </div>
   </>
  )
}

export default Socials