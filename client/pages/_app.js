import App from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApolloClient from '../lib/withApollo'
import NextSeo from 'next-seo'
import SEO from '../lib/nextseo.js'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
        <ApolloProvider client={apolloClient}>
          <NextSeo config={SEO} />
          <Component {...pageProps} />
        </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)
