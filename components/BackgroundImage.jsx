import React from 'react'
import background from '../assets/background.png'
import styled from 'styled-components';

export default function backgroundImage() {
  return (
    <Container>
        <img src={background} alt="background" />
        </Container>
    
  )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
img {
    height : 100vh;
    width : 100vw;
    overflow : hidden;
}
`;

