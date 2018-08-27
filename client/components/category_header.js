import React from 'react'
import Link from 'next/link'
import Card from './card'

const Category_Header = (props) => (
  <Card className="ting margin-20">
    <div className="header">
      <h1>{props.type.toUpperCase()}  </h1>
    </div>
      <style jsx>{`
        h1{
          /* NEWS: */
          font-family: Adobe Garamond;
          font-size: 64px;
          color: #FFFFFF;
          letter-spacing: 0.34px;
          text-align: right;
          background: rgba(0,0,0,0.7);
          position: absolute;
          width: 100%;
          bottom: 0;
          margin: 0;
          height:auto;
          padding-bottom: 20px;
          padding-top: 10px;
          padding-right: 20px;

        }
        .header{
          background-image: url('https://assets.forwardcdn.com/images/cropped/amherst-college-buildings-img-6512-1500990972.JPG');
          height: 500px;
          background-size: 100%;
           background-position: center;
           position: relative;

        }
        .span-14{
          height: 300px;
        }
        .ting{
          grid-column: span 14;
          height: 300px;
        }


     `}</style>
  </Card>

)

export default Category_Header
