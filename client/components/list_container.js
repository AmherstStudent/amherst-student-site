import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import List_Item from '../components/list_item'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const query = gql`
query {
  category(id:"5b6aa884450216532ab38c5e"){
    Category{
      title
      updatedAt
      author{
        username
        reporterTitle
      }
      excerpt
      _id
      category{
        name
      }
      slug
    }
  }

}
`

const List_Container = (props) => (
  <div className="list_container">
    <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;
          const category = data.category.Category;
          return (
            category.map((article) =>
             <List_Item key={article._id} article={article}/>
          )
          )
        }}
    </Query>
    <style jsx="jsx">
      {
        `

        .cardContent{
          padding: 20px;
        }
        h4{
          font-weight: 600;
          font-style: italic;
          font-size: 26px;
          line-height: 1.15em;
          color: #000000;

          margin: 15px 0;

        }
        span{
          /* THIS WEEK’S HEADLINE: */
          background: #5D3C85;
          color: white;
          font-family: MarkPro-Bold;
          font-size: 14px;
          letter-spacing: 0.12px;
          line-height: 21px;
          padding: 5px;

        }
        .author{
          font-size:14px;
          margin-bottom: 10px;
        }
        p{
          /* Aziz Khan was picked: */
          font-family: AGaramondPro-Regular;
        font-size: 18px;
          color: #000000;
            letter-spacing: 0;
            line-height: 20px;
        }
        `
      }
    </style>
  </div>

)
export default List_Container
