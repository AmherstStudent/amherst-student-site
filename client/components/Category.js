import React from 'react'
import Link from 'next/link'

const Category = props => (
  <span className="category">
    <Link href={`/category/${props.category}`} passHref>
      <a>{props.category.toUpperCase()}</a>
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
          cursor: pointer;
          text-decoration: none;
        }
      `}
    </style>
  </span>
)

export default Category
