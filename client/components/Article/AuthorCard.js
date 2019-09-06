import React from 'react'

const AuthorCard = props => (
  <section>
    <>
      <h3 className="cardTitle">MEET THE {props.editor ? 'EDITORS' : 'AUTHOR'}</h3>
      <hr />
      <div className="cardContent">
        {props.editor ? (
          Object.keys(props.author).map((item, index) => (
            <div className="editor" key={index}>
              <img
                alt-text=""
                src={props.author[item].reporterPhoto ? props.author[item].reporterPhoto.url : ''}
              />
              <h5 className="authorName">{props.author[item].username}</h5>
              <p className="authorBio">{props.author[item].reporterBio}</p>
            </div>
          ))
        ) : (
          <div>
            <img
              alt-text={props.author.username}
              src={props.author.reporterPhoto ? props.author.reporterPhoto.url : ''}
            />
            <h5 className="authorName">{props.author.username}</h5>
            <p className="authorBio">{props.author.reporterBio}</p>
          </div>
        )}
      </div>
    </>

    <style jsx>{`
      .cardTitle {
        font-family: 'Karla', sans-serif;
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
      img {
        border-radius: 50%;
        object-fit: cover;
        display: block;
        margin: auto;
        height: 125px;
        width: 125px;
      }
      .editor {
        margin-bottom: 20px;
      }
      h5 {
        font-family: 'Karla', sans-serif;
        padding: 10px;
        font-size: 22px;
        margin: 0;
      }
      p {
        font-size: 14px;
        font-family: 'Merriweather';
        font-weight: normal;
        font-size: 14px;
        color: #000000;
        line-height: 24px;
      }

      hr {
        margin: 10px 0 10px 0;
        border-color: black;
        border-width: 4.5px;
      }
    `}</style>
  </section>
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
