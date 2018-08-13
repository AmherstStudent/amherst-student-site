import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import {withRouter} from 'next/router'

const Article = () => (
  <div>
    <Head title="Article">

  </div>
)

Article.getInitialProps = async function() {
  const articleName = props.router.query.title
  const res = await fetch('.')
  const data = await res.json()

  Console.log("Loaded up the article")
  return {
    article: data
  }
}

export default Article
