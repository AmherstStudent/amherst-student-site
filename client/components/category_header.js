import React from 'react'
import Link from 'next/link'
import Card from './card'

const Category_Header = props => (

    <div className="header">
      <div className="bottom_Line">
        <h1>
          {props.type.toUpperCase()} <br />{' '}
        </h1>
      </div>
    <style jsx>{`
      h1 {
        /* NEWS: */
        font-family: 'Karla', serif;
        font-size: 2.5em;
        font-style: normal;
        color: #ffffff;
        letter-spacing: 0.34px;
        text-align: right;
        padding: 0;
        margin: 0 auto;
        bottom: 0;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .bottom_Line {
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        width: 100%;
        bottom: 0;
        margin: 0;
        padding-right: 20px;
      }
      .header {
        background-image: url('https://assets.forwardcdn.com/images/cropped/amherst-college-buildings-img-6512-1500990972.JPG');
        height: 400px;
        width: 100%;
        grid-column: span 6;
        background-size: cover;
        background-position: center;
        position: relative;

      }
    `}</style>
  </div>
)

export default Category_Header
