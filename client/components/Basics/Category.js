import React from 'react'
import Link from 'next/link'

const Category = ({ category }) => (
  <span className="category">
    <Link href={`/category/${category}`} passHref>
      <a>{category.toUpperCase()}</a>
    </Link>
    <style jsx>
      {`
        .category {
          color: white;
          text-decoration: none;
          font-family: 'Karla';
          font-weight: 700;
          font-size: 13px;
          color: #ffffff;
          letter-spacing: 0.03px;
          background: var(--dark-purple);
          padding: 10px;
          position: absolute;
          margin: var(--gen-padding);
        }
        a {
          font-family: 'Karla';
          font-weight: 700;
          color: white;
          text-decoration: none;
        }
      `}
    </style>
  </span>
)

export default Category
