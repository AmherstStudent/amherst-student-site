import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import FeatureNewsCard from '../components/featurenewscard.js'
import Container from '../components/container.js'
import Card from '../components/card.js'
import Grid from '../components/grid.js'
import MediaCard from '../components/mediacard.js'
import MediaCard3 from '../components/mediacard3.js'
import OneThirdCard from '../components/thirdcard.js'
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'

export const GET_HOME_PAGE = gql `
  fragment ArticleDetails on Article {
    _id
    title
    excerpt
    slug
    category {
      name
    }
    featuredImage{
      url
    }
    author{
      username
    }
  }

query HomePage{
view(id: "5b7a80fe40025fc5daebd18f"){
  top_article{
    ...ArticleDetails
    }
  news_right_first{
    ...ArticleDetails
  }
  news_right_second{
    ...ArticleDetails
  }
  news_right_third{
    ...ArticleDetails
  }
  opinion_first{
    ...ArticleDetails
  }
  opinion_second{
    ...ArticleDetails
  }
  opinion_third{
    ...ArticleDetails
  }
  arts_living_first_third{
    ...ArticleDetails
  }
  arts_living_second_third{
    ...ArticleDetails
  }
  arts_living_third_third{
    ...ArticleDetails
  }
  arts_living_big{
    ...ArticleDetails
  }
  sports_first{
    ...ArticleDetails
  }
  sports_second{
    ...ArticleDetails
  }
  sports_third{
    ...ArticleDetails
  }
}
}`
console.log(GET_HOME_PAGE)

const Home = (props) => (<div className="main-content">
  <Head title="Home"/>

  <Query query={GET_HOME_PAGE}>
    {
      ({loading, error, data}) => {
        if (loading)
          return null;
        if (error)
          return `Error!: ${error}`;
        console.log(data);
        let main_view = data.view.top_article

        return (<Container>
          <Grid>

            <MediaCard slug={main_view.slug} category={'FEATURED'} author={main_view.author.username} excerpt={main_view.excerpt} title={main_view.title} className="span-8"/>

            <FeatureNewsCard className="span-5"/>

          <div className="tripleContainer">
              <OneThirdCard/>
              <OneThirdCard/>
              <OneThirdCard/>
            </div>
            <div className="words2">
              <MediaCard className="span-7"/>
            </div>
            <MediaCard3 className="span-4"/>
            <MediaCard3 className="span-4"/>
            <MediaCard3 className="span-4"/>
          <div className="tripleContainer">
              <OneThirdCard/>
              <OneThirdCard/>
              <OneThirdCard/>
            </div>
            <div className="words2">
              <MediaCard className="span-7"/>
            </div>

          </Grid>

        </Container>);
      }
    }
  </Query>

  <style jsx="jsx">
    {
      ` .main-content {
        min-height: 100vh;
        font-family: 'Adobe Garamond Pro';
        background: #F1F1F1;
        padding-top: 180px;
        padding-bottom: 20px;
      }
      .tripleContainer {
        grid-column-start: 1;
        grid-column-end: 7;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .words:last-child {
        grid-column-end: end;
      }
      .third {

        margin-bottom: 200px !important;
      }

      .words2 {
        grid-column-start: 7;
        grid-column-end: 14;
      }
       `
    }</style>

</div>)

// Home.getInitialProps = async function() {
//   const res = await fetch('http://localhost:1337/article')
//   const data = await res.json()
//
//   console.log(`Show data fetched. Count: ${data.length}`)
//
//   return {
//     articles: data
//   }
//
// }

export default Home
