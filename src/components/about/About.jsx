import "./About.css";
import about1 from "../../assets/images/about-01.jpg";
import about2 from "../../assets/images/about-02.jpg";

export const About = () => {
  return (
    <>
      <div className="about-section-container">
        <div className="left-section">
       <span>در باره ی ما</span>
          <p>کمک به رشد برند شما</p>
          <p>با سئو و بازاریابی دیجیتال مؤثر</p>
          <img src={about1} alt="" />
        </div>
        <div className="center-section">
          <span>از سال ۲۰۰۶</span>
          <p>
            تخصص ما، ساخت استراتژی‌های <a>بازاریابی دیجیتال</a> متناسب با
            کسب‌وکار شماست — تا رشد و موفقیت آنلاین‌تان تضمین شود. تیم ما با
            بهره‌گیری از سئو، مسیر موفقیت شما را هموار می‌کند.
          </p>
          <button>بیشتر بخوانید</button>
        </div>
        <div className="right-section">
         <span>28</span>
          <p> سال‌ تجربه تخصصی</p>
          <img src={about2} alt="" />
        </div>

            
      </div>
    </>
  );
};
