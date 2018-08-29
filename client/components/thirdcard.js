import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const OneThirdCard = (props) => (
  
  <Card className={`third ${ props.className }`}>

      <Link href={`/article/${props.article.slug}`}>
        <div>
      <div className="cardContent">

      <h4 className="cardTitle">{props.article.title} <span className="cardAuthor">by {props.article.author.username}</span></h4>
        <p className="cardText">{props.article.excerpt}</p>
      </div>
      <div className="cardImage">
      </div>
    </div>
    </Link>
  <style jsx>{`
    h4{
      font-weight: 600;
      font-style: italic;
      font-size: 26px;
      line-height: 1.15em;
      color: #000000;
      letter-spacing: 0.05px;
      margin-bottom: 0px;
      margin-top: 10px;

    }
    .cardContent{
      margin: 0 0 0 10px;
      max-width: 90%;
      margin-top:10px;
      margin-left: 25px;

    }
    .cardAuthor{
      font-size:14px;
      font-weight: 100;
      padding: 0;
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
      margin-top: 2px;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      line-height: 1.25em;
    }
    @media screen and (max-width: 768px){
      .cardText{
        padding-bottom: 20px;
      }

    }
    .cleaner > *{
      padding: 20px;
    }




 `}</style>
 </Card>

)

OneThirdCard.defaultProps = {
  article:{
    category:{
      name:"Card"
    },
    title: "Title",
    author: {
      username: "Call me"
    },
    slug: "defaddult",
    excerpt: "Word"
  }
}

export default OneThirdCard
