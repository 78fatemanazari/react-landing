import { useEffect, useState } from "react";
import "./Portfolio.css";

export const Portfolio = () => {
  const [startIndex, setStartIndex] = useState(0);

  const images = [
    {
      src: "/images/portfolio-01.jpg",
      title: "پروژه اول",
      desc: "توضیح اول",
      link: "/p1",
    },
    {
      src: "/images/portfolio-02.jpg",
      title: "پروژه دوم",
      desc: "توضیح دوم",
      link: "/p2",
    },
    {
      src: "/images/portfolio-03.jpg",
      title: "پروژه سوم",
      desc: "توضیح سوم",
      link: "/p3",
    },
    {
      src: "/images/portfolio-04.jpg",
      title: "پروژه چهارم",
      desc: "توضیح چهارم",
      link: "/p4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-title">
          <span> پورتفولیو ما</span>
          <h2><span>داستان</span> های موفقیت ما</h2>
        </div>

        <div className="porfolio-img-container">
          {visibleImages.map((item, index) => (
            <div className="image-card" key={index}>
              <img key={item.src} src={item.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};





