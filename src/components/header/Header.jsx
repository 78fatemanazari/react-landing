import { useEffect, useState } from "react";
import "./Header.css";
import { Navbar } from "../navbar/Navbar";
import logo from "../../assets/images/logo.png";
import logoBlack from "../../assets/images/black-logo.png"
import { Button } from "../buttons/Button";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="logo-container">
        <img src={scrolled ? logoBlack : logo} alt="logo" />
      </div>
      <Navbar />
      <Button />
    </header>
  );
};
