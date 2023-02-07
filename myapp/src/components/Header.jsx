import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from "../assets/logo2.png"
import styled from 'styled-components';

function Header() {
  return (
    <div>
      <MainHeader>
      <NavLink to="/">
        <img src={Logo} className="logo" alt="logo" />
      </NavLink>
      <Navbar />
      </MainHeader>
    </div>
  )
}

const MainHeader = styled.header`
padding: 0 2rem;
height: 6rem;
background-color: ${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
align-items: center;
.logo{
  height:auto;
  max-width:20%;
}
`

export default Header;