import './Header.css'
import { Navbar } from "../navbar/Navbar"
import logo from '../../assets/images/logo.png'

export const Header = () =>{
    return(
        <>
        <header>
            <div className="logo-container">
                <img src={logo} alt="" />
                <span>WEBNOVA</span>        
            </div>
            <Navbar />
            <button>FREE QUOTE</button>
        </header>
        </>
    )
}