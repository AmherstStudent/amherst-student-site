import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from '../components/container'


const AuthorCard = (props) => (
  <Card className={`article ${ props.className }`}>
      <Container>
      <h3 className="cardTitle">MEET THE AUTHOR</h3>
      <hr />
      <div className="cardContent">
        <img src={ 'http://localhost:1337'+ props.author.reporterPhoto.url}/>
          <h5 className="authorName">{props.author.username}</h5>
          <p className="authorBio">
            {props.author.reporterBio}
          </p>
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
      font-family: MarkPro-Bold;
    }
    .cardContent{
      margin-bottom:20px;
    }
    h5{
      padding: 10px;
      font-size: 22px;
      font-family: MarkPro-Bold;
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

export default AuthorCard
