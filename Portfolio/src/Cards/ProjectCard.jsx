import React from 'react'
import styled from 'styled-components'
import { projects } from '../data/Self';




const Section = styled.div`     
   display:flex;
   justify-content: center;
   align-items: center;
    /* background: darkgreen; */
    
    
    
`;
const Container = styled.div`
z-index: 1; 
    /* background: darkcyan; */
    width:60%;
    display:flex;
   justify-content: center;
   flex-direction: column;
    gap:1vh;
    padding:3vh;
    backdrop-filter: blur(7px) saturate(180%);
    -webkit-backdrop-filter: blur(7px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    
    @media (max-width: 900px) {    
      
      width:40vh;
      gap:0vh;
    
    }
  

`;
const Head = styled.div`
      @media (max-width: 900px) {    
            line-height: 22px;
      }
      
    
`;
const Name = styled.div`
    font-size: 5vh;
    font-weight: 500;
    @media (max-width: 900px) {    
      
        font-size: 3vh;
    
    }
`;
const Category = styled.div`
     font-size: 2vh;
    font-weight: 300;
    @media (max-width: 900px) {    
      
      font-size: 2vh;
  
  }
`;
const Description = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    @media (max-width: 900px) {    
      
      font-size: 2vh;
  
  }
`;

const Body = styled.div`
    
`;

const Anchor = styled.a`
    width: 200px;
  padding: 15px;
  background-color: #50B9B7;
  color: #062223;
  border: none;
  border-radius: 5px;
  cursor: pointer;  
  font-size  :16px;
  font-weight: 900;
  transition: 0.5s ease;
  text-align: center;
  text-decoration: none;


  @media (hover : hover) { 
    &:hover{
    scale:1.05;
    background-color: #D9B08C;
    }
  }  
`;

const Tech = styled.div`
    display:flex;
    gap:1vh;
    font-size: 1.5rem;   
    justify-content: center;
    align-items: center;
    height:10vh;
    width:70vh;    
    border-radius: 10px;
    padding:2vh;   
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);  

    &:hover{
        scale:1.01;
    }
    @media (max-width: 900px) {    
      
      font-size: 2vh;
      height:max-content;
      width:35vh; 
  }
    
`;

const Content = styled.div`
    display:flex;
    display:flex;
   justify-content: center;
    align-items: center;
    margin:2vh
`;
const TechSpan = styled.div`
    
    display:flex;
    gap:3vh;
    line-height: 1.5vh;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 90vh;
    
    
    
    
`;

const ProjectCard = ({ project }) => {
    return (
        <Section>
            <Container>
                <Head>
                    <Name>{project.title}</Name>
                    <Category>Category: {project.category}</Category>
                </Head>                
                <Body>
                    <Description>{project.description}</Description>
                </Body>
                <Content>
                <Tech>                   
                    <TechSpan> {project.tags.map((skill)=>(<span>{skill}</span>))} </TechSpan>                    
                </Tech>

                </Content>
                <Anchor href={project.github}>Github</Anchor>
            </Container>
        </Section>
    )
}

export default ProjectCard