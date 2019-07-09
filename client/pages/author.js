import React from 'react'
import { withRouter } from 'next/router'

// Internal Components
import Head from '../components/Layout/Head'
import Grid from '../components/Layout/Grid'
import Author_List_Container from '../components/author_list_container'
import Container from '../components/container'
import NavBar from '../components/Layout/NavBar'
// Query import
import { Query } from 'react-apollo'
import { GetAuthor } from '../lib/queries'

const Author = withRouter(props => (
  <>
    <Container>
      <Query query={GetAuthor} variables={{ name: props.router.query.id }}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error!: ${error}`
          const author_articles = data.user.articles
          return (
            <>
              <Head title={author_articles[0].author.username} />
              <h1>{author_articles[0].author.username}</h1>
            </>
          )
        }}
      </Query>
      <article>
        <Author_List_Container author={props.router.query.id} />
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
