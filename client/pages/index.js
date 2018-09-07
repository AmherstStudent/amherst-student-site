import React from 'react'

//Format
import Head from '../components/head'
import Grid from '../components/grid.js'
import Main from '../components/main.js'

//Presenttional Cards
import FeatureNewsCard from '../components/featurenewscard.js'
import MediaCard from '../components/mediacard.js'
import MediaCard3 from '../components/mediacard3.js'
import OneThirdCard from '../components/thirdcard.js'

//Graphql requests
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import {GET_HOME_PAGE} from '../lib/queries.js'



const Home = props => (
  <Main>
    <Head title="The Amherst Student">
      <meta property="og:description" content="The Amherst Student, the student-supported newspaper of Amherst College." />
    </Head>

    <Query query={GET_HOME_PAGE}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`

        let main_view = data.views[0]

        return (
            <Grid>
              <MediaCard article={main_view.top_article} className="span-8" />

              <FeatureNewsCard className="span-5" />

              <div className="tripleContainer">
                <OneThirdCard article={main_view.news_right_first} />
                <OneThirdCard article={main_view.news_right_second} />
                <OneThirdCard article={main_view.news_right_third} />
              </div>
              <div className="big_card">
                <MediaCard article={main_view.news_left_big} className="span-7" />
              </div>
              <MediaCard3 article={main_view.opinion_first} className="span-4" />
              <MediaCard3 article={main_view.opinion_second} className="span-4" />
              <MediaCard3 article={main_view.opinion_third} className="span-5" />
              <div className="tripleContainer">
                <OneThirdCard article={main_view.arts_living_first_third} />
                <OneThirdCard article={main_view.arts_living_second_third} />
                <OneThirdCard article={main_view.arts_living_first_third} />
              </div>
              <div className="big_card">
                <MediaCard article={main_view.arts_living_big} className="span-7" />
              </div>

              <MediaCard3 article={main_view.sports_first} className="span-4" />
              <MediaCard3 article={main_view.sports_second} className="span-4" />
              <MediaCard3 article={main_view.sports_third} className="span-5" />
            </Grid>
        )
      }}
    </Query>

    <style jsx="jsx">
      {`

        .tripleContainer {
          grid-column-start: 1;
          grid-column-end: 7;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media screen and (max-width: 768px) {
          .tripleContainer {
            grid-column: span 18;
          }
        }

        .words:last-child {
          grid-column-end: end;
        }
        .third {
          margin-bottom: 200px !important;
        }

        .big_card {
          grid-column-start: 7;
          grid-column-end: 14;
        }
        @media screen and (max-width: 768px) {
          .big_card {
            grid-column: span 18;
          }
        }
        .span-14 {
          grid-column: 1 / 16;
          display: flex;
          justify-content: space-between;
        }

      `}
    </style>
  </Main>
)

export default Home
