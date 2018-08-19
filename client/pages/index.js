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
import fetch from 'isomorphic-fetch'


const Home = (props) => (
  <div className="main-content">
    <Head title="Home" />
      <h1>Words</h1>



      <Container>
      <Grid>
        <MediaCard className="span-9"/>
        <FeatureNewsCard className="span-4"><p>Word</p></FeatureNewsCard>
        <Card className="span-2"><p>Word</p></Card>


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
