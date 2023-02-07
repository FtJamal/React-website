import React from 'react';
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Wrapper>
      <div className="footer-short">
        <p className='footer-para'>
          Ready to get started? <br />
          talk to us today

        </p>
        <Button className="btn">Get Started</Button>
      </div>



      <div className="footer-long">
        <div className="footer-para">
          <h3>Farya Jamal</h3>
          <p className='para'>
            I am a full stack MERN developer
          </p>
        </div>

        <div className="footer-para">
          <p className='para'>Email me to get more details</p>
          <p className='para'><b className='email'>faryajamal95@gmail.com</b></p>
        </div>

        <div className="footer-para">
          <p className='para'>Follow me</p>
          <a href="https://github.com/FtJamal" target="_blank">
            <FaGithub className="icons" />
          </a>

        </div>

        <div className="footer-para">
          <p className='para'>Call me</p>
          <p className='para'>03218354075</p>
        </div>



      </div>
      <hr />

      <div className="footer-bottom-section">

        <p className='para'>@{new Date().getFullYear()}faryajamal©</p>
      </div>






    </Wrapper>


  )
}

const Wrapper = styled.div`
 
  
  .footer-short{
    display : flex;
    justify-content: space-between;
    gap : 300px;
    width : 70%;
    margin : auto ;
    transform:translateY(50%); 
    background-color:${({ theme }) => theme.colors.bg};
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    box-shadow: 1px 0px 3px  lightgray;
    border-radius : 5px;
    padding : 30px;
   
  }
  
  button{
    align-self : center;
  }
}
.footer-long{
  display : flex ;
  justify-content : space-around;
  padding-top : 100px;
  flex-wrap : wrap;
  background-color:${({ theme }) => theme.colors.footer_bg};
 padding-bottom : 30px;
 a{
font-size: 30px;
align-self: center;
text-align:center;
color:white;
padding-left:20px

 }
  .para{
    color : white;
    align-self:center;
    font-size : small;
    .email{
      font-size : small;
    }
   
  }
  h3{
    color : white;
  }
}
.footer-bottom-section{
  background-color:${({ theme }) => theme.colors.footer_bg};
  height : 40px;
  margin-top: -1rem;
  border-top: 1px solid white;
  padding: 5px;
}
  .para{
    color : white;
    text-align: center;
  }
  .hr{
   
    color:${({ theme }) => theme.colors.hr};
    
  }
  
}
// @media only screen and (max-width: 768px) {
//   .footer-short,.footer{
//     display : flex;
//     flex-direction : column;
//     flex-wrap : wrap;
//     gap : 2px;
//     justify-content : center;
   
   
   
//   }
//   .footer-para{
//     margin : 10px;
//     display : flex;
//     flex-direction : column;
//     align-items : center;
//     font-size : 8px;
//     .icons{
//       color : white;
//       font-size:2.4rem;
     
//       cursor:pointer;
//     }
//   }
//   .footer-long{
//     display : flex ;
//    flex-direction : column;
//     padding-top : 100px;
//     align-items : space-around;
//     flex-wrap : wrap;
//     background-color:${({ theme }) => theme.colors.footer_bg};
    
   
//   }
//   .para{
//     color : white;
//     align-self:center;
//     font-size : x-small;
//     .email{
//       font-size : xx-small;
//     }
  
  
}
`


export default Footer;