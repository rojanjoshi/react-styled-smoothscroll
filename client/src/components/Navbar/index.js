import React, {useState, useEffect} from 'react'
import { 
    Nav,
    Navbarcontainer,
    Navlogo,
    Mobileicon,
    Navmenu,
    Navitem,
    Navlinks,
    Navbtn,
    Navbtnlink} from './navbarelements'

import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = ({toggle}) => {

    const [scrollnav, setscrollnav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >= 160) {
            setscrollnav(true)
        }else{
            setscrollnav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    })

    const togglehome = () => {
        scroll.scrollToTop()
    }
    return (
     <>
     <IconContext.Provider value={{color:'#fff'}}>
     <Nav scrollnav={scrollnav}>
         <Navbarcontainer>
             <Navlogo to='/' onClick={togglehome}>dolla</Navlogo>
             <Mobileicon onClick={toggle}>
                 <FaBars />
             </Mobileicon>

             <Navmenu>
                 <Navitem>
                     <Navlinks to='about'
                     smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</Navlinks>
                 </Navitem>
                 <Navitem>
                     <Navlinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</Navlinks>
                 </Navitem>
                 <Navitem>
                     <Navlinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-10}>Services</Navlinks>
                 </Navitem>
                 <Navitem>
                     <Navlinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-10}>Sign Up</Navlinks>
                 </Navitem>
             </Navmenu>
             <Navbtn>
                 <Navbtnlink to='signin'>Sign In</Navbtnlink>
             </Navbtn>
         </Navbarcontainer>
     </Nav>
     </IconContext.Provider>
     </>
    )
}

export default Navbar
