import React from 'react'
import Card from '../Basics/Card'

const Image = ({caption, image}) => (
    <figure>
      <img src={image} />
      <figcaption>
        {caption}
      </figcaption>

    <style jsx="jsx">{`
      figure {
        margin: 0;
        position: relative;
        display: flex;
        background: black;
        margin-bottom: 20px;
      }

      img {
        max-height: 90vh;
        object-fit: contain;
        position: relative;
        max-width: 100%;
      }
        
      figcaption {
        position: absolute;
        width: 100%;
        padding: 20px 25px;
        bottom: 0px;
        left: 0px;
        color: white;
        background: rgba(0, 0, 0, 0.55);
        font-family: 'Merriweather', sans-serif;
        line-height: 24px;
        font-size: 14px;
        color: white;
      }

    
      `}</style>
    </figure>
)

export default Image
