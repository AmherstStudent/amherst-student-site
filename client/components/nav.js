import React from 'react'
import Link from 'next/link'
import Container from './container.js'
import { Icon } from 'react-icons-kit'
import {navicon} from 'react-icons-kit/fa/navicon'
import {search} from 'react-icons-kit/fa/search'
import MobileNav from './mobile_nav.js'

const links = [
  { href: '/category/news', label: 'NEWS' },
  { href: '/category/opinion', label: 'OPINION' },
  { href: '/category/arts and living', label: 'ARTS AND LIVING' },
  { href: '/category/sports', label: 'SPORTS' },
  { href: 'https://issuu.com/amherststudent/docs/issue_1_44e01646c9385d', label: 'PRINT ISSUES' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };

  }

handleClick = () => {
      console.log('The link was clicked.');
      this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
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
          <li>
            <Link href='/search' prefetch>
            <a>
            <Icon size={16} icon={search}/>
            </a>
            </Link>
          </li>
          </div>

          <li className="navIcon" onClick={this.handleClick}>
            <Icon size={24} icon={navicon}/>
          </li>

        </ul>
        {this.state.isOpen ?

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

          : null}


      </Container>






      <style jsx>{`
        nav {
          position: fixed;
          display: flex;
          width: 100vw;
          height: 8.5vh;
          z-index: 2;
          background-color: white;
          box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.5);
          z-index: 200000;
          margin: auto;
          align-items: center;
          flex-direction: row;
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
          justify-content: space-between;
          padding: 10px 0 10px 0px;
          margin-block-start: 0em;
          margin-block-end: 0em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 0px;
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
          width: auto;

        }
        .logo{
          height: 20px;
          width: 100%;
          max-width: 300px;
          padding: 0px;
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

          nav{
            height: 6vh;
            align-items: stretch;
          }

          .links{
            display:none;
          }
          .logo{
            justify-content: flex-start;

          }
          img{
            align: left;
          }

          .navIcon{
            display:flex;
            justify-content: flex-end;
          }

         .mobile{
           display: flex;
           flex-direction: column;
           width: 100vw;
           padding-top: 0;
           background: white;

         }
         .mobile li {
           align-items: center;
           justify-content: center;
           padding-bottom: 10px;
           padding-top: 10px;
         }


        }

      `}</style>
    </nav>
  )
  }
}

export default Nav
