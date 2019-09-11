import React from 'react'
// SEO check
// FrontPAge

//Presentational Cards
import FeatureCard from '../components/HomePage/FeatureCard.js'
import TextOnlyCard from '../components/HomePage/TextOnlyCard.js'
import MiniCard from '../components/HomePage/MiniCard.js'
import MiniTextCard from '../components/HomePage/MiniTextCard.js'
import ErrorMessage from '../components/Basics/ErrorMessage'
//Graphql requests
import { Query } from 'react-apollo'
import { GetHomePage } from '../lib/queries'
import NavBar from '../components/Layout/NavBar'

const Home = () => (
  <>
    <NavBar />
    <main>
      <Query query={GetHomePage} errorPolicy="all">
        {({ loading, error, data }) => {
          if (error)
          
            return (
        
              <ErrorMessage
                className="span-6"
                message="Error loading page, contact us on Twitter, FB or Instagram for support."
              />
            )
          if (loading) return <div>Loading</div> //TODO: Add a proper loading state
          console.log(data)
          let view = data.views[0]
          // Add to front page error components
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

              <FeatureCard article={view.arts_living_big} />
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
    </main>
    <style jsx="jsx">
      {`
        :global(body, html) {
          background: var(--main-bg-color);
        }
        main {
          width: 87vw;
          margin: 0 auto;
          margin-top: 16px;
          display: grid;
          grid-template-columns: repeat(6, 0.1666667fr);
          grid-template-rows: auto;
          grid-gap: 10px;
          grid-column-gap: 10px;
          grid-row-gap: 16px;
        }

        .family {
          grid-column: span 3;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: calc(100% + 5px);
        }
        @media screen and (max-width: 768px) {
          .family {
            height: calc(100% +40px);
            margin-bottom: 10vh;
          }
        }
        .span-6 {
          grid-column: span 6;
        }
      `}
    </style>
  </>
)

export default Home
