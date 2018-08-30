import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

let LOCAL_URI = 'http://api.amherststudent.com'
const MediaCard3 = (props) => (
  <Card className={`thrds ${ props.className }`}>
    <Link href={`/article/${props.article.slug}`} passHref>
      <a>
    <div style={ Boolean(props.article.featuredImage)  ? {backgroundImage: `url('${LOCAL_URI + props.article.featuredImage.url}')`} : {minHeight:'60px'} } className="cardHeader">

       <span>{props.article.category.name.toUpperCase()}</span>

    </div>
  </a>
  </Link>
    <Container>

    <div className="cardContent">
      <Link href={`/article/${props.article.slug}`} passHref>
      <a>
      <h2 className="cardTitle">{props.article.title}</h2>
      </a>
      </Link>
      <br />
      <p className="cardAuthor">by {props.article.author.username}, {props.article.author.reporterTitle} | {props.article.volumeIssue.volume_issue_number}</p>
      <p style={ Boolean(props.article.featuredImage)  ? {display:'none'} : {} }> {props.article.excerpt} </p>
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
    }
    span {
      background: #5D3C85;
      color:white;
      font-family: "europa",sans-serif;

      font-size: 14px;
      letter-spacing: 0.12px;
      line-height: 21px;
      position:absolute;
      margin-top: 20px;
      padding: 5px;
      margin-left: 20px;

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
    a{
      text-decoration: none;
    }
    .cardTitle:hover{
      color: grey;
    }


 `}</style>
 </Card>
)
MediaCard3.defaultProps = {
  article:{
    slug: "word",
    category:{
      name:"Card"
    },
    featuredImage: 'none',
    title: "Title",
    author: {
      username: "Call me"
    }
  }
}

export default MediaCard3
