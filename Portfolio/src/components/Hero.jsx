import React from 'react'
import styled from 'styled-components'
import Blob from './Blob';
import { Bio } from '../data/Self';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';




const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  overflow: hidden;

  
  @media (max-width: 900px) {
    flex-direction:column;
    width:100%;
  }
 
`;

const Container = styled.div`  
  height: 100%;
  width:1400px;
  display:flex;
  justify-content: space-between;
  /* scroll-snap-align: center; */
  
  @media (max-width: 900px) {
    width:100%;
    flex-direction:column;
    justify-content:center;
    
  }
  
`;

const Left = styled.div`
 
  display:flex;
  flex:2;
  flex-direction: column;
  justify-content: center;
  gap:15px;  
  z-index: 1;
  @media (max-width: 900px) {    
    width: 50vh; 
    height:40vh;
    padding: 15px;
    text-align:left;
  }
`;
const Start = styled.div`
  color:#ffcb9a;
  font-size: 1.5rem;
  line-height: 1px;
  padding: 0;
  margin: 0;
  @media (max-width: 900px) {    
    font-size:2vh;
  }
`;


const Main = styled.h1`
  color:#ffcb9a;
  font-size: 5vh;
  font-weight: bolder;
  line-height: 50px;
  @media (max-width: 900px) {    
    font-size:3.5vh;
    line-height: 10px;
  }
`;
const SubMain = styled.h2`
  font-size: 4vh;
  @media (max-width: 900px) {
    font-size: 3vh;
    
  }
`;


const Introduction = styled.div`
font-size: 1.2rem;
  @media (max-width: 900px) {
    width:90%;
    font-size: 1.8vh;
  }
`;

const Links = styled.div`
display: flex;
gap:10px;
z-index:1;
  @media (max-width: 900px) {
    width:90%;
    font-size: 2vh;
  }
`;

const Anchor = styled.a`
  width: 200px;
  padding: 15px;
  background-color: #50B9B7;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;  
  font-size  :16px;
  font-weight: 1000;
  transition: 0.5s ease;
  text-align: center;
  text-decoration: none;


  @media (hover : hover) { 
    &:hover{
    scale:1.05;
    background-color: #D9B08C;
    }
  }  
  

  @media (max-width: 900px) {    
      width: 150px;
    
    }
  
`;

const Right = styled.div`
  flex:3;
  display:flex;
  align-items: center;
  justify-content: center;
  position:relative;
  

  @media (max-width: 900px) {    
    width: 50vh; 
    height:40vh;        
    padding:0;
    margin:0 auto;    
    border: none;    
  }
`;

const Coding = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;  
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media (max-width: 900px) {    
    width: 55vh;   
    margin-bottom: 10vh;
  }
  
  `;
const Bloob = styled.div`
  background: #000;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {  
         display: none; 
        
      
      
  }

  /* z-index: -1; */
  
`;



const Hero = () => {
  return (

    <>
    <Section id='hero'>     
      
     
      <Container>
        <Left>
          <Start>Hi I'am</Start>
          <Main>{Bio.name}</Main>
          <SubMain>I am {Bio.roles[0]}</SubMain>
          <Introduction>{Bio.intoduction}</Introduction>
          <Links>
              <Anchor href={Bio.resume}> Check Resume</Anchor>
              <Anchor href={Bio.linkedIn} target='_blank'>LinkedIn</Anchor>
          </Links>
          
        </Left>
        <Right>
          <Coding src='../img/coding.png'/>
          <Bloob>
            <Blob/>            
          </Bloob>
        </Right>
      </Container>
      
    </Section>    
      <Education />
      <Projects/>
      <Skills/>
      <Contact/>
    
    </>
  )
}

export default Hero