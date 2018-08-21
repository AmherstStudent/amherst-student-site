import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Container from '../components/container'
import Grid from '../components/grid.js'
import Card from '../components/card.js'
import FeatureNewsCard from '../components/featurenewscard.js'
import {withRouter} from 'next/router'

const Article = withRouter((props) => (
  <div className="main-content">
    <Head title="Article"/>
    <Container>
    <Grid className="news">
      <Card className="span-12">
      <h1>{props.router.query.title}</h1>
      <hr />
      </Card>

      <Card className="span-4">
      <Container>
      <p>Contnfenjd</p>
      </Container>
      </Card>
      <div className="span-2">
        <FeatureNewsCard className="span-2"/>
      </div>
    </Grid>
    </Container>

    <style jsx>{`

      .main-content{
        padding-top: 300px;
        min-height: 100vh;
        font-family: 'Adobe Garamond Pro';
        background: #F1F1F1;
        padding-top:180px;
        padding-bottom: 20px;
      }

      .span-4{
        width: 100%;
        grid-column: span 2;
      }

    `}</style>
  </div>

))



export default Article
