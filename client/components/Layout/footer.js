import React from 'react'
import Link from 'next/link'
// TODO: Add social icons
const Footer = () => (
  <footer>
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

    <style jsx>{`
      footer {
        background: #252525;
        height: 10vh;
        bottom: 0;
        margin-top: 4vh;
        display: flex;
      }

      ul {
        display: flex;
        flex-direction row;
        width: 100%;
        align-items: center;
      }

      ul:first-child {
        padding: 0;
      }

      li {
        margin: 0 auto;
      }

      a {
        font-family: 'Karla', sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: #FFFFFF;
        font-size: 14px;
        letter-spacing: 1.2px;
      }

 `}</style>
  </footer>
)

export default Footer
