import React from 'react'
import Link from 'next/link'
import Container from './container.js'
import { Icon } from 'react-icons-kit'
import {navicon} from 'react-icons-kit/fa/navicon'
import {search} from 'react-icons-kit/fa/search'

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
        <Container>
          <ul className="start">
            <li className="logo">
              <a href="/">
              <img src="/static/logo.svg" alt="the Amherst Student" />
              </a>
            </li>
          {links.map(({ key, href, label }) => (
            <li key={key} className="desktop">
              <Link href={href} prefetch>
                <a>{label}</a>
              </Link>
            </li>
          ))}
          <li className="desktop">
            <Link href='/search' prefetch>
            <a>
            <Icon size={16} icon={search}/>
            </a>
            </Link>
          </li>

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
          position: sticky;
          display: flex;
          width: 100%;
          height: 10%;
          z-index: 2;
          background-color: white;
          box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.5);
          z-index: 2;
          margin: auto;
          align-items: center;
          flex-direction: row;
          margin-bottom: 20px;
        }
        nav.wrapper{
          flex-direction: column;

        }
        .start {
          display:flex;
          list-style-type: none;
          justify-content: space-between;
          width: 100%;
          padding: 0;
          height: 10vh;
          margin-block-start: 0em;
          margin-block-end: 0em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          margin-top: 10px;
          margin-bottom: 10px;
          padding-inline-start: 0px;
          z-index: 2;
        }
        .mobile{
          display: flex;
          margin-block-start: 0em;
          margin-block-end: 0em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
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

          padding: 0px;
        }

        .navIcon{
          display:none;

        }
        .mobile{
          display:none;
        }
        @media screen and (max-width:800px) {

          nav{
            justify-content: center;
            flex-direction: column;
            position: static;

          }

          ul{
            flex-direction: row;
            justify-content: center;
          }
          .start{
            padding: 0px 0 0px 0px;

          }
          .desktop{
            display:none;
          }
          .logo{
            justify-content: flex-start;
            max-width: 320px;
            width: 380px;
          }
          img{
            align: left;
            width: 100%;
            height: auto;
          }

          .navIcon{
            display:flex;
            justify-content: flex-end;
            padding: 10px;
          }

         .mobile{

           display: flex;
           flex-direction: column;
           background: white;
           padding-inline-start: 0px;
         }
         .mobile.hr{
           width: 100vw;
           height: 1vh;
           color: black;
         }
         .mobile li {

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
