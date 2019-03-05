import React from 'react'
import Link from 'next/link'
import Category from './Category'

const MiniCard = ({ article }) => (
  <div className="miniCard">
    <div className="miniCardImage">
      <Category category={article.category.name} />
      <img src={article.featuredImage.url} />
    </div>
    <div className="miniCardContent">
      <Link href={`/article/${article.slug}`} passHref>
        <h2>
          <a>{article.title}</a>
        </h2>
      </Link>
      <p className="byline">
        by <span className="author">{article.author.username}</span> ||{' '}
        {article.author.reporterTitle} | {article.issue.name.toUpperCase()}
      </p>
    </div>
    <style jsx>
      {`
        .miniCard {
          grid-column: span 2;
          background: white;
          height: 470px;
          display: flex;
          flex-direction: column;
        }
        .miniCardImage {
          height: 70%;
          width: 100%;
        }
        .miniCardImage img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .miniCardContent {
          padding: var(--gen-padding);
          height: 30%;
        }
        .byline {
          font-family: Merriweather;
          font-style: italic;
          font-size: 11px;
          color: #7f7f7f;
          letter-spacing: 0.03px;
        }
        .author {
          color: var(--light-purple);
        }
        p {
          font-family: Merriweather;

          font-size: 12px;
          color: #000000;
          letter-spacing: 0.03px;
          line-height: 25px;
        }
        h2 {
          line-height: 36px;
        }
      `}
    </style>
  </div>
)

export default MiniCard