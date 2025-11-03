import { About } from "../about/About"
import { HeroContainer } from "../herosection/HeroContainer"
import { Scroll } from "../scroll/Scroll"
import './Home.css'

export const Home =() =>{
    return(
        <>
            <HeroContainer />
            <About />
            <Scroll />
        </>
    )
}