import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const OneThirdCard = ({article, className}) => (
  <Card className={`third ${className}`}>
    <div>
      <div className="cardContent">

          <span className="category">{article.category.name.toUpperCase()}</span>


        <h4 className="cardTitle">
          <Link href={`/article/${article.slug}`} passHref>
            <a>{article.title}</a>
          </Link>{' '}
          <br />{' '}
          <span className="cardAuthor">
            by {article.author.username}, {article.author.reporterTitle} |{' '}{article.issue.name.toUpperCase()}
          </span>
        </h4>
        <p className="cardText">{article.excerpt}</p>
      </div>
      <div className="cardImage" />
    </div>

    <style jsx>{`
      .cardContent {
        margin: 0 0 0 10px;
        max-width: 90%;
        padding: 10px;
      }
      .category {
        background: #5d3c85;
        color: white;
        font-family: 'europa', sans-serif;
        font-size: 14px;
        letter-spacing: 0.12px;
        line-height: 21px;
        margin-top: 40px;
        padding: 5px;
      }

      .cardTitle {
        font-weight: 600;
        font-style: italic;
        font-size: 26px;
        line-height: 1.15em;
        color: #000000;
        letter-spacing: 0.05px;
        margin-bottom: 0px;
        margin-top: 10px;
        padding-top: 5pxl
      }

      a {
        text-decoration: none;
        color: black;
      }

      a:hover {
        color: grey;
      }

      .cardAuthor {
        font-size: 14px;
        font-weight: 100;
        padding: 0;
        margin: 0;
      }

      .cardText {
        margin-top: 2px;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
        line-height: 1.25em;
        padding-bottom: 10px;
      }

      br {
        height: 5px;
      }

      @media screen and (max-width: 768px) {
        .cardText {
          padding-bottom: 20px;
        }
      }



    `}</style>
  </Card>
)

OneThirdCard.defaultProps = {
  article: {
    category: {
      name: 'Card'
    },
    title: 'Title',
    author: {
      username: 'Call me'
    },
    slug: 'defaddult',
    excerpt: 'Word'
  }
}

export default OneThirdCard
