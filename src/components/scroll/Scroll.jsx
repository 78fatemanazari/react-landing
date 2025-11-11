import "./Scroll.css";

export const Scroll = () => {

  const contents = [
     "بهینه‌سازی کلمات کلیدی",
     "لینک‌سازی" ,
    "سئوی درون‌صفحه‌ای" ,
    "تولید محتوا" ,
    "پژوهش و استراتژی" 
  ];


  return (
    <>
      <div className="carousel">
        <div className="group">
          {contents.map((content, index) => (
            <div key={index} className="card">{content}</div>
          ))}
        </div>
        <div aria-hidden="true" className="group">
            {contents.map((content, index) => (
            <div key={`clone-${index}`} className="card">{content}</div>
          ))}
        </div>
       
      </div>
    </>
  );
};
