import React from 'react'
import styled from 'styled-components'
import WordCloud from './WordCloud';
import { skills } from '../data/Skills';
import SkillsCard from '../Cards/SkillsCard';
// import SkillsCard from '../Cards/SkillsCard';




const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position:relative;
  overflow: hidden;
  
  @media (max-width: 900px) {    
    margin-top: 70px;
  }
`;
const Container = styled.div`
   height: 100%;
  width:1400px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  /* scroll-snap-align: center;  */

  


  @media (max-width: 900px) {    
    width: 100%;
    height: 100%;
    margin:20px;  
    padding:0px;   
    flex-direction :column ;
  }
`;
const Icons = styled.div`  
  display:flex;
  flex:1;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;  
  gap:10px;  
 
  height:max-content;
  /* background: palegoldenrod; */
    
  @media (max-width: 900px) {    
    gap:0px; 
  }
  
`;
const Right = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  /* padding-left: 20px; */
  flex:1;

  @media (max-width: 900px) {    
    width:50vh;
    height:50vh;
    scale:0.55;
    /* background: paleturquoise; */
    margin-bottom:10vh;
    margin-right: 1vh;
    margin-left: 1vh;
    margin-top: 5vh;
    /* align-items:start; */
    /* flex:3; */
    padding:0;
    

  }
  
`;
const Wrapper = styled.div`
display:flex;
  align-items: center;
  justify-content:center;
  height: 70vh;
  backdrop-filter: blur(17px) saturate(126%);
    -webkit-backdrop-filter: blur(17px) saturate(126%);
    background-color: rgba(21, 25, 21, 0.78);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  

    @media (max-width: 900px) {    
    flex-direction: column;
    gap:20vh;
    backdrop-filter:none ;
    -webkit-backdrop-filter:none;
    background-color:transparent ;
    border-radius:0 ;
    border: none;
    margin:40px;
  }
`;

const Left = styled.div`
  
  
`;
const Content = styled.div`
  text-align: center;
  font-weight  :bolder ;
  font-size: 10vh;
  margin-bottom: 20px;
  color:transparent;
  -webkit-text-stroke: 1px #8ebf42;
  text-transform: uppercase;
  letter-spacing: 3px;
  
  
`;

const Skills = () => {
  return (
    <Section id='skills'>
        <Container>
            {/* <Wrapper> */}
            <Left>
              <Content>Skills</Content>
              <Icons>
                { skills.map((skill) => ( <SkillsCard skill={skill} /> )) }
              </Icons>
            </Left>
          
          <Right>            
            <WordCloud/>
          </Right>
          {/* </Wrapper> */}
        </Container>
      
    </Section>
  )
}

export default Skills