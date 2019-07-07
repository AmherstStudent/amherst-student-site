import React from 'react'
import Card from '../Basics/card'

const Image_Card = props => (
  <Card className={`margin-20 ${props.className}`}>
    <figure>
      <img src={props.article.featuredImage.url} />
      <figcaption>
        <p>{props.article.imagecaption}</p>
      </figcaption>
    </figure>

    <style jsx="jsx">
      {`
        img {
          height: 100%;
          max-height: 90vh;
          padding: 0px;
          position: relative;
          max-width: 100%;
          vertical-align: middle;
        }
        figure img {
          margin: auto;
        }
        figure {
          margin: 0;
          position: relative;
          display: flex;
          background: black;
          object-fit: contain;
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
          font-height: 28px;
          font-size: 14px;
          padding-right: 10px;
        }
      `}
    </style>
  </Card>
)

export default Image_Card
