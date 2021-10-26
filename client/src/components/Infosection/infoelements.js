import styled from "styled-components";

export const Infocontainer = styled.div`
color: #fff;
background: ${({lightbg}) => (lightbg ? '#f9f9f9' : '#010606')};

@media screen and (max-width: 768px){
    padding: 100px 0;
}
`

export const Infowrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`


export const Inforow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: ${({imgStart}) => (imgStart ? 'flex-end' : 'center')};

align-items: center;
/* text-align:  ${({imgStart}) => (imgStart ? 'right' : 'left')}; */
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    /* grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col1' 'col2 col2'`)}; */
    grid-template-areas: 'col1 col1' 'col2 col2';
    
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const Textwrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

`

export const Topline = styled.div`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lighttext}) => (lighttext ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 768px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darktext}) => (darktext ? '#010606' : 'f7f8fa')};
`

export const Btnwrap = styled.div`
display: flex;
justify-content: flex-start;
`

export const Imgwrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
margin:  0 0 10px 0;
padding-right: 0;

`