import "./Processes.css";

export const Processes = () => {
  const desc = [
    { title: "تحلیل وبسایت ها", desc: "فرآیند ما طوری طراحی شده است که در هر مرحله همراه شما باشد؛ از مشاوره اولیه تا توسعه‌ی استراتژی شخصی‌سازی‌شده.", number:"۰۱" },
    { title: "برنامه‌ریزی محتوا", desc: "برنامه‌ریزی محتوا فرآیندی استراتژیک برای سازمان‌دهی، تولید و مدیریت محتوا است تا با اهداف بازاریابی هم‌راستا باشد.", number:"۰۲" },
    { title: "گزارش‌دهی و تحلیل", desc: "گزارش‌دهی و تحلیل به فرآیند جمع‌آوری، سازمان‌دهی، تفسیر و ارائه داده‌ها برای ارزیابی عملکرد اشاره دارد.", number:"۰۳" },
  ];

  return (
    <section className="processes-section">
      <div className="processes-container">
        <div className="p-right-p">
          <span>فرآیند ما</span>
          <h3>
            فرآیند پشت <span>موفقیت ما</span> در بازاریابی دیجیتال
          </h3>
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
                <span>مراحل</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="num">{item.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
