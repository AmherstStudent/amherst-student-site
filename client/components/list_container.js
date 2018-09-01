import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import List_Item from '../components/list_item'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
  query CategoryLookup($name: String!) {
    categories(where: { name_contains: $name }) {
      Category(sort: "createdAt:desc") {
        title
        createdAt
        author {
          username
          reporterTitle
        }
        excerpt
        _id
        category {
          name
        }
        slug
      }
    }
  }
`

const List_Container = props => (
  <div className="list_container">
    <Query query={query} variables={{ name: props.type.replace(/ .*/, '') }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        const category = data.categories[0].Category
        console.log(props.type)
        return category.map(article => <List_Item key={article._id} article={article} />)
      }}
    </Query>
    <style jsx="jsx">
      {`
        .cardContent {
          padding: 20px;
        }
        h4 {
          font-weight: 600;
          font-style: italic;
          font-size: 26px;
          line-height: 1.15em;
          color: #000000;

          margin: 15px 0;
        }
        span {
          /* THIS WEEK’S HEADLINE: */
          background: #5d3c85;
          color: white;
          font-family: 'europa', sans-serif;

          font-size: 14px;
          letter-spacing: 0.12px;
          line-height: 21px;
          padding: 5px;
        }
        .author {
          font-size: 14px;
          margin-bottom: 10px;
        }
        p {
          /* Aziz Khan was picked: */
          font-family: AGaramondPro-Regular;
          font-size: 18px;
          color: #000000;
          letter-spacing: 0;
          line-height: 20px;
        }
      `}
    </style>
  </div>
)
export default List_Container
