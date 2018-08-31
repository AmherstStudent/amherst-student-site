import React from 'react'

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
      reporterTitle
    }
    view{
      words
    }
  }

query HomePage{
views(limit: 1, sort: "createdAt:desc"){
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
  news_left_big{
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

const Home = (props) => (
  <div className="main-content">
  <Head title="The Amherst Student">
    <meta name="description" content="The Amherst Student, the student-supported newspaper of Amherst College." />
  </Head>

  <Query query={GET_HOME_PAGE}>
    {
      ({loading, error, data}) => {
        if (loading)
          return null;
        if (error)
          return `Error!: ${error}`;
        console.log(data);

        let main_view = data.views[0]

        return (<Container>
          <Grid>

            <MediaCard article={main_view.top_article} className="span-8"/>

            <FeatureNewsCard className="span-5"/>

          <div className="tripleContainer">
              <OneThirdCard article={main_view.news_right_first}/>
              <OneThirdCard article={main_view.news_right_second}/>
              <OneThirdCard article={main_view.news_right_third}/>
            </div>
            <div className="words2">
              <MediaCard article={main_view.news_left_big} className="span-7"/>
            </div>
            <MediaCard3 article={main_view.opinion_first} className="span-4"/>
            <MediaCard3 article={main_view.opinion_second} className="span-4"/>
            <MediaCard3 article={main_view.opinion_third} className="span-4"/>
          <div className="tripleContainer">
              <OneThirdCard article={main_view.arts_living_first_third}/>
              <OneThirdCard article={main_view.arts_living_second_third}/>
              <OneThirdCard article={main_view.arts_living_first_third}/>
            </div>
            <div className="words2">
              <MediaCard article={main_view.arts_living_big}  className="span-7"/>
            </div>

            <MediaCard3 article={main_view.sports_first} className="span-4"/>
            <MediaCard3 article={main_view.sports_second} className="span-4"/>
            <MediaCard3 article={main_view.sports_third} className="span-4"/>

          </Grid>

        </Container>);
      }
    }
  </Query>

  <style jsx="jsx">
    {
      ` .main-content {
        min-height: 100vh;
        font-family: "adobe-garamond-pro",serif;
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
      @media screen and (max-width: 768px){
        .tripleContainer{
          grid-column: span 16;
        }



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
      @media screen and (max-width: 768px){
        .words2{
          grid-column: span 16;
        }
      }
      .span-14{
        grid-column: 1 / 16;
        display:flex;
        justify-content: space-between;
      }

       `
    }</style>

</div>)


export default Home
