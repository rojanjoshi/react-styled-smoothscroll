import React from 'react'
import { BButton } from '../Buttonelements'


import { Infocontainer,
     Infowrapper,
      Inforow,
       Column1,
        Column2,
     Textwrapper,
    Topline,
    Heading,
    Subtitle,
    Btnwrap,
    Imgwrap,
    Img
    
} from './infoelements'

const Infosection = ({lightbg,id,imgStart,topline,lighttext,headline,darktext,description,buttonlabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
          <Infocontainer lightbg={lightbg} id={id}>
              <Infowrapper>
                  <Inforow imgStart={imgStart}>
                      <Column1>
                      <Textwrapper>
                          <Topline>{topline}</Topline>
                          <Heading lighttext={lighttext}>{headline}</Heading>
                          <Subtitle darktext={darktext}>{description}</Subtitle>
                          <Btnwrap>
                              <BButton to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact={true}
                              offset={-80}
                              primary={primary ? 1:0}
                              dark={dark ? 1:0}
                              dark2={dark2 ? 1:0}>{buttonlabel}</BButton>
                          </Btnwrap>
                      </Textwrapper>
                      </Column1>
                      <Column2>
                      <Imgwrap>
                      
                      <Img src={img} alt={alt}/>
                      </Imgwrap>
                      </Column2>
                  </Inforow>
              </Infowrapper>
              </Infocontainer>  
        </>
    )
}

export default Infosection
