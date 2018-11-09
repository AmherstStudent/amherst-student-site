import React from 'react'
import { withRouter } from 'next/router'

// Internal Components
import Head from '../components/head'
import Container from '../components/container'
import Grid from '../components/grid'
import Category_List_Container from '../components/category_list_container'
import List_Header from '../components/category_header'
import Author_Card from '../components/authorcard'
import Main from '../components/main'

// Query import
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { GET_EDITOR_LIST } from '../lib/queries.js'

const Category = withRouter(props => (
  <Main>
    <Head title={props.router.query.name} />

    <List_Header className="header" type={props.router.query.name.toUpperCase()} name="Word" />
    <Grid>
      <article>
        <Category_List_Container type={props.router.query.name} />
      </article>
      <aside>
        <Query
          query={GET_EDITOR_LIST}
          variables={{ name: props.router.query.name.replace(/ .*/, '') }}
        >
          {({ loading, error, data }) => {
            if (loading) return null
            if (error) return `Error!: ${error}`
            const editors = data.categories[0].editors
            return <Author_Card editor={true} author={editors} />
          }}
        </Query>
      </aside>
    </Grid>

    <style jsx="jsx">
      {`
        .header {
          height: 200px;
          grid-column: span 14;
          width: 100vw;
        }

        article {
          grid-column-start: 1;
          grid-column-end: 10;
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

export default Category
