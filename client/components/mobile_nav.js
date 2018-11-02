import React from 'react'
import Link from 'next/link'
import Container from './container.js'

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
const MobileNav = (props) =>(
  <>

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
    li {
      display: flex;
      font-family: "europa";
      font-size: 14px;
      width: auto;
      margin: auto 0;
    }

  `} </style>
  </>
)

export default MobileNav
