import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <div>
        <FooterLinks>
            <p>Tesla © 2022</p>
            <a href="#">Privacy & Legal</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Location</a>
        </FooterLinks>
    </div>
  )
}

export default Footer

const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    font-weight: 500;

    a {
        margin-right: 10px;
    }
    p {
        margin-right: 10px;
    }
`