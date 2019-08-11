import React from 'react'
import { withRouter } from 'next/router'

// Internal Components
import Head from '../components/Layout/Head'
import Container from '../components/container'
import CategoryListContainer from '../components/Category/CategoryListContainer'
import List_Header from '../components/Category/CategoryHeader'
import AuthorCard from '../components/Article/AuthorCard'

// Query import
import { Query } from 'react-apollo'
import { GetEditors } from '../lib/queries.js'
//Put a pin in it, check it out later
const Category = withRouter(props => (
  <Container>
    <Head title={props.router.query.name} />
    <List_Header className="header" type={props.router.query.name.toUpperCase()} />

    <article>
      <CategoryListContainer type={props.router.query.name} />
    </article>

    <aside>
      <Query query={GetEditors} variables={{ name: props.router.query.name.replace(/ .*/, '') }}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error!: ${error}`
          const editors = data.categories[0].editors
          return <AuthorCard editor author={editors} />
        }}
      </Query>
    </aside>

    <style jsx="jsx">
      {`
        article {
          grid-column-start: 1;
          grid-column-end: 5;
        }

        aside {
          grid-column-start: 5;
          grid-column-end: 7;
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
  </Container>
))

export default Category
