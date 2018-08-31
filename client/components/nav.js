import React from 'react'
import Link from 'next/link'
import Container from './container.js'




const links = [
  { href: '/index', label: 'HOME' },
  { href: '/category?name=News', label: 'NEWS'},
  { href: '/category?name=Opinion', label: 'OPINION'},
  { href: '/category?name=Arts and Living', label: 'ARTS AND LIVING'},
  { href: '/category?name=Sports', label: 'SPORTS'},
  { href: '/news', label: 'PRINT ISSUES'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>

  <div className="logo">
    <a href="index">
    <img src="/static/logo.svg" alt="the Amherst Student" />
    </a>
    <img src="/static/logo-subline.svg" alt="the student newspaper since 1868" className="subline"/>

  </div>

  <hr />

      <ul>

        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}


      </ul>


    <style jsx>{`
      nav {
        display:inline;
        width: 100%;
        top: 0;
        z-index: 200;
        background-color: white;
        text-align: center;
        position: fixed;
        box-shadow: 0 1px 0 0 rgba(0,0,0,0.50);
      }


      hr {
        color: rgba(255,255,255, 0.2);
      }
      .logo{
        padding-top:20px;
        margin-bottom:0px;
        padding-bottom: 10px;
        padding-left: 10px;
        max-width:300px;
        margin: 0 auto;
        height: auto;

      }
      img {
        width:100%;
        height: auto;
      }
      @media (max-width: 500px){
        .logo{
          max-width: 350px;
        }
        img{
          width: 100%;
        }
        ul{
          width: 50%;
        }
      }


      .subline {
        width: 100%;
        height:auto;
        margin-top:-2%;
      }
      ul {
        display: flex;
        justify-content: space-between;

      }
      ul{
        padding-left: 0;
        width: 85%;
        margin: 0 auto;
        list-style-type: none;
        padding: 15px 0;
      }
      hr {
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
      }


      li {
        display: flex;
        list-style-type: none;
        color:black;
      }
      @media (max-width: 620px){
        li{
          width: 85%;
        }
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
