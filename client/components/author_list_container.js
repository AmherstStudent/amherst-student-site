import React from 'react'
import List_Item from './Basics/list_item'
import { Query } from 'react-apollo'
import { AUTHOR_LOOKUP } from '../lib/queries'

const Author_List_Container = props => (
  <div className="list_container">
    <Query query={AUTHOR_LOOKUP} variables={{ name: props.author }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        const author_articles = data.user.articles
        return author_articles.map(article => <List_Item key={article._id} article={article} />)
      }}
    </Query>
  </div>
)
export default Author_List_Container
