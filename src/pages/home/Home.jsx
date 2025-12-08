import { About } from "../../components/about/About"
import { Clients } from "../../components/clients/Clients"
import { Footer } from "../../components/footer/Footer"
import { HeroContainer } from "../../components/herosection/HeroContainer"
import { Portfolio } from "../../components/portfolio/Porfolio"
import { Processes } from "../../components/processes/Processes"
import { Scroll } from "../../components/scroll/Scroll"
import { Services } from "../../components/services-section/Services"
import './Home.css'

export const Home =() =>{
    return(
        <>
            <HeroContainer />
            <About />
            <Scroll />
            <Services />
            <Clients />
            <Portfolio />
            <Processes />
            <Footer />
        </>
    )
}