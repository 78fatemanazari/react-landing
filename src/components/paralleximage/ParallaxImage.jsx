import './ParallaxImage.css'
import bgImg from "../../assets/images/bg-01.jpg";



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
          ► 
        </button>
    </div>
      <p>قدرت <span>سئو و بازاریابی دیجیتال</span> در کنار هم</p>
      </div>
      </div>
    </>
  );
};
