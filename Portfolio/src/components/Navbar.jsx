import React, { useState } from 'react'
import styled from 'styled-components'
import { Bio } from '../data/Self'
import { BiMenu  } from 'react-icons/Bi';
import { AiOutlineClose  } from 'react-icons/Ai';
import {HashLink as Link} from 'react-router-hash-link'




const Section = styled.div`
    display:flex;    
    justify-content: center; 
    z-index: 1;
    background: linear-gradient(180deg, hsla(255, 93%, 22%, 1) 2%, hsla(265, 100%, 8%, 1) 100%);    height:90px;
    z-index: 1;   
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 900px) {
      padding:5px;
      height:50px;

  }
`;

const Container = styled.div` 
 width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media (max-width: 900px) {
    width:100vw;
    height:5.5vh;
    display: flex;    
  }
`

const Logo = styled.img`  
  width:6vw;
  height:8vh;   
  
  @media (max-width: 900px) {
   display   : none;
  
  }
`
const List = styled.ul`
list-style:none;
display:flex;
gap:40px;
    
`

const ListItems = styled.li`
cursor: pointer;
font-weight: bold;
letter-spacing: 1px;
color:white;
font-size: 2.1vh;
transition: 0.3s ease-in-out;
&:hover{
    scale:1.1; 
    color : red;   
  }

  @media (max-width: 900px) {
   display :none ;
  }
    
`
const Resume = styled.img`
cursor: pointer;
width: 20px;
    
`

const Icons = styled.div`
display:flex;
align-items: center;
gap:10px;
    
`
const Anchor = styled.a`
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
  width: 120px;
  padding: 1vmin;
  background-color: #FFCB9A;
  color: #2C3531;
  border: none;
  border-radius: 5px;
  cursor: pointer;  
  font-size  :16px;
  font-weight: 900;
  transition: 0.5s ease;
  text-decoration: none;

  &:hover{
    scale:1.05;
    background-color: #D9B08C;
  }

  @media (max-width: 900px) {
    margin: 1vw;    
  }
`

const ResButton = styled.div`
cursor: pointer;
display:none;
@media (max-width: 900px) {
    margin-right: 2vh ;
    display:block;
  }
    
`
export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 50px;
    right: 0;
    width: 50%;
    padding: 12px 40px 24px 40px;
    background: linear-gradient(180deg, hsla(255, 93%, 22%, 1) 2%, hsla(265, 100%, 8%, 1) 100%);   
    transition: all 0.6s ease-in-out;
    transform: ${({ click }) => (click ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ click }) => (click ? '100%' : '0')};
    z-index: ${({ click }) => (click ? '1000' : '-1000')};

`

export  const MobileLink = styled.a`
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;  
`;

const Navbar = () => { 
  const [click, setClick] = useState(false);
  const handleClick =()=>{
    setClick(!click);
  }

  return (
    <Section>
      <Container>
        <Logo src='../img/nj1.png' />
        <List>            
          <ListItems ><Link to="#hero" smooth >About</Link></ListItems>
          <ListItems ><Link to="#education" smooth >Education</Link></ListItems>
          <ListItems ><Link to="#project" offset='-90' smooth >Project</Link></ListItems>
          <ListItems ><Link to="#skills" smooth >Skills</Link></ListItems>
          <ListItems ><Link to="#contact" smooth >Contact</Link></ListItems>          
        </List>
        <Icons>         
          <Anchor href={Bio.github} target='_blank'><Resume src='../img/github.png' />Github</Anchor>

          <ResButton onClick={handleClick}>
            {click ? <AiOutlineClose size={30} />: <BiMenu  size={30}/> }
          </ResButton>
          

          {click && 
            <MobileMenu click={click}>
                <MobileLink href="#hero" onClick={() => {
                  setClick(!click)
                }}>About</MobileLink>
                <MobileLink href='#education' onClick={() => {
                  setClick(!click)
                }}>Education</MobileLink> 
                <MobileLink href='#project' onClick={() => {
                  setClick(!click)
                }}>Projects</MobileLink>
                <MobileLink href='#skills' onClick={() => {
                  setClick(!click)
                }}>Skills</MobileLink>
                <MobileLink href='#contact' onClick={() => {
                  setClick(!click)
                }}>Contact</MobileLink>                       
          </MobileMenu>
          }


        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar

