import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import Container from '../components/container'
import Grid from '../components/grid'
import Card from '../components/card'

const List_Item = (props) => (
  <Card className="list_item margin-20">
    <Container>
    <div className="cardContent">
      <span>NEWS</span>
      <h4>Softball Sweeps Smith, Triumphs In Williams Senior Day Game</h4>
      <p className="author">by Dylan Momplaisir, Web Design || April 4th 2018</p>
      <p>Aziz Khan was picked last in his fifth versus sixth grade soccer match. “I actually started late,” Khan remembers. “I was not into sports when I was younger. I was more into arts, drawing and painting.” That day, when Khan was picked last, changed his mind.</p>
    </div>
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
  </Card>

)
export default List_Item
