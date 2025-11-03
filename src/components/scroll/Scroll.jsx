import './Scroll.css'

export const Scroll = () =>{

   
    return(
        <>
            <div className="carousel">
                <div className="group">
                    <div className="card">بهینه‌سازی کلمات کلیدی</div>
                    <div className="card">لینک‌سازی</div>
                    <div className="card">سئوی درون‌صفحه‌ای</div>
                    <div className="card">تولید محتوا</div>
                    <div className="card">پژوهش و استراتژی</div>
                </div>
                <div aria-hidden className="group">
                    <div className="card">بهینه‌سازی کلمات کلیدی</div>
                    <div className="card">لینک‌سازی</div>
                    <div className="card">سئوی درون‌صفحه‌ای</div>
                    <div className="card">تولید محتوا</div>
                    <div className="card">پژوهش و استراتژی</div>
                </div>
            </div>
        </>
    )
}