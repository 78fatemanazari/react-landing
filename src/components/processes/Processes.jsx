import "./Processes.css";
import { ParallaxImage } from "../paralleximage/ParallaxImage";

export const Processes = () => {
  const desc = [
    {
      title: "تحلیل وبسایت ها",
      desc: "فرآیند ما طوری طراحی شده است که در هر مرحله همراه شما باشد؛ از مشاوره اولیه تا توسعه‌ی استراتژی شخصی‌سازی‌شده.",
      number: "۰۱",
    },
    {
      title: "برنامه‌ریزی محتوا",
      desc: "برنامه‌ریزی محتوا فرآیندی استراتژیک برای سازمان‌دهی، تولید و مدیریت محتوا است تا با اهداف بازاریابی هم‌راستا باشد.",
      number: "۰۲",
    },
    {
      title: "گزارش‌دهی و تحلیل",
      desc: "گزارش‌دهی و تحلیل به فرآیند جمع‌آوری، سازمان‌دهی، تفسیر و ارائه داده‌ها برای ارزیابی عملکرد اشاره دارد.",
      number: "۰۳",
    },
  ];

  return (
    <section className="processes-section">
      <div className="processes-container">
        <div className="p-right-p">
          <span>فرآیند ما</span>
          <h2>
            فرآیند پشت <span>موفقیت ما</span> در بازاریابی دیجیتال
          </h2>
          <p>
            فرآیند ما طوری طراحی شده است که در هر مرحله همراه شما باشد؛ از
            مشاوره اولیه تا توسعه‌ی استراتژی شخصی‌سازی‌شده.
          </p>
          <button>بیشتر بخوانید</button>
        </div>

        <div className="p-left-p-wrapper">
          {desc.map((item, index) => (
            <div key={index} className="p-left-p">
              <div className="p-left-p-container">
                <h3>مراحل</h3>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <h2 className="num">{item.number}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ParallaxImage />
    </section>
  );
};
