import React from 'react'
import styled from 'styled-components'
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../css/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {Navigation ,Mousewheel ,Autoplay} from 'swiper/modules';

import { projects } from '../data/Self';
import ProjectCard from '../Cards/ProjectCard';




const Section = styled.div`
     height:100vh;
     scroll-behavior: smooth;
     scroll-snap-align: center;
     display:flex;
     align-items:center;
     justify-content: center;   

     @media (max-width: 900px) {    
      margin-top: 80px;
      height:100vh;
    
    }
     
`

const Container = styled.div`
z-index: 1;
margin-top: 50px; 
     height:100vh;
     width:1400px;
     /* scroll-snap-align: center; */
    
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
`;

const Head = styled.div`     
    width:100%;   
    margin-top: 5vh;
    /* background: #000; */
    @media (max-width: 900px) {    
      /* width: 150px; */
      margin-top: 2vh;
    
    }
  
`;

const Title = styled.h1`    
    
    text-align: center;
    font-size: 10vh;   
    /* color:red;  */

    @media (max-width: 900px) {    
      /* width: 150px; */
      font-size: 6vh; 
    
    }
`;

const Desc = styled.div`
    z-index: 1;
    text-align: center;
    width:50%;
    margin: 0 auto;
    line-height: 2.5vh;
    font-size: 1.01rem;
    padding:1vh;
    @media (max-width: 900px) {    
      /* width: 150px; */
      font-size: 2vh; 
      width:45vh;
      
    
    }
`;

const Span = styled.span`
    text-align: center;
    width:50%;
    margin: 0 auto;
    color:aqua;
`;
const ProjectSection = styled.div`
    /* background: peachpuff; */
    flex:2;
    width:90%;
    height:50vh;
    display: flex;
    align-items: start;
    justify-content: center;
    margin-top:5vh;
    transition: 350ms ease-in-out;

    @media (max-width: 900px) {    
      
      width:45vh;
      margin-top:0vh;
      margin-bottom:1vh;
    
    }
    
`;
const Projects = () => {
  return (
    <Section id='project'>
      <Container>
        <Head>
              <Title>Projects</Title>
              <Desc>
              Welcome to the heart of my portfolio the <Span>Projects</Span> section. Here, I'm excited to share some of the work I've undertaken, highlighting my passion, creativity, and commitment to making a difference. As a fresh graduate entering the professional world, these projects represent the foundation of my skills and a glimpse into what I can bring to the table.
              </Desc>
        </Head>
          
        <ProjectSection>
              {/* {projects.map((project)=>(
                    <ProjectCard project={project}></ProjectCard>
              ))} */}
              {/* <ProjectCard project={projects[0]}></ProjectCard> */}
              
              <Swiper 
                mousewheel={true} 
                direction={'horizontal'}   
                loop={true}   
                spaceBetween={200}  
                navigation={true}  
                effect= "slide"          
                modules={[Navigation,Mousewheel,Autoplay]} 
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                    waitForTransition:true,

                }} 
                className="mySwiper"
              >
               
                    {projects.map((project)=>(
                          <SwiperSlide >
                              <ProjectCard project={project}></ProjectCard>
                          </SwiperSlide>
                    ))}
                    
                       
            </Swiper>
        </ProjectSection>

      </Container>

      
    </Section>
  )
}

export default Projects