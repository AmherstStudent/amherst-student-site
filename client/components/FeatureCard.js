import React from 'react'
import Link from 'next/link'
import Category from './Category'

const FeatureCard = ({ article }) => (
  <div className="featureCard">


  <div className="featureCardImage">
  <Category category={article.category.name}/>
    <img src={article.featuredImage.url}/>
  </div>
  <div className="featureCardDescription">
  <Link href={`/article/${article.slug}`} passHref>
    <h2><a>{article.title}</a></h2>
    </Link>
    <p className="byline">by <span className="author">{article.author.username}</span> || {article.author.reporterTitle} | {article.issue.name.toUpperCase()}</p>
    <p>{article.excerpt}</p>
  </div>


  <style jsx>
  {`
    .featureCard{
      background: white;
      grid-column: span 3;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .featureCardImage {
      height: 78.0%;
      width: 100%;
    }

    .featureCardImage img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .featureCardDescription{
      padding: var(--gen-padding);

    }

    .byline {
      font-family: Merriweather;
      font-style: italic;
      font-size: 11px;
      color: #7F7F7F;
      letter-spacing: 0.03px;
    }
    .author{
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

export default FeatureCard
