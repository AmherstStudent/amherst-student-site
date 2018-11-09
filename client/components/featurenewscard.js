import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FAVARTICLE } from '../lib/queries'

const FeatureNewsCard = props => (
  <Card className={`${props.className}`}>
    <Container>
      <div className="cardContent">
        <h3 className="cardTitle">TOP ARTICLES</h3>
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
                    <h4>{article.title}</h4>
                  </a>
                </Link>
                <p className="caption">by {article.author.username}</p>
                <hr />
              </div>
            ))
          }}
        </Query>
      </div>
    </Container>

    <style jsx>{`
      h4 {
        font-family: 'adobe-garamond-pro', serif;
        font-weight: 600;
        font-style: italic;
        font-size: 26px;
        color: #000000;
        letter-spacing: 0.05px;
        text-align: center;
      }
      .cardContent {
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      h4 {
        margin: 0;
      }
      .topArticle {
        margin-top: 20px;
      }
      h3 {
        font-family: 'europa', sans-serif;
      }
      h4,
      a {
        text-decoration: none;
      }
      h4:hover {
        color: grey;
      }
      .caption {
        font-size: 16px;
      }
      #last {
        padding-bottom: 20px;
      }
    `}</style>
  </Card>
)

export default FeatureNewsCard
