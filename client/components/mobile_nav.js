import React from 'react'
import Link from 'next/link'
import Container from './container.js'

const MobileNav = (props) =>(
  <Fragment>
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
  <style jsx>
  {`
    .mobile{
      display:flex;
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

  `} </style>
  </Fragment>
)

export default MobileNav
