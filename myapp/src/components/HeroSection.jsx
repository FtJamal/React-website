import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../styles/Button'
import {  useGlobalContext } from '../Context';

const HeroSection = () => {

  const {name,image} = useGlobalContext();


    return (
        <div>
            <Wrapper>
                <div className='herosection'>
                    <div className="container grid grid-two-column">
                        <div className="section-hero-data">
                            <p className='hero-top-data'>THIS IS ME</p>
                            <h1 className='hero-heading'>{name} </h1>
                            <p className='hero-para'>I am {name}. A MERN Stack Developer.<br /> I have learned html, CSS ,Bootstrap ,Javascript ,
                                <br />    React.js ,  Mongodb , Express.js  , Node.js </p>
                            <Button className="btn hireme-btn">
                                <Link to="/contact">Hire me</Link>
                            </Button>
                        </div>
                        <div >
                            <picture>
                            <img src={image} alt="" className="section-hero-image" />
                            </picture>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

const Wrapper = styled.section`
padding: 5rem ;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
// .herosection{
//     display : flex;
//     flex-direction : column;
//     align-items : center;
//     flex-wrap : wrap;
//   }
//   .container{
//     display : flex;
//     flex:wrap;
//     gap : 20px;
//   }
  .hero-heading{
    font-size : 35px;
  }
  .hero-para{
    font-size : 15px;
    margin-bottom : 30px
  }
  .section-hero-image{
    width : 300px;
     height :300px;

  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 100%;
  }
  @media only screen and (max-width: 600px) {
    .container{
      display : flex;
      flex:wrap;
      flex-direction : column;
      gap : 25px;
    }
    .section-hero-image{
    //   width : 290px;
       height :200px;
       padding-left:40px
    }
    
    
  }
  
`

export default HeroSection;