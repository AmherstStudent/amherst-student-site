import App from 'next/app'
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';
import NextSeo from 'next-seo'
import SEO from '../lib/nextseo.js'

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <NextSeo config={SEO} />
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
