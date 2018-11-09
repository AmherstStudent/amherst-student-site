import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from '../components/container'

const AuthorCard = props => (
  <Card className={`article ${props.className}`}>
    <Container>
      <h3 className="cardTitle">MEET THE {props.editor ? 'EDITORS' : 'AUTHOR'}</h3>
      <hr />

      <div className="cardContent">
        {props.editor ? (
          Object.keys(props.author).map((item, index) => (
            <div key={index}>
              <img src={props.author[item].reporterPhoto.url} />
              <h5 className="authorName">{props.author[item].username}</h5>
              <p className="authorBio">{props.author[item].reporterBio}</p>
            </div>
          ))
        ) : (
          <div>
            <img src={props.author.reporterPhoto.url} />
            <h5 className="authorName">{props.author.username}</h5>
            <p className="authorBio">{props.author.reporterBio}</p>
          </div>
        )}
      </div>
    </Container>

    <style jsx>{`
    img{
      border-radius: 50%;

    }

    .cardContent > * {
      margin: auto;
      text-align: center;
    }
    img{
      display: block;
      margin: 10px auto;
      align: center;
      height: 100px;
      width: 100px;
      mar
    }
    h3{
      margin: 0;
      margin-top: 20px;
      padding: 0;
      text-align: center;
      font-family: "europa",sans-serif;

    }
    .cardContent{
      margin-bottom:20px;
    }
    h5{
      padding: 10px;
      font-size: 22px;
      font-family: "europa",sans-serif;

      margin: 0;
    }
    p{
      font-size: 16px;
    }
    .article{
      max-width: 40%;
    }
    hr{
      margin: 10px 0 10px 0;

    }

 `}</style>
  </Card>
)

AuthorCard.defaultProps = {
  author: {
    reporterPhoto: {
      url: 'word',
    },
    username: 'word',
    reporterBio: 'word',
  },
}

export default AuthorCard
