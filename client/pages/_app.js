import App from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { DefaultSeo } from 'next-seo'
import withApollo from '../lib/withApollo'
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
