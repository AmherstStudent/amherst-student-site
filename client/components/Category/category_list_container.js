import React from 'react'
import List_Item from '../Basics/list_item'
import { Query } from 'react-apollo'
import { CATEGORY_LOOKUP } from '../../lib/queries'

const Category_List_Container = props => (
  <div className="list_container">
    <Query query={CATEGORY_LOOKUP} variables={{ name: props.type.replace(/ .*/, '') }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        const category = data.categories[0].Category
        return category.map(article => <List_Item key={article._id} article={article} />)
      }}
    </Query>
  </div>
)
export default Category_List_Container
