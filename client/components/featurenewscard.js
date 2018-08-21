import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const FeatureNewsCard = (props) => (
  <Card className={`${ props.className }`}>

    <Container>
    <div className="cardContent">
      <h3 className="cardTitle">FAVORITE ARTICLES</h3>
      <div className="topArticle">
        <h4>Aspiring Doctor Personifies Poise on the Pitch</h4>
        <p className="caption">by Connor Haugh 21</p>
        <hr />
      </div>
      <div className="topArticle">
        <h4>Aspiring Doctor Personifies Poise on the Pitch</h4>
        <p className="caption">by Connor Haugh 21</p>
        <hr />
      </div>
    </div>
    </Container>


  <style jsx>{`
    h4{
      font-family: AGaramondPro-SemiboldItalic;
      font-size: 26px;
      color: #000000;
      letter-spacing: 0.05px;
      text-align: center;
    }
    .cardContent{
      margin: 0 auto;
      text-align: center;
    }
    h4{
      margin: 0;
    }
    .topArticle{
      margin-top: 20px;
    }
    h3{
      font-family: "Mark Pro";
    }




 `}</style>
 </Card>
)

export default FeatureNewsCard
