import React from 'react'
import NextSeo from 'next-seo'

//Format
import Head from '../components/head'
import Nav from '../components/nav'

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
import { HOME_PAGE } from '../lib/queries'

const Home = props => (
  <Main>
    <NextSeo
      config={{
        title: 'The Amherst Student',
      }}
    />

    <Query query={HOME_PAGE} errorPolicy="all">
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: Help me${error}`

        let view = data.views[0]

        return (
          <Grid>
            <MediaCard article={view.top_article} className="span-8" />

            <FeatureNewsCard className="span-4" />

            <div className="tripleContainer">
              <OneThirdCard article={view.news_right_first} />
              <OneThirdCard article={view.news_right_second} />
              <OneThirdCard article={view.news_right_third} />
            </div>

            <MediaCard article={view.news_left_big} className="span-6" />

            <MediaCard3 article={view.opinion_first} className="span-4" />
            <MediaCard3 article={view.opinion_second} className="span-4" />
            <MediaCard3 article={view.opinion_third} className="span-4" />

            <div className="tripleContainer">
              <OneThirdCard article={view.arts_living_first_third} />
              <OneThirdCard article={view.arts_living_second_third} />
              <OneThirdCard article={view.arts_living_third_third} />
            </div>

            <MediaCard article={view.arts_living_big} className="span-6" />

            <MediaCard3 article={view.sports_first} className="span-4" />
            <MediaCard3 article={view.sports_second} className="span-4" />
            <MediaCard3 article={view.sports_third} className="span-4" />
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
            grid-column: 1 / 13;
          }
        }
      `}
    </style>
  </Main>
)

export default Home
