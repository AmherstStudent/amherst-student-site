import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Container from '../components/container'
import Grid from '../components/grid.js'
import Card from '../components/card.js'
import AuthorCard from '../components/authorcard'
import FeatureNewsCard from '../components/featurenewscard.js'
import ImageCard from '../components/image_card'
import {withRouter} from 'next/router'
import Article_Core from '../components/article_core'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import moment from 'moment'
import CommentsContainer from '../components/comments'
import Article_Header from '../components/article_header'

const query = gql `
  fragment ArticlePageDetails on Article {
    title
    excerpt
    slug
    category {
      name
    }
    updatedAt
    featuredImage {
      url
    }
    author {
      username
      reporterTitle
      reporterBio
      reporterPhoto{
        url
      }
    }
    volumeIssue{
      volume_issue_number
    }
    content
    _id

  }

  query Article_Lookup($slug: String!){
    articles(where: { slug: $slug }) {
      ...ArticlePageDetails
    }
  }
`

const Article = withRouter((props) => (
  <div className="main-content">

  <Container>
    <Query query={query} variables={{ slug: props.router.query.slug }}>
      {
        ({loading, error, data}) => {
          if (loading)
            return null;
          if (error)
            return `Error!: ${error}`;
          let article = data.articles[0]
          function imageChecker(){
          if (article.featuredImage === null) {
            return false;
          }
          else {
            return true;
          }
          }

          return (<Grid className="news">
            <Head title={article.title}>
              <meta name="description" content={article.excerpt}  />
            </Head>
            <Article_Header className="header" article={article}/>

            <article>
              {imageChecker() ? <ImageCard article={article}/> : ' '}

              <Article_Core article={article}/>
              <CommentsContainer article={article}/>
            </article>

            <aside className="span-4">
              <AuthorCard type="author" author={article.author}/>
              <FeatureNewsCard className="article"/>
            </aside>
          </Grid>)
        }
      }
    </Query>
  </Container>

  <style jsx="jsx">
    {
      ` .main-content {
        padding-top: 300px;
        min-height: 100vh;
        font-family: "adobe-garamond-pro",serif;
        background: #F1F1F1;
        padding-top: 180px;
        padding-bottom: 20px;
      }

      article {
        grid-column: 1 / 14;

      }
      @media only screen and (min-width: 1000px) {
        article {
          grid-column: 1 / 9;
        }
      }
      article > * {
        margin-bottom: 15%;
      }
      .span-4 {
        grid-column: span 4;
      }
      @media only screen and (min-width: 1000px) {
        aside {
          margin: 0 auto;
        }
      }

      .span-12 {
        height: contain;
      }

      .header {
        grid-column: 1/14;
      }
       `
    }</style>
</div>))

export default Article
