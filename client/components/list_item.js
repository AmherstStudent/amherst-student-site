import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import Container from '../components/container'
import Grid from '../components/grid'
import Card from '../components/card'
import moment from 'moment'


const List_Item = (props) => (
  <Card className="list_item margin-20">
    <Container>
      <Link href={"/article/" + props.article.slug}>
    <div className="cardContent">
      <span>{props.article.category.name.toUpperCase()}</span>
      <h4>{props.article.title}</h4>
      <p className="author">by {props.article.author.username}, {props.article.author.reporterTitle} || {moment(props.article.updatedAt).format('MMMM Do YYYY')}</p>
      <p>{props.article.excerpt}</p>
    </div>
    </Link>
    </Container>
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
          margin-bottom: 0;
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

      
          color: #000000;
            letter-spacing: 0;
            line-height: 20px;
        }
        `
      }
    </style>
  </Card>

)
export default List_Item
