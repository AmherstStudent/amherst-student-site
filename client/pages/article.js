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
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import moment from 'moment'

import CommentsContainer from '../components/comments'
import Article_Header from '../components/article_header'

const query = gql`
  fragment ArticleDetails on Article {
    title
    excerpt
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

  query Article_Lookup{
    articles(where: { slug: "counseling-center-sees-onethird-of-student-body" }) {
      ...ArticleDetails
    }
  }
`




const Article = withRouter((props) => (<div className="main-content">

  <Container>
    <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;
          console.log(data)
          let date = moment(data.articles[0].featuredImage.updatedAt).format('MMMM Do YYYY');
          console.log(date)
          let article = data.articles[0]
          return (

    <Grid className="news">
      <Article_Header className="header" article={article} />

      <article >
        <ImageCard article={article} />
        <Article_Core article={article} />
        <CommentsContainer article={article} />
      </article>

      <aside className="span-4">
        <AuthorCard author={data.articles[0].author}/>
        <FeatureNewsCard className="article"/>
      </aside>
  <p></p>
    </Grid>

  );
}}
</Query>
  </Container>

  <style jsx="jsx">
    {
      ` .main-content {
        padding-top: 300px;
        min-height: 100vh;
        font-family: 'Adobe Garamond Pro';
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


      .span-12 {
        height: contain;
      }





      .header{
        grid-column: 1/14;
      }


       `
    }</style>
</div>))

export default Article
