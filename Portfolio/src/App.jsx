
import { Outlet } from 'react-router-dom'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  
  background:url("../img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
    

`


function App() {
  

  return (
    <Container> 
      <Navbar/>
      <Outlet/>        
      {/* <Hero />
      <Education />
      <Projects/>
      <Skills/>
      <Contact/> */}
    </Container>
    
    
    
  )
}

export default App
