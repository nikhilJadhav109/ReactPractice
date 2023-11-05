import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';
import styled from 'styled-components';

const container = '.content';
const texts = [
  'HTML', 'CSS', 'JavaScript',
  'ReactJs', 'Java', 'SpringBoot',
  'MySQL', 'Git', 'JSON',
  'npm', 'REST','Bootstrap','Figma','AdobeXD','MaterialUI','Styled Component'
];
const options = {
  radius: 300,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
};


const Span = styled.span`
    font-size: xx-large; 
    user-select: none;  
    padding-left: 20px; 
    display:flex;
  align-items: center;
  flex-direction: column;
  justify-content:center;

 
    

    @media (max-width: 900px) {    
       height :1vh ;
       width:1vh;
       /* display: none; */
       
      
       
    }
`;


const WordCloud = () => {
  // to render wordcloud each time the page is reloaded
  useEffect(() => {
    TagCloud(container, texts, options);
  },[])

  return (
    <div className='main'>      
      <Span className="content"></Span>
    </div>
  )
}

export default WordCloud;