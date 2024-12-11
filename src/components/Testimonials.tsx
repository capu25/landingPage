import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ab
          expedita, recusandae porro molestiae suscipit praesentium dolor
          cupiditate aperiam accusamus perspiciatis voluptatibus.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem aut
          cumque exercitationem culpa expedita! Consectetur obcaecati explicabo
          soluta ratione amet.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jhon Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
