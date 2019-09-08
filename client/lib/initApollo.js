import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

function create(initialState) {
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, 
    link: new HttpLink({
      uri: 'https://api.amherststudent.com/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch: !isBrowser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}


export default function initApollo(initialState) {
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
