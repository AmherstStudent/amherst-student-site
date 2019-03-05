import React from 'react'
import Link from 'next/link'
import Category from './Category'
const TextOnlyCard = ({ article }) => (
  <div className="textOnlyCard">
    <div className="name">
      <Category category="news" />
    </div>
    <div className="textOnlyContent">
      <Link href={`/article/${article.slug}`} passHref>
        <h2>dfdfd{article.title}</h2>
      </Link>
      <p className="byline">
        by <span className="author">{article.author.username}</span> ||{' '}
        {article.author.reporterTitle} | {article.issue.name.toUpperCase()}
      </p>
      <p>{article.excerpt}</p>
    </div>
    <style jsx>
      {`
        .textOnlyCard {
          background: white;
          height: calc(1 / 3 * 100% - (1 - 1 / 3) * 16px);
          display: flex;
          flex-direction: column;
        }
        @media screen and (max-width: 768px) {
          .textOnlyCard {
            grid-column: span 6;
          }
        }

        .textOnlyContent {
          padding: var(--gen-padding);
          margin-top: 50px;
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
      `}
    </style>
  </div>
)

export default TextOnlyCard
