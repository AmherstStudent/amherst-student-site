import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'
let LOCAL_URI = 'https://api.amherststudent.com'
const MediaCard = ({ article, className }) => (
  <Card className={`media_card ${className}`}>
    <Link href={`/category/${article.category.name}`} passHref>
      <a>
        <span>{article.category.name.toUpperCase()}</span>
      </a>
    </Link>
    <Link href={`/article/${article.slug}`} passHref>
      <a>
        <div className="cardHeader">
          <img className="link" src={article.featuredImage.url} />
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
        by{' '}
        <Link href={{ pathname: '/author', query: { id: article.author._id } }}>
          <a>{article.author.username},</a>
        </Link>{' '}
        {article.author.reporterTitle} | {article.issue.name.toUpperCase()}
      </p>
      <p className="cardText">{article.excerpt}</p>
    </div>

    <style jsx="jsx">
      {`
        .cardHeader {
          height: 550px;
          width: 100%;
          top: 0;
          display: flex;
          position: relative;
        }
        @media only screen and (max-width: 800px) {
          .cardHeader {
            max-height: 300px;
          }
        }
        .link {
          object-fit: cover;
          width: 100%;
          margin-top: -40px;
          flex: 1;
          z-index: 1;
          position: relative;
        }

        span {
          background: #5d3c85;
          color: white;
          font-family: 'europa', sans-serif;
          font-size: 14px;
          letter-spacing: 0.12px;
          line-height: 21px;
          position: relative;
          padding: 5px;
          margin-left: 20px;
          top: 20px;
          z-index: 200;
          display: inline-block;
          height: 21px;
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
          padding: 0;
          margin: 10px auto;
        }
        .cardTitle {
          -webkit-margin-before: 0.2em;
          -webkit-margin-after: 0.2em;
          margin: 8px auto;
        }
        .cardAuthor {
          -webkit-margin-before: 0em;
          -webkit-margin-after: 0em;
          margin-top: -0.5em;
        }
        .cardContent {
          padding: 20px;
        }

        .cardText {
          padding-top: 5px;
        }
        a {
          text-decoration: none;
          color: rgb(85, 26, 139);
        }
        a:hover {
          color: grey;
        }
        .cardTitle:hover {
          color: grey;
        }
      `}
    </style>
  </Card>
)

export default MediaCard
