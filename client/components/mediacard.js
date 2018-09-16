import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'
let LOCAL_URI = 'https://api.amherststudent.com'
const MediaCard = ({ article, className }) => (
  <Card className={`${className}`}>
    <Link href={`/article/${article.slug}`} passHref>
      <a>
        <div
          className="cardHeader"
          style={
            Boolean(article.featuredImage)
              ? { backgroundImage: `url('${article.featuredImage.url}')` }
              : { display: 'none' }
          }
        >
          <span>{article.category.name.toUpperCase()}</span>
        </div>
      </a>
    </Link>

    <div className="cardContent">
      <Link href={`/article/${article.slug}`} passHref>
        <a>
          <h2 className="cardTitle">{article.title}</h2>
        </a>
      </Link>
      <p className="cardAuthor">
        by <Link href={{ pathname: '/author', query: { id: article.author._id } }}><a>{article.author.username},</a></Link> {article.author.reporterTitle} | {' '}{article.issue.name.toUpperCase()}
      </p>
      <p className="cardText">{article.excerpt}.</p>
    </div>

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
        @media screen and (max-width: 768px) {
          .cardHeader {
            min-height: 250px;
          }
        }
        span {
          background: #5d3c85;
          color: white;
          font-family: 'europa', sans-serif;

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
        .cardText {
          font-size: 16px;
        }
        .cardTitle {
          -webkit-margin-before: 0.2em;
          -webkit-margin-after: 0.2em;
        }
        .cardAuthor {
          -webkit-margin-before: 0em;
          -webkit-margin-after: 0em;
          margin-top: -0.5em;
        }
        .cardContent {
          padding-bottom: 1em;
          padding-left: 2px;
          padding-top: 10px;
          margin-left: 20px;
          margin-right:20px;
        }
        .cardText {
          padding-top: 5px;
        }
        a {
          text-decoration: none;
          color: rgb(85, 26, 139);
        }
        a:hover{
          color:grey;
        }
        .cardTitle:hover {
          color: grey;
        }
      `}
    </style>
  </Card>
)

export default MediaCard
