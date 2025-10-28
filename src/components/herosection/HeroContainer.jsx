import "./Heroes.css";
import bgVideo from "../../assets/images/bgvideo.mp4"
import { Header } from "../header/Header";
import { HeroSection } from "./HeroSection";

export const HeroContainer = () => {
  return (
    <>
      <div className="hero-container">
        <video
          className="background-video"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
         <div className="overlay"></div>
         <Header />
         <HeroSection />
      </div>
    </>
  );
};
