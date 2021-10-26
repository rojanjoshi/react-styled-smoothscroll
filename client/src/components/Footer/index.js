import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { Footercontainer, Footerwrap,
     Footerlinkcontainer, Footerlinkwrap, Footerlinkitem,
      Footerlinktitle, Footerlink, Socialmedia, Socialmediawrap, Sociallogo, Websiterights, Socialicon, Socialiconlink } from './footerelements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const togglehome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <Footercontainer>
                <Footerwrap>
                    <Footerlinkcontainer>
                        <Footerlinkwrap>
                            <Footerlinkitem>
                                <Footerlinktitle>About us</Footerlinktitle>
                                    
                                    <Footerlink to='/'>How it Works</Footerlink>
                                    <Footerlink to='/'>Testimonials</Footerlink>
                                    <Footerlink to='/'>Careers</Footerlink>
                                    <Footerlink to='/'>Investors</Footerlink>
                                    <Footerlink to='/'>Terms od Service</Footerlink>
                                
                            </Footerlinkitem>

                            <Footerlinkitem>
                                <Footerlinktitle>Contact Us</Footerlinktitle>
                                    
                                    <Footerlink to='/'>Contact</Footerlink>
                                    <Footerlink to='/'>Support</Footerlink>
                                    <Footerlink to='/'>Destinations</Footerlink>
                                    <Footerlink to='/'>Sponsorship</Footerlink>
                                    
                                
                            </Footerlinkitem>
                        </Footerlinkwrap>

                       

                        <Footerlinkwrap>
                            <Footerlinkitem>
                                <Footerlinktitle>About us</Footerlinktitle>
                                    
                                    <Footerlink to='/'>Videos</Footerlink>
                                    <Footerlink to='/'>Submit Video</Footerlink>
                                    <Footerlink to='/'>Ambassadors</Footerlink>
                                    <Footerlink to='/'>Agency</Footerlink>
                                    <Footerlink to='/'>Influencer</Footerlink>
                                
                            </Footerlinkitem>

                            <Footerlinkitem>
                                <Footerlinktitle>Social Media</Footerlinktitle>
                                    
                                    <Footerlink to='/'>Instagram</Footerlink>
                                    <Footerlink to='/'>Facebook</Footerlink>
                                    <Footerlink to='/'>Youtube</Footerlink>
                                    <Footerlink to='/'>Twitter</Footerlink>
                                    <Footerlink to='/'>Terms od Service</Footerlink>
                                
                            </Footerlinkitem>
        
                         
                        </Footerlinkwrap>

                     
                    </Footerlinkcontainer>

                    <Socialmedia>
                        <Socialmediawrap>
                            <Sociallogo to='/' onClick={togglehome}>dolla</Sociallogo>
                            <Websiterights>dolla © {new Date().getFullYear()} All rights reserved.</Websiterights>
                            <Socialicon>
                                <Socialiconlink href='/' target='_blank' aria-label="facebook">
                                    <FaFacebook />
                                    </Socialiconlink>

                                    <Socialiconlink href='/' target='_blank' aria-label="instagram">
                                    <FaInstagram />
                                    </Socialiconlink>

                                    <Socialiconlink href='/' target='_blank' aria-label="youtube">
                                    <FaYoutube />
                                    </Socialiconlink>

                                    <Socialiconlink href='//www.twitter.com' target='_blank' aria-label="twitter">
                                    <FaTwitter />
                                    </Socialiconlink>

                                    <Socialiconlink href='/' target='_blank' aria-label="Linkedin">
                                    <FaLinkedin />
                                    </Socialiconlink>
                            </Socialicon>
                        </Socialmediawrap>
                    </Socialmedia>
                </Footerwrap>
            </Footercontainer>
        </>
    )
}

export default Footer