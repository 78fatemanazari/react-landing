import './Services.css'
import { useState } from "react";
import { FaArrowLeft  } from "react-icons/fa";

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/services-01.jpg",
    "/images/services-02.jpg",
    "/images/services-03.jpg",
    "/images/services-04.jpg",
  ];

  const titles = [
    { title: "بازاریابی محتوایی" },
    { title: "بازاریابی ایمیلی" },
    { title: "طراحی وب‌سایت" },
    { title: "استراتژی برند" },
  ];

  return (
    <div className="services-container">
         <div className="texts-container">
          <span className='title-span'>خدمات</span>
          <p>
            کیفیت و برتری در 

            <span className='highlight-span'>نمونه‌کارها</span>
          </p>
        </div>
      <div className="samples-container">
        <div className="descriptions-container">
        {titles.map((item, index) => (
          <div 
            key={index} 
            className="desc-item" 
            onMouseEnter={() => setActiveIndex(index)}
          >
            <span>{index + 1}</span>
            <p>{item.title}</p>
            <FaArrowLeft className='arrow-icon'  size={20} />
          </div>
        ))}
      </div>

      <div className="images-container">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt="" 
            className={activeIndex === index ? "active" : ""}
          />
        ))}
      </div>
      </div>
    </div>
  );
};
