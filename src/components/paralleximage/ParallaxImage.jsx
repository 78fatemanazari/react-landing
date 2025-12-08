import './ParallaxImage.css'
import bgImg from "../../assets/images/bg-01.jpg";
import { FaPlay } from "react-icons/fa";



export const ParallaxImage = () => {
  return (
    <>
    <div className="parallax-wrapper">
      <div
        className="bg-img"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="overlay-content">
         <div>
      <button className="play-button">
          <FaPlay /> 
        </button>
    </div>
      <h2>قدرت ترکیبی
     <span>    سئو و بازاریابی دیجیتال</span>
         </h2>
      </div>
      </div>
    </>
  );
};
