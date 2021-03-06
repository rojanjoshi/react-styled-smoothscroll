import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
// import { IconContext } from 'react-icons/lib'




export const Nav = styled.nav`
    background: ${({scrollnav}) => (scrollnav ? '#000' : 'transparent')};
    
    height: 90px;
    margin-top: -80px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    top:0;
    Z-index:999;
    

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const Navbarcontainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width:100%;
    padding: 0 24px;
    max-width:1600px;
    
`

export const Navlogo = styled(LinkR)`
    color:#fff;
    justify-self: flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left:30px;
    font-weight: bold;
    text-decoration:none;
`
export const Mobileicon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        margin-right: 10px;
    }
`
export const Navmenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align:center;
    margin-right: 40px;

    @media screen and (max-width:768px){
        display:none
    }
`

export const Navitem = styled.li`
    height:80px;
`

export const Navlinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`
export const Navbtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 40px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Navbtnlink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

