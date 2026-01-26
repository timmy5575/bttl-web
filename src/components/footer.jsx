import { NavLink } from "react-router-dom";
import "./footer.css";
import logo from '../assets/BTTL.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        
        <div className="footer-image">
          <img src={logo} alt="" />
        </div>

        <div className="footer-content">
          <h2>BTTL</h2>

          <p className="footer-tagline">better than the last</p>

          <p className="footer-desc">
            mobile photography & videography. real moments. clean edits.
            captured with intention, edited with purpose.
          </p>

          <nav className="footer-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallary">Gallery</NavLink>
            <NavLink to="/contant">Contact me</NavLink>
          </nav>

          <div className="footer-socials">
            <a href="https://www.instagram.com/shotbybttl">Instagram</a>
            <a href="https://www.tiktok.com/@shotbybttl?_r=1&_d=el45khk3k3i3dm&sec_uid=MS4wLjABAAAAqcnm6k9nRtR6aQ4Lge_9B2I6hpO0WIqagawuFegthKCsHKHUwwb0NFYuu6V4UMsU&share_author_id=7201645303315923974&sharer_language=en&source=h5_m&u_code=e6e7aehb5392ia&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=88314FD3-7872-4321-A322-078AE52251F9&user_id=7201645303315923974&sec_user_id=MS4wLjABAAAAqcnm6k9nRtR6aQ4Lge_9B2I6hpO0WIqagawuFegthKCsHKHUwwb0NFYuu6V4UMsU&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233">TikTok</a>
            <a href="https://wa.me/message/SOPR47P3RV3ZI1">WhatsApp</a>
          </div>

          {/* Optional phone numbers */}
          <div className="footer-phones">
            <span>+234 9031391991</span>
            <span>+234 9028136354</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BTTL</p>
      </div>
    </footer>
  );
};

export default Footer;
