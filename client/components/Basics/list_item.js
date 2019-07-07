import React from 'react'
import Link from 'next/link'
import Card from './card'
import moment from 'moment'
import Category from './Category'
//TODO: change name to Section but that's a lot of SEO
const List_Item = ({ article }) => (
  <Card className="list_item margin-20">
    <Category category={article.category.name} />
    <>
      <div className="cardContent">
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
          , {article.author.reporterTitle} ||{' '}
          <time>{moment(article.createdAt).format('MMMM D YYYY')}</time> || {article.issue.name}
        </p>
        <p>{article.excerpt}</p>
      </div>
    </>
    <style jsx="jsx">
      {`
        .cardContent {
          padding: 20px;
          margin-top: 30px;
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
          font-family: 'Karla', sans-serif;
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
