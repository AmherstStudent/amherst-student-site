import React from 'react'
import List_Item from '../Basics/ListItem'
import { Query } from 'react-apollo'
import { GetCategoryArticles } from '../../lib/queries'

const CategoryListContainer = props => (
  <div className="list_container">
    <Query query={GetCategoryArticles} variables={{ name: props.type.replace(/ .*/, '') }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        const category = data.categories[0].Category
        return category.map(article => <List_Item key={article._id} article={article} />)
      }}
    </Query>
  </div>
)
export default CategoryListContainer
