import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import Container from '../components/container'
import Grid from '../components/grid'
import Card from '../components/card'
import moment from 'moment'

const List_Item = ({ article }) => (
  <Card className="list_item margin-20">
    <Container>
      <div className="cardContent">
        <span>{article.category.name.toUpperCase()}</span>
        <Link href={`/article/${article.slug}`} passHref>
          <a>
            <h4>{article.title}</h4>
          </a>
        </Link>
        <p className="author">
          by{' '}
          <Link href={{ pathname: '/author', query: { id: article.author._id } }}>
            <a>{article.author.username}</a>
          </Link>
          , {article.author.reporterTitle} || {moment(article.createdAt).format('MMMM D YYYY')} ||{' '}
          {article.issue.name}
        </p>
        <p>{article.excerpt}</p>
      </div>
    </Container>
    <style jsx="jsx">
      {`
        .cardContent {
          padding: 20px;
        }
        h4 {
          font-weight: 600;
          font-style: italic;
          font-size: 26px;
          line-height: 1.15em;
          color: #000000;
          margin: 15px 0;
          margin-bottom: 0;
        }
        span {
          /* THIS WEEK’S HEADLINE: */
          background: #5d3c85;
          color: white;
          font-family: 'europa', sans-serif;
          font-size: 14px;
          letter-spacing: 0.12px;
          line-height: 21px;
          padding: 5px;
        }
        .author {
          font-size: 14px;
          margin-bottom: 10px;
        }
        p {
          /* Aziz Khan was picked: */

          color: #000000;
          letter-spacing: 0;
          line-height: 20px;
        }
        a {
          text-decoration: none;
          color: rgb(85, 26, 139);
        }
        h4:hover {
          color: grey;
        }
      `}
    </style>
  </Card>
)
export default List_Item
