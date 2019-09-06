import React from 'react'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { navicon } from 'react-icons-kit/fa/navicon'
import { search } from 'react-icons-kit/fa/search'
import Sidebar from './Sidebar.js'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // toggle box is closed initially
      isOpened: false,
    }
    // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    this.toggleBox = this.toggleBox.bind(this)
  }

  toggleBox() {
    this.setState(oldState => ({ isOpened: !oldState.isOpened }))
  }
  render() {
    const { isOpened } = this.state

    return (
      <nav>
        <div className="nav">
          <div className="rightNav">
            <div className="navicon" alt-text="Menu" onClick={this.toggleBox}>
              <Icon size={24} icon={navicon} role="button" aria-label="Menu button" />
            </div>
            <Link href="/">
              <a aria-label="Amherst Student logo">
                <img src="/static/logo.svg" alt="the Amherst Student" />
              </a>
            </Link>
          </div>
          <div className="leftNav">
            <a className="currentIssue">CURRENT ISSUE</a>
            <Link href="/search">
              <a aria-label="Search" >
                <Icon size={16} icon={search} />
              </a>
            </Link>
          </div>
        </div>
        {isOpened && <Sidebar />}

        <style jsx>{`
          nav {
            width: 100%;
          }
          .nav {
            background: white;
            position: sticky;
            top: 0;
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

          .collapsible {
            display: none;
          }
          @media screen and (max-width: 768px) {
            .currentIssue {
              display: none;
            }
            .leftNav {
              margin-right: 20px;
            }
          }
        `}</style>
      </nav>
    )
  }
}

export default NavBar
