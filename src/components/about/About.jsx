import "./About.css";
import about1 from "../../assets/images/about-01.jpg";
import about2 from "../../assets/images/about-02.jpg";
import { useEffect } from "react";

export const About = () => {

  useEffect(() => {
    const handleScroll = () => {
      const boxes = document.querySelectorAll(".section");
      const target = window.innerHeight * 0.5;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < target) {
          const newClass = box.getAttribute('data-index')
          box.classList.add(newClass);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

  
    handleScroll(); 
  }, []);


  return (
    <>
      <div className="about-section-container">
        <div className="left-section section" data-index="anime-1">
       <span>در باره ی ما</span>
          <p>کمک به رشد برند شما</p>
          <p>با سئو و بازاریابی </p>
          <p>دیجیتال مؤثر</p>
          <img src={about1} alt="" />
        </div>
        <div className="center-section section" data-index="anime-2">
          <span>از سال ۲۰۰۶</span>
          <p>
            تخصص ما، ساخت استراتژی‌های <a>بازاریابی دیجیتال</a> متناسب با
            کسب‌وکار شماست — تا رشد و موفقیت آنلاین‌تان تضمین شود. تیم ما با
            بهره‌گیری از سئو، مسیر موفقیت شما را هموار می‌کند.
          </p>
          <button>بیشتر بخوانید</button>
        </div>
        <div className="right-section section" data-index="anime-3">
         <span>28</span>
          <p> سال‌ تجربه تخصصی</p>
          <img src={about2} alt="" />
        </div>

            
      </div>
    </>
  );
};










