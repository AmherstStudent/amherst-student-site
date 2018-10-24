import React from 'react'
import Link from 'next/link'
import Container from './container'

const Footer = () => (
  <footer>
    <div className="top">
    <img src="/static/white-logo.svg" alt="the Amherst Student" />
    <p>The College Newspaper of Amherst College since 1868 </p>
    </div>
    <Container>

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
    </Container>

    <style jsx>{`

  footer {
    background: #333333;
    box-shadow: 0 2px 3px 1px rgba(0,0,0,0.50);
    width: 100%;
    height: 125px;
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

    margin: 0 auto;
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    width: auto;
  }
 `}</style>
  </footer>
)

export default Footer
