import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const  [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <Menu>
          <a href="#">Model 3</a>
          <a href="#">Model Y</a>
          <a href="#">Model S</a>
          <a href="#">Model X</a>
          <a href="#">Solar Roof</a>
          <a href="#">Solar Panels</a>
        </Menu>
        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)}/>
          </CloseWrapper>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-In</a></li>
          <li><a href='#'>Test Drive</a></li>
          <li><a href='#'>Cyber Truck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Semi</a></li>
          <li><a href='#'>Charging Inventory</a></li>
          <li><a href='#'>Power Wall</a></li>
          <li><a href='#'>Commercial Energy</a></li>
          <li><a href='#'>Utilities</a></li>
          <li><a href='#'>Find Us</a></li>
          <li><a href='#'>Support</a></li>
          <li><a href='#'>Investors Relations</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 550;
    text-transform: capitalize;
    padding: 0 20px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
  a {
    font-weight: 550;
    text-transform: capitalize;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding:20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .2);

      a {
        font-weight: 400;
      }
    }
`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`