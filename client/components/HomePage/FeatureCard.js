import React from 'react'
import Link from 'next/link'
import Category from '../Basics/Category'
// TODO place null guards
// add itemprop
const FeatureCard = ({ article }) => (
  <div className="featureCard">
    <div className="featureCardImage">
      <Category prefetch={false} category={article.category.name} />
      <img src={article.featuredImage.url} />
    </div>
    <div className="featureCardDescription">
      <Link prefetch={false} href={`/article/${article.slug}`} passHref>
        <a>
          <h2>{article.title}</h2>
        </a>
      </Link>
      <p className="byline">
        by <span className="author">{article.author.username}</span> ||{' '}
        {article.author.reporterTitle} |{article.issue.name.toUpperCase()}
      </p>
      <p>{article.excerpt}</p>
    </div>

    <style jsx>
      {`
        .featureCard {
          background: white;
          grid-column: span 3;
          display: flex;
          flex-direction: column;
        }
        @media screen and (max-width: 768px) {
          .featureCard {
            grid-column: span 6;
          }
        }
        .featureCardImage {
          width: 100%;
          flex-grow: 2;
        }
        .featureCardDescription {
          flex-grow: 1;
        }

        .featureCardImage img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          z-index: 3;
        }
        .featureCardDescription {
          padding: var(--gen-padding);
          height: auto;
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
      `}
    </style>
  </div>
)

export default FeatureCard
