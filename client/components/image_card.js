import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const Image_Card = (props) => (
  <Card className={`article ${props.className}`}>
    <figure>
        <img src="https://amherststudent.amherst.edu/sites/default/files/field/image/Screen%20Shot%202018-04-24%20at%2010.02.25%20PM.png"/>
        <figcaption><em>{props.caption}</em></figcaption>
    </figure>



  <style jsx="jsx">
    {
      `
        img {
          width: 100%;
          height: auto;
          padding:0px;
        }
        figure{
          margin: 0;
          position:relative;
        }
        figcaption{

          position: absolute;
          width: 100%;
          padding: 10px;
          bottom: 0px;
          left: 0px;
          color: white;
          background: rgba(0,0,0,0.7);



        }
        em{
          margin-left: 3%;
          font-weight: 100;
          font-family: Adobe Garamond;
          font-size: 16px;


        }
        img{
          vertical-align: bottom;
        }


       `
    }</style>
</Card>)

export default Image_Card