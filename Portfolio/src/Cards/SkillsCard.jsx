
import React from 'react'
import styled from 'styled-components'




const Section = styled.div`     
     
     scroll-snap-align: center;
    
  
`;

const Container = styled.div`     
     display:flex;
     justify-content:center;
     align-items: center;
     scroll-snap-align: center;
     flex-direction: column;  
     margin:20px; 
     height:12vh;
      width:12vh;
         
     
     &:hover{
      scale:1.1;
     }

     @media (max-width: 900px) {    
      height:6vh;
      width:6vh;
      }
    
    /* background: paleturquoise; */
   

  
`;
const Image = styled.img`     
   height:10vh;
   width:10vh;     
   margin:10px;

   @media (max-width: 900px) {    
          height:5vh;
          width:5vh;
          margin:0;
      }
`;
const Name = styled.div`
  text-align:center;
  font-size: 2vh;
  margin:5px;
  font-weight :bold ;
  @media (max-width: 900px) {    
          font-size: 3.5vw;
      }
`;
const SkillsCard = ({ skill }) => {
return (
        <Section>
          <Container>
            <Image src={skill.img} alt={skill.name}/>           
            <Name>
              {skill.name}  
            </Name>
            
          </Container>               
        </Section>
    )
}

export default SkillsCard