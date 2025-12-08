import "./Scroll.css";
import star from '../../assets/images/icon-03.png'

export const Scroll = () => {

  const contents = [
     "بهینه‌ سازی کلمات کلیدی",
     "لینک‌ سازی" ,
    "سئوی درون‌ صفحه‌ای" ,
    "تولید محتوا" ,
    "پژوهش و استراتژی" 
  ];


  return (
    <>
      <div className="carousel">
        <div className="group">
          {contents.map((content, index) => (
            <div key={index} className="card">
              <p>{content}</p>
              <img src={star} alt="" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="group">
            {contents.map((content, index) => (
            <div key={`clone-${index}`} className="card">
              <p>{content}</p>
              <img src={star} alt="" />
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
};
