import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'
let LOCAL_URI = "http://localhost:1337/"
const MediaCard = (props) => (
  <Card className={`${props.className}`}>
  <div className="cardHeader" style={{ backgroundImage: `url('${LOCAL_URI +props.article.featuredImage.url}')`}}>
    <span>{props.category}</span>
  </div>
  <Container>
    <Link href={`/article/${props.article.slug}`}>
      <div className="cardContent">

        <h2 className="cardTitle">{props.article.title}</h2>
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
      }
      @media screen and (max-width: 768px){
        .cardHeader{
          min-height: 250px;
        }

      }
      span {
        background: #5D3C85;
        color: white;
        font-family: "europa",sans-serif;

        font-size: 14px;
        letter-spacing: 0.12px;
        line-height: 21px;
        position: absolute;
        margin-top: 20px;
        padding: 5px;
        margin-left: 30px;
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
        padding-left: 2px;
        padding-top: 10px;
        margin-left: 0;
      }
      .cardText {
        padding-top: 5px;
      }
     `}
   </style>
</Card>
)

export default MediaCard
