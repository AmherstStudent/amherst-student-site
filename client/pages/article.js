import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Grid from '../components/grid.js'
import Card from '../components/card.js'
import AuthorCard from '../components/authorcard'
import FeatureNewsCard from '../components/featurenewscard.js'
import ImageCard from '../components/image_card'
import {withRouter} from 'next/router'
import Article_Core from '../components/article_core'
import Main from '../components/main'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import moment from 'moment'
import CommentsContainer from '../components/comments'
import Article_Header from '../components/article_header'
import {ARTICLE_LOOKUP} from '../lib/queries.js'



const Article = withRouter((props) => (
  <Main>


    <Query query={ARTICLE_LOOKUP} variables={{ slug: props.router.query.slug }}>
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

          return (<Grid>
            <Head title={article.title}>
              <meta name="description" content={article.excerpt}  />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:url" content={`amherststudent.com/${article.slug}`} />
                <meta property="og:site_name" content="The Amherst Student" />
            </Head>
            <Article_Header className="header" article={article}/>

            <article>
              {imageChecker() ? <ImageCard article={article}/> : ' '}

              <Article_Core article={article}/>
              <CommentsContainer article={article}/>
            </article>

            <aside>
              <AuthorCard className="margin-20" type="author" author={article.author}/>
              <FeatureNewsCard className="margin-20"/>
            </aside>
          </Grid>)
        }
      }
    </Query>


  <style jsx="jsx">
    {
      `


      @media only screen and (min-width: 1300px) {
        article {
          grid-column: 1 / 11;
        }
        aside {
          grid-column: 11/ 19;
        }

      }
      article > * {
        margin-bottom: 15%;
      }
      @media only screen and (max-width: 1300px) {
        article {
          grid-column: span 19;
        }
        aside {
          grid-column: span 19;
        }

      }



       `
    }</style>
</Main>))

export default Article
