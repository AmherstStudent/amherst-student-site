import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const Image_Card = props => (
  <Card className={`margin-20 black ${props.className}`}>
    <figure>
      <img src={props.article.featuredImage.url} />
      <figcaption>
        <p>{props.article.imagecaption}</p>
      </figcaption>
    </figure>

    <style jsx="jsx">
      {`
        img {
          width: auto;
          height: 100%;
          max-height: 700px;
          padding: 0px;
          margin: auto;
        }
        figure img {
          margin: auto;

      }
        figure {
          margin: 0;
          position: relative;
          display: flex;
        }
        figcaption {
          position: absolute;
          width: 100%;
          padding: 10px;
          bottom: 0px;
          left: 0px;
          color: white;
          background: rgba(0, 0, 0, 0.7);
        }
        p {
          color: white;
          font-weight: 100;

          font-size: 16px;
          padding-right: 10px;
        }
        img {
          vertical-align: bottom;
        }

      `}
    </style>
  </Card>
)

export default Image_Card
