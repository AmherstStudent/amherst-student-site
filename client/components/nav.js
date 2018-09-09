import React from 'react'
import Link from 'next/link'
import Container from './container.js'
import { Icon } from 'react-icons-kit'
import {navicon} from 'react-icons-kit/fa/navicon'

const links = [
  { href: '/category?name=News', label: 'NEWS' },
  { href: '/category?name=Opinion', label: 'OPINION' },
  { href: '/category?name=Arts and Living', label: 'ARTS AND LIVING' },
  { href: '/category?name=Sports', label: 'SPORTS' },
  { href: 'https://issuu.com/amherststudent/docs/issue_1_44e01646c9385d', label: 'PRINT ISSUES' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})
function handleClick() {
    console.log('The link was clicked.');
}
const Nav = (props) =>(
  <nav>
      <Container className="wrapper">

        <ul>
          <li className="logo">
            <a href="/">
            <img src="/static/logo.svg" alt="the Amherst Student" />
            </a>
          </li>
        <div className="links">
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href} prefetch>
              <a>{label}</a>
            </Link>
          </li>
        ))}
        </div>
        <li className="navIcon">
          <Icon size={32} icon={navicon}/>
        </li>

      </ul>
      <ul className="mobile">
        <hr />
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href} prefetch>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>

    </Container>





    <style jsx>{`
      nav {
        position: fixed;
        display: flex;
        width: 100vw;
        z-index: 2;
        background-color: white;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.5);
      }
      nav .wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }
      ul {
        display:flex;
        width: 100%;
        padding: 0;
        list-style-type: none;
        padding: 10px 0 10px 0px;
      }
      a {
        text-decoration: none;
        transition: all .5s ease;
      }
      li {
        display: flex;
        font-family: "europa";
        font-size: 14px;
        width: auto;
        margin: auto 0;
      }
      li, a {
        text-decoration: none;
        color:#5d3c85;
      }
      img{
        height: 100%;
      }
      .logo{
        height: 20px;
      }
      .links {
        display:flex;
        justify-content: space-between;
        width: 60%;
        margin-left: auto;

      }
      .navIcon{
        display:none;
      }
      .mobile{
        display:none;
      }
      @media screen and (max-width:800px) {
        .links{
          display:none;
        }
        .logo{
          height: 20px;
          justify-content: flex-start;
          flex: 1 1 auto;
        }
        .navIcon{
          display:flex;
          justify-content: flex-end;
        }
        .mobile{
          display:none;
          flex-direction: column;
          width: 100%;
          padding-top: 0;
        }
        .mobile li {
          align-items: center;
          justify-content: center;
          padding-bottom: 10px;
          padding-top: 10px;
        }
        hr{
          width:100%;
        }
      }
    `}</style>
  </nav>
)

export default Nav
