import React from 'react'
import NextSeo from 'next-seo'

//Format
import Head from '../components/head'

import Main from '../components/main.js'

//Presenttional Cards
import FeatureNewsCard from '../components/featurenewscard.js'
import MediaCard from '../components/mediacard.js'
import MediaCard3 from '../components/mediacard3.js'
import OneThirdCard from '../components/thirdcard.js'
import FeatureCard from '../components/FeatureCard.js'
import Container from '../components/container.js'
import TextOnlyCard from '../components/TextOnlyCard.js'
import MiniCard from '../components/MiniCard.js'
import MiniTextCard from '../components/MiniTextCard.js'
//Graphql requests
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { HOME_PAGE } from '../lib/queries'

const Home = props => (
  <Container>
    <Query query={HOME_PAGE} errorPolicy="all">
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading article." />
        if (loading) return <div>Loading</div>

        let view = data.views[0]

        return (
          <>
            <FeatureCard article={view.news_left_big} />
            <div className="family">
              <TextOnlyCard article={view.news_right_first} />
              <TextOnlyCard article={view.news_right_second} />
              <TextOnlyCard article={view.news_right_third} />
            </div>

            <MiniTextCard article={view.opinion_first} />
            <MiniTextCard article={view.opinion_second} />
            <MiniTextCard article={view.opinion_third} />

            <FeatureCard article={view.arts_living_big} className="span-6" />
            <div className="family">
              <TextOnlyCard article={view.arts_living_first_third} />
              <TextOnlyCard article={view.arts_living_second_third} />
              <TextOnlyCard article={view.arts_living_third_third} />
            </div>

            <MiniCard article={view.sports_first} className="span-4" />
            <MiniCard article={view.sports_second} className="span-4" />
            <MiniCard article={view.sports_third} className="span-4" />
          </>
        )
      }}
    </Query>

    <style jsx="jsx">
      {`
        :global(body, html) {
          background: var(--main-bg-color);
        }
        .tripleContainer {
          grid-column-start: 1;
          grid-column-end: 7;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .family {
          grid-column: span 3;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: calc(100% + 5px);
        }
        @media screen and (max-width: 768px) {
          .tripleContainer {
            grid-column: 1 / 13;
          }
        }
      `}
    </style>
  </Container>
)

export default Home
