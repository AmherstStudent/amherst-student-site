import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FAVARTICLE } from '../lib/queries'

const FeatureNewsCard = props => (
  <Card className={`${props.className}`}>
    <>
      <div className="cardContent">
        <h3 className="cardTitle">TOP ARTICLES</h3>
        <hr className="undline" />
        <Query query={FAVARTICLE} errorPolicy="all">
          {({ loading, error, data }) => {
            if (loading) return null
            if (error) return `Error!: Help me${error}`

            let view = data.views[0]
            let top_articles = view.toparticles
            console.log(top_articles)

            return top_articles.map(article => (
              <div className="topArticle">
                <Link href={`/article/${article.slug}`} passHref>
                  <a>
                    <h5>{article.title}</h5>
                  </a>
                </Link>
                <p className="caption">by {article.author.username}</p>
                <hr />
              </div>
            ))
          }}
        </Query>
      </div>
    </>

    <style jsx>{`
      h5 {
        font-family: Merriweather-BoldItalic;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0.03px;
        margin-bottom: 5px;
      }
      .cardContent {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      .undline {
        margin: 10px 0 10px 0;
        border-color: black;
        border-width: 4.5px;
      }

      .topArticle {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      h3 {
        font-family: Karla;
        font-style: normal;
      }
      h4,
      a {
        text-decoration: none;
      }
      h4:hover {
        color: grey;
      }
      hr {
        margin-top: 10px;
      }
      .caption {
        font-family: Merriweather-LightItalic;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0.03px;
      }
      #last {
        padding-bottom: 20px;
      }
      h3 {
        font-family: Karla-Bold;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0.03px;
        font-style: normal;
      }
    `}</style>
  </Card>
)

export default FeatureNewsCard
