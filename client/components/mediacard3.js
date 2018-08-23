import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const MediaCard3 = (props) => (
  <Card className={`${ props.className }`}>
    <div className="cardHeader">

       <span>SPORTS</span>

    </div>
    <Container>
    <div className="cardContent">
      <h2 className="cardTitle">Softball Sweeps Smith, Triumphs In Williams Senior Day Game</h2>
      <p className="cardAuthor">by Dylan Momplaisir</p>
    </div>
    </Container>


  <style jsx>{`
    .cardHeader {
      min-height: 200px;
      width: 100%;
      overflow: hidden;
      background: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('https://amherststudent.amherst.edu/sites/default/files/field/image/Janelle_Mona%CC%81e_-_Way_Out_West_2014.jpg')
    }
    span {
      background: #5D3C85;
      color:white;
      font-family: MarkPro-Bold;
      font-size: 14px;
      letter-spacing: 0.12px;
      line-height: 21px;
      position:absolute;
      margin-top: 20px;
      padding: 5px;
      margin-left: 4%;

    }
    .cardTitle{
      font-style: italic;
    }
    .cardAuthor{
      font-style:italic;
      font-size: 14px;
      color: #000000;
      letter-spacing: -0.16px;
      line-height: 22px;
    }
    .cardTitle {
      -webkit-margin-before: 0.20em;
      -webkit-margin-after: 0.20em;
    }
    .cardAuthor {
      -webkit-margin-before: 0.0em;
      -webkit-margin-after: 0.0em;
      margin-top: -0.5em;
    }
    .cardContent{
      padding-bottom:1em;
      margin-top: 20px;
    }
    .cardText{
      padding-top:5px;
    }



 `}</style>
 </Card>
)

export default MediaCard3