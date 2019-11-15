import React from 'react'
import { withRouter } from 'next/router'

// Internal Components
import { Query } from 'react-apollo'
import Head from '../components/Layout/Head'
import AuthorListContainer from '../components/AuthorListContainer'
import Container from '../components/Container'
// Query import
import { GetAuthor } from '../lib/queries'
// make the expresss link be "name = Ryan Yu '22" to ryan-yu-22
const Author = withRouter(props => (
  <>
    <Container>
      <Query query={GetAuthor} variables={{ name: props.router.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error!: ${error}`
          const { articles } = data.user
          return (
            <>
              <Head title={articles[0].author.username} />
              <h1>{articles[0].author.username}</h1>
            </>
          )
        }}
      </Query>
      <article>
        <AuthorListContainer author={props.router.query.id} />
      </article>
    </Container>
    <style jsx="jsx">
      {`
        h1 {
          margin: 0 auto;
          grid-column: span 7;
          font-family: 'Karla';
          font-style: normal;
        }
        .header {
          height: 200px;
          grid-column: span 14;
          width: 100vw;
        }

        article {
          grid-column-start: 1;
          grid-column-end: 7;
        }
      `}
    </style>
  </>
))

export default Author
