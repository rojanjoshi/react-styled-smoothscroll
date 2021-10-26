import React, {useState} from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/Herosection';
import Infosection from '../components/Infosection';
import Services from '../components/Services';
import { homeobjone, homeobjtwo, homeobjthree } from '../components/Infosection/data';
import Footer from '../components/Footer';




const Home = () => {

    const [isOpen, setisopen] = useState(false);

    const toggle = () => {
        setisopen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Infosection {...homeobjone}/>
            <Infosection {...homeobjtwo}/>
            <Services />
            <Infosection {...homeobjthree}/>
            <Footer />
        </div>
    )
}

export default Home
