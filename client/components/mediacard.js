import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const MediaCard = (props) => (
  <Card className={`${props.className}`}>
  <div className="cardHeader">
    <span>{props.category}</span>
  </div>
  <Container>
    <Link as={`/article/${props.slug}`} href={`/article?slug=${props.slug}`}><div className="cardContent">
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardAuthor">by {props.author}</p>
        <p className="cardText">{props.excerpt}.</p>
      </div>
    </Link>
  </Container>

  <style jsx="jsx">
    {`
    .cardHeader {
        min-height: 450px;
        width: 100%;
        overflow: hidden;
        background: bottom;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("https://amherststudent.amherst.edu/sites/default/files/field/image/Screen%20Shot%202018-04-24%20at%2010.02.25%20PM.png");
      }
      span {
        background: #5D3C85;
        color: white;
        font-family: MarkPro-Bold;
        font-size: 14px;
        letter-spacing: 0.12px;
        line-height: 21px;
        position: absolute;
        margin-top: 20px;
        padding: 5px;
        margin-left: 4%;
      }
      .cardTitle {
        font-style: italic;
      }
      .cardAuthor {
        font-style: italic;
        font-size: 14px;
        color: #000000;
        letter-spacing: -0.16px;
        line-height: 22px;
      }
      .cardTitle {
        -webkit-margin-before: 0.20em;
        -webkit-margin-after: 0.20em;
      }
      .cardAuthor {
        -webkit-margin-before: 0.0em;
        -webkit-margin-after: 0.0em;
        margin-top: -0.5em;
      }
      .cardContent {
        padding-bottom: 1em;
        margin-top: 20px;
      }
      .cardText {
        padding-top: 5px;
      }
     `}
   </style>
</Card>
)

export default MediaCard
