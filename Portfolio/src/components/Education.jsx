import React from 'react'
import styled from 'styled-components'


import { Studies } from '../data/Self';
import EducationCard from '../Cards/EducationCard';
import Timeline from '@mui/lab/Timeline';
import TimelineItem , { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';










const Section = styled.div`
 
  scroll-snap-align: center;
  scroll-behavior: smooth;
  display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Container = styled.div`   
     /* height:100vh;
     width:1400px;
     margin-top: 50px;     
     display: flex;     
     flex-direction: column;    
     align-items: flex-start;
  justify-content: flex-start;   

    @media (max-width: 900px) {    
    width: 400px;   
    margin:40px;  
    padding:0px;     */


    position: relative;
    display: flex;
    /* justify-content:flex-start; */
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
  
`;


const MainHeading = styled.h1`
   

  font-size:8vh;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 3rem;
  }
     
`;

const SubHeading = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 15px;
    }

`

const TimelineSection = styled.div`     
    
    width: 70%;    
    margin-top: 10px;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    @media (max-width: 660px) {
       
    }
     
`;


const Education = () => {
  return (
    <Section id='education' name='education'>
      <Container>
      
        <MainHeading>Education</MainHeading>
        <SubHeading>My education has been a journey of self-discovery and growth. My educational details are as follows.</SubHeading>

       
        
        
        <TimelineSection>           
                  
                  {Studies.map((education)=>(                  
                    <Timeline  sx={{
                      [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 1,
                      },
                    }}>
                      <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent  >
                                <EducationCard education={education} ></EducationCard>
                          </TimelineContent>
                        </TimelineItem>
                    </Timeline>                  
                  ))}


                 
          </TimelineSection>

       
          

       
      </Container>

    </Section>
  )
}

export default Education



