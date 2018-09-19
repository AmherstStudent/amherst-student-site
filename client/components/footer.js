import React from 'react'
import Link from 'next/link'
import Container from './container'

const Footer = () => (
  <footer>
    <Container>
      <ul>
        <li>
          <Link href={`/masthead#ad`} passHref>
            <a>Advertisers</a>
          </Link>
        </li>
        <li>
          <Link href={`/masthead#about`} passHref>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={`/masthead#contact`} passHref>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href={`/masthead#subscribe`} passHref>
            <a>Subscribe</a>
          </Link>
        </li>
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
  ul:first-child{
    padding: 0;
  }
  li {

    font-family: 'europa';
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
