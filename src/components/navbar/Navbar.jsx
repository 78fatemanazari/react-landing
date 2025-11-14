import './Navbar.css'
import { SubMenu } from './SubMenu';

export const Navbar = () => {
  const homeSubMenu = ["خانه یک", "خانه دو", "خانه سه - تم تاریک"];
  const servicesSubMenu = ["مارکتینگ محتوا", "مارکتینگ ایمیل", "استراتژی برند", " وب دیزاین", " توسعه سایت", "سئو  "];
  const pagesSubMenu = ["جزئیات"];
  const portfolioSubMenu = ["لیست بلاگ ها"];


  return (
    <>
      <div className="navbar-container">
        <ul>
        <li className='menu-item'>
          
          <Link to='/about'><span>خانه</span></Link>
          <SubMenu items={homeSubMenu} />
        </li>
        <li className='menu-item'>
          <span>صفحات</span>
          <SubMenu items={pagesSubMenu} />
        </li>
        <li className='menu-item'>
          <span>خدمات</span>
          <SubMenu items={servicesSubMenu} />
        </li>
        <li className='menu-item'>
          <span>پورتفولیو</span>
          <SubMenu items={portfolioSubMenu} />
        </li>
        <li className='menu-item'>
          <span>تماس با ما</span>
        </li>
      </ul>
      </div>
    </>
  );
};
