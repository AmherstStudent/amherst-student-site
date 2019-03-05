import React from 'react'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { navicon } from 'react-icons-kit/fa/navicon'
import { search } from 'react-icons-kit/fa/search'
import Sidebar from './Sidebar.js'
const NavBar = () => (
  <nav>
    <div className="rightNav">
      <div className="navicon">
        <Icon size={24} icon={navicon} />
      </div>
      <Link href="/">
        <a>
          <img src="/static/logo.svg" alt="the Amherst Student" />
        </a>
      </Link>
    </div>
    <div className="leftNav">
      <a>CURRENT ISSUE</a>
      <Link href="/search">
        <a>
          <Icon size={16} icon={search} />
        </a>
      </Link>
    </div>

    <style jsx>{`
      nav {
        background: white;
        position: sticky;
        top: 0;
        width: 100vw;
        background: #ffffff;
        box-shadow: 0 0 0.1px 0 rgba(0, 0, 0, 0.5);
        height: 54px;
        display: flex;
        justify-content: space-between;
        z-index: 200;
      }
      .navicon {
        height: 100%;
        background-color: var(--dark-purple);
        min-width: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
      .rightNav {
        display: flex;
        height: 100%;
        align-items: center;
        width: contain;
      }
      img {
        height: 20px;
        margin: 20px;
      }
      a {
        font-family: 'Karla', sans-serif;
        font-weight: 700;
        font-size: 13px; // come back and check with other a's
      }
      .leftNav {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .leftNav > * {
        margin-right: 1.5vw;
        color: var(--dark-purple);
      }
    `}</style>
  </nav>
)

export default NavBar
