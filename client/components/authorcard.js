import React from 'react'
import Link from 'next/link'
import Card from './card.js'

const AuthorCard = props => (
  <div className="authorCard">
    <>
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
    </>

    <style jsx>{`
      img {
        border-radius: 50%;
        object-fit: cover;
      }

      img {
        display: block;
        margin: auto;
        height: 125px;
        width: 125px;
      }
      h3 {
        font-family: 'Europa';
        font-size: 24px;
        color: #000000;
        letter-spacing: 0.03px;
        font-style: normal;
      }
      .cardContent {
        margin: 0 auto;
        text-align: center;
        margin-bottom: 20px;
      }
      h5 {
        padding: 10px;
        font-size: 22px;

        margin: 0;
      }
      p {
        font-size: 14px;
      }
      .article {
      }

      hr {
        margin: 10px 0 10px 0;
        border-color: black;
        border-width: 4.5px;
      }
    `}</style>
  </div>
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
