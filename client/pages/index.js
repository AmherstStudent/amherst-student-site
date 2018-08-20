import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Footer from '../components/footer'
import Main from '../components/main'
import FeatureNewsCard from '../components/featurenewscard.js'
import Container from '../components/container.js'
import Card from '../components/card.js'
import Grid from '../components/grid.js'
import MediaCard from '../components/cardwimage.js'
import MediaCard3 from '../components/mediacard3.js'
import fetch from 'isomorphic-fetch'


const Home = (props) => (
  <div className="main-content">
    <Head title="Home" />
      <h1>Words</h1>



      <Container>
      <Grid>
        <MediaCard className="span-8"/>
        <FeatureNewsCard className="span-5"><p>Word</p></FeatureNewsCard>
        <div className="words">
          <Card className="third"/>
          <Card className="third"/>
          <Card className="third"/>
        </div>
        <div className="words2">
        <MediaCard className="span-7"/>
        </div>
        <MediaCard3 className="span-4"/>
        <MediaCard3 className="span-4"/>
        <MediaCard3 className="span-4"/>
        <div className="words">
          <Card className="third"/>
          <Card className="third"/>
          <Card className="third"/>
        </div>
        <div className="words2">
        <MediaCard className="span-7"/>
        </div>


      </Grid>
      </Container>







    <style jsx>{`
      .main-content{
        min-height: 100vh;
        font-family: 'Adobe Garamond Pro';
        background: #F1F1F1;
        padding-top:50px;
        padding-bottom: 20px;
      }
      .words{
        grid-column-start: 1;
        grid-column-end: 7;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      .words:last-child{
        grid-column-end: end;
      }
      .third{

        margin-bottom: 200px !important;
      }

      .words2{
        grid-column-start: 7;
        grid-column-end: 14;
      }

    `}</style>

    </div>


)

Home.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/article')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    articles: data
  }

}

export default Home
