import React, { useState } from 'react'
import styled from 'styled-components'
import { GrClose } from 'react-icons/Gr';
import { BiMenu } from 'react-icons/Bi';
import {motion} from 'framer-motion'



const Section = styled.div`
    width:100vw;    
    
   

    `;
const Container = styled.div`
  cursor: pointer;
  /* background: palegreen; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
  
`;
const SideDiv = styled.div`
  /* background: #000; */
  width:50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 1s ease-in-out;
  z-index: 10;
  

`;

const Links = styled.ul`
  display:flex;
  flex-direction: column;  
  align-items: start; 
  gap:4vh;
  height: 100%;
  list-style-type: none;
`;

const LinkItems = styled.li`
  text-decoration: none;
  margin-left:2vh;
  font-size: 3rem;
  margin-top: 2vh;
  
  
  

  &:hover{
    text-decoration: underline;
  }
`;

const IconSection = styled.div`
  width:100%;
  color:white;
  /* background: palegreen; */
  height:5vh;
`;

const Icon = styled.div` 

  margin-left: 10px;
  padding: 5px;
  color:white;
  /* background:olive; */
  cursor: pointer;

`;

const LinkSection = styled.div`
  width:100%;
  background: #dadada;
  height:90vh;
  
`;

const Footer = styled.div`
  width:100%;
  /* background:palevioletred; */
  display: flex;
  justify-content:space-evenly;
  gap:10px;
  height:5vh;
  
`;

const Socials = styled.a`
/* background: peachpuff; */
  width:100%;
  margin:10px;
  padding: 5px;
  text-align: center;
  

  
`;




const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSideBar = ()=> setSidebar(!sidebar)
  return (
    <Section as={motion.div} >

        <Container>            
            <BiMenu color='black' size={40} onClick={handleSideBar}/>                  
        </Container>

        

        <SideDiv as={motion.div} sidebar={sidebar} >
          <IconSection>
            <Icon>
                <GrClose size={35}  color='white' onClick={handleSideBar} />               
            </Icon>
              
          </IconSection>
          
          <LinkSection>
            <Links>
              <LinkItems>Home</LinkItems>
              <LinkItems>Education</LinkItems>
              <LinkItems>Project</LinkItems>
              <LinkItems>About</LinkItems>
            </Links>
          </LinkSection>

          <Footer>
              <Socials>Github</Socials>
              <Socials>LinkedIn</Socials>
              <Socials>Email</Socials>
          </Footer>
            
             
        </SideDiv>
    </Section>
  )
}

export default Sidebar