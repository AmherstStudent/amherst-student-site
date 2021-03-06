import React from 'react'
import { Query } from 'react-apollo'
import ListItem from './Basics/ListItem'
import { GetAuthor } from '../lib/queries'

const AuthorListContainer = props => (
  <div className="list_container">
    <Query query={GetAuthor} variables={{ name: props.author }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        const author_articles = data.user.articles
        return author_articles.map(article => <ListItem key={article.id} article={article} />)
      }}
    </Query>
  </div>
)
export default AuthorListContainer
