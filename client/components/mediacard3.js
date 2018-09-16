import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

let LOCAL_URI = 'https://api.amherststudent.com'
const MediaCard3 = ({article, className})=> (
  <Card className={`thrds ${className}`}>
    <Link href={`/article/${article.slug}`} passHref>
      <a>
        <div
          style={
            Boolean(article.featuredImage)
              ? { backgroundImage: `url('${article.featuredImage.url}')` }
              : { minHeight: '60px' }
          }
          className="cardHeader"
        >
          <span>{article.category.name.toUpperCase()}</span>
        </div>
      </a>
    </Link>
    <Container>
      <div className="cardContent">
        <Link href={`/article/${article.slug}`} passHref>
          <a>
            <h2 className="cardTitle">{article.title}</h2>
          </a>
        </Link>
        <br />
        <p className="cardAuthor">
          by <Link href={{ pathname: '/author', query: { id: article.author._id } }}><a>{article.author.username}</a></Link>, {article.author.reporterTitle} |{' '}{article.issue.name.toUpperCase()}
        </p>
        <p className="feat" style={Boolean(article.featuredImage) ? { display: 'none' } : {}}>
          {' '}
          {article.excerpt}{' '}
        </p>
      </div>
    </Container>

    <style jsx>{`
      .cardHeader {
        min-height: 200px;
        width: 100%;
        overflow: hidden;
        background: center;
        background-size: cover;
        background-repeat: no-repeat;
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

      .cardAuthor {
        font-style: italic;
        font-size: 14px;
        color: #000000;
        letter-spacing: -0.16px;
        line-height: 22px;
      }
      .cardTitle {
        -webkit-margin-before: 0.2em;
        -webkit-margin-after: 0.2em;
        color: black !important;
      }
      .cardAuthor {
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        margin-top: -0.5em;

      }
      .cardContent {
        padding-bottom: 1em;
        margin-top: 20px;
        color: black;
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
      .feat {
        font-size: 16px;
      }
      h2{
        color: black;
      }
    `}</style>
  </Card>
)
MediaCard3.defaultProps = {
  article: {
    slug: 'word',
    category: {
      name: 'Card'
    },
    featuredImage: 'none',
    title: 'Title',
    author: {
      username: 'Call me'
    }
  }
}

export default MediaCard3
