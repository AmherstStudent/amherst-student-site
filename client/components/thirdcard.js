import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const OneThirdCard = (props) => (
  <Card className={`third ${ props.className }`}>


      <div className="cardContent">

      <h4 className="cardTitle">Softball Sweeps Smith, Triumphs In Williams Senior Day Game</h4>
        <p className="cardAuthor">by Dylan Momplaisir</p>
        <p className="cardText">It was a big week for Amherst softball, as the Mammoths swept Smith College in a mid-week doubleheader and took two of three games from Williams in the weekend series.</p>
      </div>
      <div className="cardImage">
      </div>

  <style jsx>{`
    h4{
      font-weight: semibold;
      font-style: italic;
      font-size: 26px;
      color: #000000;
      letter-spacing: 0.05px;
      margin-bottom: 0px;
      margin-top: 10px;
    }
    .cardContent{
      margin: 0 0 0 10px;
      max-width: 80%;
      margin-top:10px;
      margin-left: 25px;

    }
    .cardAuthor{
      font-size:14px;
    }
    h3{
      font-family: "Mark Pro";
    }
    .third {
      display: flex;
      flex-direction: column;
    }
    .cardText{
      /* Aziz Khan was picked: */

      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      line-height: 1.25em;
    }




 `}</style>
 </Card>
)

export default OneThirdCard
