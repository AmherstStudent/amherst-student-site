// import React from 'react'
// import Link from 'next/link'
// import { Icon } from 'react-icons-kit'
// import { navicon } from 'react-icons-kit/fa/navicon'
// import { search } from 'react-icons-kit/fa/search'

// const links = [
//   { href: '/category/news', label: 'NEWS' },
//   { href: '/category/opinion', label: 'OPINION' },
//   { href: '/category/arts and living', label: 'ARTS AND LIVING' },
//   { href: '/category/sports', label: 'SPORTS' },
//   { href: 'https://issuu.com/amherststudent/docs/issue_1_44e01646c9385d', label: 'PRINT ISSUES' },
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

// class Nav extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isOpen: false }
//   }

//   handleClick = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     })
//   }

//   render() {
//     return (
//       <nav>
//         <ul className="start">
//           <li className="logo">
//             <a href="/">
//               <img src="/static/logo.svg" alt="the Amherst Student" />
//             </a>
//           </li>
//           {links.map(({ key, href, label }) => (
//             <li key={key} className="desktop">
//               <Link href={href} prefetch>
//                 <a>{label}</a>
//               </Link>
//             </li>
//           ))}
//           <li className="desktop">
//             <Link href="/search" prefetch>
//               <a>
//                 <Icon size={16} icon={search} />
//               </a>
//             </Link>
//           </li>

//           <li className="navIcon" onClick={this.handleClick}>
//             <Icon size={24} icon={navicon} />
//           </li>
//         </ul>

//         <style jsx>{`
//           nav {
//             position: absolute;
//             display: flex;
//             width: 100%;
//             height: 10%;
//             z-index: 2;
//             background-color: white;
//             background: #ffffff;
//             box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
//             margin: auto;
//             align-items: center;
//             flex-direction: row;
//             margin-bottom: 80px;
//           }

//           nav.wrapper {
//             flex-direction: column;
//           }

//           .mobile {
//             display: flex;
//             margin-block-start: 0em;
//             margin-block-end: 0em;
//             margin-inline-start: 0px;
//             margin-inline-end: 0px;
//           }
//           a {
//             text-decoration: none;
//             transition: all 0.5s ease;
//           }
//           li {
//             display: flex;
//             font-family: 'europa';
//             font-size: 14px;
//             width: auto;
//             margin: auto 0;
//           }
//           li,
//           a {
//             text-decoration: none;
//             color: #5d3c85;
//           }
//           img {
//             height: 100%;
//             width: auto;
//           }
//           .logo {
//             height: 20px;

//             padding: 0px;
//           }

//           .navIcon {
//             display: none;
//           }
//           .mobile {
//             display: none;
//           }
//         `}</style>
//       </nav>
//     )
//   }
// }

// export default Nav
