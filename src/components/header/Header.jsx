import './Header.css'
import { Navbar } from "../navbar/Navbar"
import logo from '../../assets/images/logo.png'
import { Button } from '../buttons/Button'

export const Header = () =>{
    return(
        <>
        <header>
            <div className="logo-container">
                <img src={logo} alt="" />
                <span>وب نوا</span>        
            </div>
            <Navbar />
            <Button />
        </header>
        </>
    )
}