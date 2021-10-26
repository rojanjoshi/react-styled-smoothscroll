import React from 'react'


import { Sidebarcontainer, Icon, Closeicon, Sidebarwrapper,Sidebarmenu, Sidebarlink, Sidebtnwrap, Sidebarroute } from './sidebarelement'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <Sidebarcontainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Closeicon></Closeicon>
            </Icon>
            <Sidebarwrapper>
                <Sidebarmenu>
                    <Sidebarlink to='about' onClick={toggle}>
                    About
                    </Sidebarlink>
                    <Sidebarlink to='discover' onClick={toggle}>
                    Discover
                    </Sidebarlink>
                    <Sidebarlink to='services' onClick={toggle}>
                    Services
                    </Sidebarlink>
                    <Sidebarlink to='signup' onClick={toggle}>
                    Sign Up
                    </Sidebarlink>
                </Sidebarmenu>
                <Sidebtnwrap>
                    <Sidebarroute to='/signin' onClick={toggle}>
                        Sign In
                    </Sidebarroute>
                </Sidebtnwrap>
            </Sidebarwrapper>
        </Sidebarcontainer>
    )
}

export default Sidebar