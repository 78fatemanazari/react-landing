import './Footer.css'
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () =>{
    return(
        <>
        <footer>
            <p>ما معتقدیم که انتخاب <span>آژانس بازاریابی دیجیتال</span> مناسب اهمیت دارد.</p>
            <div className="links-container">
                <div className="address">
                    <span>آدرس</span>
                    <p>ایران، تهران - خیابان شهید فلاحی، پلاک 25</p>
                </div>
                <div className="contact">
                    <span>تماس بگیرید</span>
                    <p className='em'>webnova@gmail.com</p>
                    <p className='ph'>0098933774323</p>
                </div>
                <div className="socials">
                    <span>صفحات اجتماعی</span>
                    <ul>
                        <li>فیسبوک</li>
                        <li>انستاگرام</li>
                        <li>توییتر</li>
                    </ul>
                </div>
                <div className="newsletter">
                    <span>خبرنامه</span>
                    <p>برای اطلاع از تخفیف‌ها و پیشنهادات، عضو شوید.</p>
                    <div className='input-container'>
                        <input type="text" placeholder="با ما عضو شوید" />
                        <FaTelegramPlane className="telegram-icon" />
                    </div>
                </div>
            </div>
            <p className='copy-right'>© 2025 وب نوا توسط قالب‌های <span>طراحی وب‌سایت</span> پشتیبانی می‌شود</p>
        </footer>
        </>
    )
}