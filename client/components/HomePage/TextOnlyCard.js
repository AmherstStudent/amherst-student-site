import React from 'react'
import Link from 'next/link'
import Category from '../Basics/Category'

const TextOnlyCard = ({ article }) => (
  <div className="textOnlyCard">
    <div className="name">
      <Category category={article.category.name} />
    </div>
    <div className="textOnlyContent">
      <Link href={`/article/${article.slug}`} passHref>
        <a>
          <h2>{article.title}</h2>
        </a>
      </Link>
      <p className="byline">
        by <span className="author">{article.author.username}</span> ||{' '}
        {article.author.reporterTitle} |
{article.issue.name.toUpperCase()}
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
          align-item: center;
          justify-content: center;
        }
        @media screen and (max-width: 768px) {
          .textOnlyCard {
            width: 87vw;
          }
        }
        .name {
          height: 65px;
        }
        .textOnlyContent {
          padding: var(--gen-padding);
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
        a {
          text-decoration: none;
        }
        @media screen and (max-width: 768px) {
          h2 {
            font-size: 21px;
          }
        }
      `}
    </style>
  </div>
)

export default TextOnlyCard
