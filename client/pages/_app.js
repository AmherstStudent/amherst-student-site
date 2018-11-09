import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'
import NextSeo from 'next-seo'

import SEO from '../lib/nextseo.js'

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <NextSeo config={SEO} />
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
