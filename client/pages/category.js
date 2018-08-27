import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import Container from '../components/container'
import Grid from '../components/grid'
import Card from '../components/card'
import OneThirdCard from '../components/thirdcard'
import List_Item from '../components/list_item'
import List_Container from '../components/list_container'
import Category_Header from '../components/category_header'
import Author_Card from '../components/authorcard'
import {withRouter} from 'next/router'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';

const query = gql `
query EditorsList($name: String!) {
  categories(where: { name_contains: $name }) {
  editors{
    username
    reporterBio
    reporterPhoto{
      url
    }
  }
}
}

`

const Category = withRouter((props) => (
  <div className="main-content">
  <Head title={props.router.query.name}/>

    <Container>
    <Category_Header className="heads" type={props.router.query.name} name="Word" />
          <Grid>


            <article>
              <List_Container type={props.router.query.name == "Arts%20+%20Living" ? "Arts" : props.router.query.name} />
            </article>
            <aside >
              <Query query={query} variables={{ name: props.router.query.name.replace(/ .*/,'') }}>
                  {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) return `Error!: ${error}`;
                    const editor = data.categories[0].editors[0];
                    console.log(props.type)
                    return (
              <Author_Card editor={true} author={editor}/>
              )}}
            </Query>
            </aside>

          </Grid>
      </Container>


  <style jsx="jsx">
    {
      ` .main-content {
        min-height: 100vh;
        font-family: 'Adobe Garamond Pro';
        background: #F1F1F1;
        padding-top: 180px;
        padding-bottom: 20px;
      }
      .tripleContainer {
        grid-column-start: 1;
        grid-column-end: 7;
        display: flex;
        height:200px;
        flex-direction: column;
        justify-content: space-between;
      }

      .words:last-child {
        grid-column-end: end;
      }
      .third {

        margin-bottom: 200px !important;
      }
      article{
        grid-column-start: 1;
        grid-column-end:10;
      }
      aside {
        grid-column-start: 10;
        grid-column-end: 14;
      }
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
      .heads{
        height: 200px;
        grid-column: span 14;
        width: 100vw;

      }

       `
    }</style>

</div>))

// Home.getInitialProps = async function() {
//   const res = await fetch('http://localhost:1337/article')
//   const data = await res.json()
//
//   console.log(`Show data fetched. Count: ${data.length}`)
//
//   return {
//     articles: data
//   }
//
// }

export default Category
