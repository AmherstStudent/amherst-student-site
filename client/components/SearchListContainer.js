import React from 'react'
import ListItem from './Basics/ListItem'

const SearchListContainer = props => {
  return props.results.map(article => <ListItem key={article.id} article={article} />)
}

export default SearchListContainer
