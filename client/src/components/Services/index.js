import React from 'react'
import icon1 from '../../images/svg-4.svg'
import icon2 from '../../images/svg-5.svg'
import icon3 from '../../images/svg-6.svg'
import { Servicescontainer,
Servicesh1,
Serviceswrapper,
Servicescard,
Servicesicon,
Servicesh2,
Servicesp } from './serviceselements'

const Services = () => {
    return (
        <>
            <Servicescontainer id='services'>
                <Servicesh1>
                    Our Services
                </Servicesh1>
                <Serviceswrapper>
                    <Servicescard>
                        <Servicesicon src={icon1}/>
                        <Servicesh2>Reduce Expenses</Servicesh2>
                        <Servicesp>We help reduce your fees and increase your overall revenue</Servicesp>
                    </Servicescard>
                    <Servicescard>
                        <Servicesicon src={icon2}/>
                        <Servicesh2>Virtual Offices</Servicesh2>
                        <Servicesp>You can access our platform online anywhere in the world</Servicesp>
                    </Servicescard>
                    <Servicescard>
                        <Servicesicon src={icon3}/>
                        <Servicesh2>Premium Benefits</Servicesh2>
                        <Servicesp>Unlock our special membership card that returns 5% cash back</Servicesp>
                    </Servicescard>
                </Serviceswrapper>
            </Servicescontainer>
        </>
    )
}

export default Services