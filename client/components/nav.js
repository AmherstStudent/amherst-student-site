import React from 'react'
import Link from 'next/link'
import Container from './container.js'



const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'HOME' },
  { href: '/news', label: 'NEWS'},
  { href: '/arts+living', label: 'ARTS + LIVING'},
  { href: '/opinion', label: 'SPORTS'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>

  <div className="logo">
  <img src="static/logo.svg" alt="the Amherst Student" />
  <img src="static/logo-subline.svg" className="subline"/>
  </div>
  <hr />
  <Container>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
  </Container>

    <style jsx>{`
      nav {

        width: 100%;
        top: 0;
        z-index: 200;
      }
      hr {
        color: rgba(255,255,255, 0.3);
      }
      .logo{
        padding-top:20px;
        margin-bottom:0px;
        padding-bottom: 10px;
        max-width:400px;
        margin: 0 auto;
      }
      img {
        width:100%;
        height: auto;
      }
      nav {
        background-color: white;
        text-align: center;
      }
      .subline {
        width: 85%;
        height:auto;
        margin-top:-2%;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      ul{
        padding-left: 0;
      }
      nav > ul {
        border-top: 1px solid rgba(151,151,151, 0.91);
      }

      li {
        display: flex;
      }

      a {
        color: #5d3c85;
        text-decoration: none;
        font-size: 13px;
      }

    `}</style>
  </nav>
)

export default Nav
