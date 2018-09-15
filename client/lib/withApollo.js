import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory';

// import { GRAPHQL_URL } from '../configs'

export default withApollo(({ headers }) => (
  new ApolloClient({
    uri: 'https://api.amherststudent.com/graphql',
    cache: new InMemoryCache()
 })
))
