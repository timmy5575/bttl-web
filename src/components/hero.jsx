import "./hero.css"
import { Link } from "react-router-dom";
import Logo from "../assets/BTTL.png"
const Hero = () => {
  return (
    <>
    <div className="hero">

      <div className="f-1">
     <h1>Welcome to BTTL </h1>
    <p>better than the last</p>
    <p>|mobile photography & videography. real moments. clean edits. captured with intention, edited with purpose.</p>
         <Link to="/gallary">
    <button id='but'> View My Gallery</button>
    </Link>
    </div>
        <div className="f-2">
      <img  src={Logo} alt="" />
    </div>

    </div>

    </>
  )
}

export default Hero