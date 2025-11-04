import { About } from "../about/About"
import { Clients } from "../clients/Clients"
import { HeroContainer } from "../herosection/HeroContainer"
import { Scroll } from "../scroll/Scroll"
import { Services } from "../services-section/Services"
import './Home.css'

export const Home =() =>{
    return(
        <>
            <HeroContainer />
            <About />
            <Scroll />
            <Services />
            <Clients />
        </>
    )
}