import React from 'react'
import Link from 'next/link'
import Grid from '../components/grid.js'
import { withRouter } from 'next/router'

// GraphQL loading
import { ARTICLE_LOOKUP } from '../lib/queries.js'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

// NextSeo
import NextSeo from 'next-seo'
import { ArticleJsonLd } from 'next-seo'

// elements
import Main from '../components/main'
import Article_Header from '../components/article_header'
import Article_Core from '../components/article_core'
import ImageCard from '../components/image_card'
import FeatureNewsCard from '../components/featurenewscard.js'
import AuthorCard from '../components/authorcard'
import CommentsContainer from '../components/comments'
import Container from '../components/container'
import NewsContainer from '../components/NewsContainer'
const Article = withRouter(props => (
  <Query query={ARTICLE_LOOKUP} variables={{ slug: props.router.query.slug }} errorPolicy="all">
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return `Error!: ${error}`

      function imageChecker() {
        if (article.featuredImage === null) {
          return false
        } else {
          return true
        }
      }
      function nullImage() {
        if (imageChecker() == true) {
          var imageLink = [article.featuredImage.url]
          return imageLink
        }
        return []
      }
      function urlReturn() {
        return 'amherststudent.com/article' + article.slug
      }
      let article = data.articles[0]
      return (
        <NewsContainer article={article}>
          <>
            <NextSeo
              config={{
                title: article.title,
                description: article.excerpt,
                openGraph: {
                  url: urlReturn(),
                  title: article.title,
                  description: article.excerpt,
                  images: [
                    {
                      url: nullImage()
                    }
                  ]
                },
              }}
            />

            <ArticleJsonLd
              url={`amherststudent.com/article/${article.slug}`}
              title={`${article.title}`}
              images={nullImage()}
              datePublished={article.updatedAt}
              authorName={article.author.username}
              publisherName="The Amherst Student"
              publisherLogo="https://amherststudent.com/static/logo.svg"
              description={article.excerpt}
            />

            <article>
              {imageChecker() ? <ImageCard article={article} /> : ' '}

              <Article_Core article={article} />
              <CommentsContainer article={article} />
            </article>

            <aside>
              <AuthorCard className="margin-20 span-2" type="author" author={article.author} />
              <FeatureNewsCard className="margin-20" />
            </aside>
          </>

          <style jsx global>
            {`
              .main-container {
                background: white !important;
              }
              .container {
                background: white !important;
              }
            `}
          </style>
          <style jsx="jsx">
            {`
              @media only screen and (min-width: 1300px) {
                .header {
                  width: 100vw;
                }
                article {
                  grid-column: 1 / 5;
                }
                aside {
                  margin-top: 10px;
                  margin-right: 20px;
                  margin-left: 20px;
                  grid-column: 5/7;
                }
              }
              article > * {
                margin-bottom: 15%;
              }
              @media only screen and (max-width: 1300px) {
                article {
                  grid-column: span 6;
                }
                aside {
                  grid-column: span 6;
                }
              }
            `}
          </style>
        </NewsContainer>
      )
    }}
  </Query>
))

export default Article
