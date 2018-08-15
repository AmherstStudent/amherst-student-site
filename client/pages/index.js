import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Footer from '../components/footer'
import Main from '../components/main'
import Row from '../components/row'
import Container from '../components/container.js'
import Card from '../components/card.js'
import Grid from '../components/grid.js'

import fetch from 'isomorphic-fetch'


const Home = (props) => (
  <div className="main-content">
    <Head title="Home" />




      <Container>
      <Row>
        <Card flexiness={2}><p>Word</p></Card>
        <Card flexiness={"auto"}>Word</Card>
      </Row>
      <Row>
        <Card flexiness={2}><p>Word</p></Card>
        <Card flexiness={"auto"}>Word</Card>
      </Row>
      <Row>
        <Card flexiness={2}><p>Word</p></Card>
        <Card flexiness={"auto"}>Word</Card>
      </Row>
      <Row>
        <Card flexiness={2}><p>Word</p></Card>
        <Card flexiness={"auto"}>Word</Card>
      </Row>
      
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
