import App from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'
import { DefaultSeo } from 'next-seo'
import SEO from '../lib/nextseo.js'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
