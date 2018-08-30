import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const OneThirdCard = (props) => (

  <Card className={`third ${ props.className }`}>



        <div>
      <div className="cardContent">
        <div className="holder"><span className="category">{props.article.category.name.toUpperCase()}</span></div>

      <h4 className="cardTitle"><Link href={`/article/${props.article.slug}`} passHref><a>{props.article.title}</a></Link> <br /> <span className="cardAuthor">by {props.article.author.username}, {props.article.author.reporterTitle}</span></h4>
        <p className="cardText">{props.article.excerpt}</p>
      </div>
      <div className="cardImage">
      </div>
    </div>

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
    .category {
      background: #5D3C85;
      color:white;
      font-family: "europa",sans-serif;
      font-size: 14px;
      letter-spacing: 0.12px;
      line-height: 21px;
      margin-top: 40px;
      padding: 5px;


    }
    .holder{
      margin-top:5px;
    }
    .cardContent{
      margin: 0 0 0 10px;
      max-width: 90%;
      padding: 10px;
    }
    .cardAuthor{
      font-size:14px;
      font-weight: 100;
      padding: 0;
      margin: 0;
    }
    br{
      height: 5px;
    }
    h3{
      font-family: "europa",sans-serif;


    }
    .cardTitle {
      margin-bottom: 0;
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
      padding-bottom: 10px;
    }
    @media screen and (max-width: 768px){
      .cardText{
        padding-bottom: 20px;
      }

    }
    .cleaner > *{
      padding: 20px;
    }
    a{
      text-decoration: none;
      color:black;
    }
    a:hover{
      color: grey;
    }
    h4{
      padding-top:5px;
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
