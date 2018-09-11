import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import List_Item from '../components/list_item'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const ITEMS_PER_PAGE = 10;

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

export default Search_List_Container extends React.Component {


  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}
export default Search_List_Container
