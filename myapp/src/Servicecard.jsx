import React from 'react';
import { Button } from './styles/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Servicecard = ({ image, description }) => {
  return (

    <Services className='section'>

      <div className="service1">
        <div className="main-container">

          <div className="card">
            <figure>
              <img className="image" src={image} alt="" />
            </figure>

            <div className="card-data">
              <p className="description">{description}</p>
            </div>

            <Button className="btn hireme-btn">
              <Link to="/contact">Hire me</Link>
            </Button>
          </div>
        </div>
      </div>

    </Services>

  )
}

const Services = styled.div`
padding:0;
.image{
    width : 200px;
    height : 150px
}
  background-color: ${({ theme }) => theme.colors.bg} .container {
    max-width: 70rem;
  }
  .main-container {
    display: flex;
    margin-top: 30px;
   
    
   width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .card {
    border: 0.1rem solid rgba(170 170 170 /40%);
    width: 30rem;
    .card-data {
      padding: 0 2rem;
      text-align : center;
    }
   .card:hover{
    box-shadow: 1px 0px 2px 2px black;
   }
    h3{
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-align: center
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 /0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4 rem;
      &:hover {
        
        color: white;
      }
      a {
        color: rgb(98 84 243);
      }
    }
  }
  figure {
   
    display: flex;
    justify-content: center;
    align-items: center;
    position : relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  )
}
`

export default Servicecard;