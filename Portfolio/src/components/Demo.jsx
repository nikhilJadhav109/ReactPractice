import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../data/Self';

const Demo = () => {
  return (
    <div>
                    <Splide aria-label="My Favorite Images">
        
            
              {projects.map((project)=>(
              <SplideSlide><ProjectCard project={project}></ProjectCard></SplideSlide>
                ))}
       
        
        </Splide>

    </div>
  )
}

export default Demo