import React from 'react'
import { withRouter } from 'next/router'

// Internal Components
import Head from '../components/head'
import Grid from '../components/Layout/grid'
import Author_List_Container from '../components/author_list_container'
import Main from '../components/main'

// Query import
import { Query } from 'react-apollo'
import { AUTHOR_LOOKUP } from '../lib/queries'

const Author = withRouter(props => (
  <Main>
    <Grid>
      <Query query={AUTHOR_LOOKUP} variables={{ name: props.router.query.id }}>
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
      <aside />
    </Grid>

    <style jsx="jsx">
      {`
        h1 {
          margin: 0 auto;
          grid-column: span 14;
          font-family: 'europa';
          font-style: normal;
        }
        .header {
          height: 200px;
          grid-column: span 14;
          width: 100vw;
        }

        article {
          grid-column-start: 1;
          grid-column-end: 14;
        }

        aside {
          grid-column-start: 10;
          grid-column-end: 14;
        }

        @media only screen and (max-width: 768px) {
          article {
            grid-column: 1 / 14;
          }
          aside {
            grid-column: 1 / 14;
          }
        }
      `}
    </style>
  </Main>
))

export default Author
