import React from 'react'
import Link from 'next/link'
import Category from '../Basics/Category'

const MiniTextCard = ({ article }) => (
  <div className="miniTextCard">
    <div className="category">
      <Category category={article.category.name} />
    </div>
    <div className="miniTextCardContent">
      <Link href={`/article/${article.slug}`} passHref>
        <a>
          <h2>{article.title}</h2>
        </a>
      </Link>
      <p className="byline">
        by <span className="author">{article.author.username}</span> || Issue {article.issue.name}
      </p>
      <p>
        {article.excerpt}
      </p>
    </div>
    <style jsx>
      {`
        .miniTextCard {
          background: white;
          grid-column: span 2;
          background: white;
          height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media screen and (max-width: 768px) {
          .miniTextCard {
            grid-column: span 6;
          }
        }

        .miniTextCardContent {
          padding: var(--gen-padding);
          height: 86%;
          width: 100%;
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
          font-size: 12.5px;
          color: #000000;
          letter-spacing: 0.03px;
          line-height: 25px;
        }
        h2 {
          width: 75%;
          margin-bottom: 10px;
          line-height: 31px;
        }
        hr {
          margin-top: 10px;
          border-width: 5px;
          border-style: solid;
          width: 15%;
          right: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;
          border-color: var(--dark-purple);
        }
        .excerpt {
          margin-top: 20px;
          width: 80%;
        }
        a {
          text-decoration: none;
        }
      `}
    </style>
  </div>
)

export default MiniTextCard
