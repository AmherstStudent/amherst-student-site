import React from 'react'
import List_Item from '../components/Basics/ListItem'

const Search_List_Container = props => {
  return props.results.map(article => <List_Item key={article._id} article={article} />)
}

export default Search_List_Container
