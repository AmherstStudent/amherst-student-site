import React from 'react'
import Link from 'next/link'
import Container from './container'

const Footer = () => (
  <footer>
    <>
      <ul>
        <li>
          <Link href={`/masthead#about`} passHref>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={`/masthead#subscribe`} passHref>
            <a>Subscribe</a>
          </Link>
        </li>
        <li>
          <Link href={`/masthead#ad`} passHref>
            <a>Advertisers</a>
          </Link>
        </li>
        <li>
          <Link href={`/masthead#contact`} passHref>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </>

    <style jsx>{`

  footer {
    background: black;
    box-shadow: 0 2px 3px 1px rgba(0,0,0,0.50);
    width: 100%;
    height: 10vh;
    bottom: 0;
    margin-top: 4vh;
    display:flex;
  }

  ul{
    display: flex;
    flex-direction row;
    justify-content: space-between;
    width: 100%;
  align-items: center;
  }
  ul:first-child{
    padding: 0;
  }
  li {

    font-family: 'Karla', sans-serif;
    font-size: 12px;
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
    font-family: 'Karla', sans-serif;

  }

  img{
    height: 30px;
    width: auto;
    align: center;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    text-shadow: 0;
  }
  p{
    color: white;
    font-family: Karla-Bold;

    margin: 0 auto;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    width: auto;
  }
 `}</style>
  </footer>
)

export default Footer
