import { Link } from "react-router-dom";
import "./Navbar.css";
import { SubMenu } from "./SubMenu";

export const Navbar = () => {
  const homeSubMenu = ["خانه یک", "خانه دو", "خانه سه - تم تاریک"];
  const servicesSubMenu = [
    "مارکتینگ محتوا",
    "مارکتینگ ایمیل",
    "استراتژی برند",
    " وب دیزاین",
    " توسعه سایت",
    "سئو  ",
  ];
  const pagesSubMenu = ["جزئیات"];
  const portfolioSubMenu = ["لیست بلاگ ها"];

  return (
    <>
      <div className="navbar-container">
        <ul>
          <li  className="menu-item">
            <Link className="navbar-link" to="/about">
              <span className="navbar-text">خانه</span>
            </Link>
            <SubMenu items={homeSubMenu} />
          </li>
          <li className="menu-item">
           <Link className="navbar-link" to="/about">
              <span className="navbar-text">صفحات</span>
            </Link>
            <SubMenu items={pagesSubMenu} />
          </li>
          <li className="menu-item">
            <Link className="navbar-link" to="/about">
              <span className="navbar-text">خدمات</span>
            </Link>
            <SubMenu items={servicesSubMenu} />
          </li>
          <li className="menu-item">
           <Link className="navbar-link" to="/about">
              <span className="navbar-text">پورتفولیو</span>
            </Link>
            <SubMenu items={portfolioSubMenu} />
          </li>
          <li className="menu-item">
            <Link className="navbar-link" to="/about">
              <span className="navbar-text">تماس با ما</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
