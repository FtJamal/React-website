import React from 'react';
import styled from 'styled-components'
import Errorimg from "./assets/404.png"
import { Link } from 'react-router-dom'
import { Button } from './styles/Button'

const Error = () => {
    return (
        <Wrapper>
            <img src={Errorimg} alt="" width="380" height="300" />
            <Button className="btn"><Link to="/">Go Back</Link> </Button>
        </Wrapper>)
}

const Wrapper = styled.section`
display : flex;
justify-content: center;
align-items : center;
flex-direction : column;
padding: 10px;
 
   .btn{
    margin-top: 3rem;
    font-size:2.8rem;
    
  }
`;

export default Error;