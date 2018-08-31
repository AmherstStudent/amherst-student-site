import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'
let LOCAL_URI = "http://api.amherststudent.com"
const MediaCard = (props) => (
  <Card className={`${props.className}`}>
  <Link href={`/article/${props.article.slug}`} passHref>
  <a>
  <div className="cardHeader" style={ Boolean(props.article.featuredImage)  ? {backgroundImage: `url('${LOCAL_URI + props.article.featuredImage.url}')`}  : {display:'none'} }>
    <span>{props.article.category.name.toUpperCase()}</span>
  </div>
  </a>
  </Link>




      <div className="cardContent">
        <Link href={`/article/${props.article.slug}`} passHref>
        <a><h2 className="cardTitle">{props.article.title}</h2></a>
        </Link>
        <p className="cardAuthor">by {props.article.author.username}, {props.article.author.reporterTitle} </p>
        <p className="cardText">{props.article.excerpt}.</p>

      </div>




  <style jsx="jsx">
    {`
    .cardHeader {
        min-height: 450px;
        width: 100%;
        overflow: hidden;
        background: bottom;
        background-size: contain;
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
        margin-left: 20px;
      }
      .cardTitle {
        font-style: italic;
        font-weight: 600;
      }
      .cardAuthor {
        font-style: italic;
        font-size: 14px;
        color: #000000;
        letter-spacing: -0.16px;
        line-height: 22px;
      }
      .cardText{
        font-size:16px;
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
        margin-left: 20px;
      }
      .cardText {
        padding-top: 5px;
      }
      a {
        text-decoration: none;
      }
      .cardTitle:hover{
        color: grey;
      }

     `}
   </style>
</Card>
)

export default MediaCard
