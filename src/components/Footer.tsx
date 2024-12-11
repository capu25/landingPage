import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <BsLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
      </div>
      <div className="footer-section-columns">
        <span>355-6444-8894</span>
        <span>hello@food.com</span>
        <span>press@food.com</span>
        <span>contact@food.com</span>
      </div>
      <div className="footer-section-columns">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
