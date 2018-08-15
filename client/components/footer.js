import React from 'react'
import Link from 'next/link'
import Container from './container'

const Footer = () => (
  <footer>

  <Container>
    <ul>
      <li><a href="#">Advertisers</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Subscribe</a></li>
    </ul>
  </Container>

  <style jsx>{`

  footer {
    background: #333333;
    box-shadow: 0 2px 3px 1px rgba(0,0,0,0.50);
    width: 100%;
    bottom: 0;
  }

  ul{
    display: flex;
    flex-direction row;
    justify-content: space-between;

  }

  li {

    font-family: AGaramondPro-Italic;
    font-size: 14px;
    display:inline-block;
    color: #FFFFFF;
    letter-spacing: 1.2px;
    list-style-type: none;
    margin:0 auto;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 13px;

  }

 `}</style>
 </footer>
)

export default Footer
