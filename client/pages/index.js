import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Main from '../components/main'
import fetch from 'isomorphic-fetch'

const Home = (props) => (
  <div className="body">
    <Head title="Home" />
    <Nav />
    <Main>
      <h1>Titles</h1>
      <ul>
      {props.articles.map((article, index) => (
        <p> Hello, {article.title} </p>
      ))}
      </ul>

    </Main>
    <Footer className="bottom" />
    <style jsx>{`
      .body{
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      :global(body){
        margin: 0 auto;
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
