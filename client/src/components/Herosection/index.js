import React, {useState} from 'react'

import Video from '../../videos/video.mp4'
import { Herocontainer, Herobg, Videobg, Herocontent, Heroh1, Herop, Herobtnwrapper, ArrowForward, ArrowRight } from './heroelements'
import { BButton } from '../Buttonelements'


const HeroSection = () => {

    const [hover, sethover] = useState(false)

    const onhover = () => {
        sethover(!hover)
    }


    return (
        <Herocontainer id='home'>
            <Herobg>
                <Videobg autoPlay loop muted src={Video} type='video/mp4'></Videobg>
            </Herobg>
            <Herocontent>
                <Heroh1>Virtual Banking Made easy</Heroh1>
                <Herop>Sign up for a new account today and receive $250 in credit towards your next payment</Herop>
                <Herobtnwrapper>
                    <BButton to='signup' onMouseEnter={onhover} onMouseLeave={onhover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Get Started {hover ? <ArrowForward /> : <ArrowRight/>}</BButton>
                </Herobtnwrapper>
            </Herocontent>
        </Herocontainer>
    )
}

export default HeroSection
