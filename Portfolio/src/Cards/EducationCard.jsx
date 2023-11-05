import React from 'react'
import styled from 'styled-components'





const Section = styled.div`     
   display:flex;
   justify-content: center;
   align-items: center;
   
    /* background: darkgreen;   */
    
`;
const Container = styled.div`

   width:100%;
   height:90%;
    display:flex;
   justify-content: center;
   
   flex-direction: column;
    gap:0.5vh;
    padding:3vh;
    text-align: center;
    border-radius: 20px;


background: rgba(151, 134, 134, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(151, 134, 134, 0.3);
transition: 350ms ease-in-out;
   /* background: darkcyan; */

    
@media (hover: hover) {


    &:hover{
        scale:1.02;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
}    
    @media (max-width: 900px) {    
      
      width:40vh;
      gap:0vh;
      height: max-content;
      padding:1.5vh;
      line-height: 12.5px;
    
    }
  

`;
const Head = styled.div`
    
      
    
`;
const School = styled.div`
    font-size: 3vh;

    font-weight: 500;
    @media (max-width: 900px) {    
      
        font-size: 2vh;
        margin-bottom: 3px;
        line-height: 20px;
    
    }
`;
const Degree = styled.div`
   font-size: 2vh;
    font-weight: 300;
    @media (max-width: 900px) {    
      
      font-size: 1.2vh;
  
  }
`;
const Description = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
    @media (max-width: 900px) {    
      
      font-size: 0.55rem;
  
  }
`;

const Body = styled.div`
    
`;
const Grade = styled.div`
    font-size: 2vh;
    font-weight: 300;
    @media (max-width: 900px) {    
      
      font-size: 0.6rem;
  
  }
`;


const EducationCard = ({ education }) => {
    return (
        <Section>
            <Container>
                <Head>
                    <School>{education.school}</School>
                    <Degree>{education.degree}</Degree>
                    <Grade>{education.grade}</Grade>
                </Head>                
                <Body>
                    <Description>{education.desc}</Description>
                </Body>              
            </Container>
        </Section>
    )
}

export default EducationCard