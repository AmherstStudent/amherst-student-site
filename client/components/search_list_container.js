import React from 'react'
import Link from 'next/link'
import List_Item from '../components/Basics/ListItem'

const Search_List_Container = (props) => {
  return props.results.map(article => <List_Item key={article._id} article={article} />)
}

export default Search_List_Container
