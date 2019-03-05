import React from 'react'
import Card from './card'
import showdown from 'showdown'

function createMarkup(content) {
  var formatted_content = content.replace(/(?:\r\n|\r|\n)/g, '<br >')
  var converter = new showdown.Converter()
  var html = converter.makeHtml(content).replace(/(?:\r\n|\r|\n)/g, '<br >')
  return { __html: html }
}

const Article_Core = props => (
  <>

      <div>
        <div
          className="article_text"
          dangerouslySetInnerHTML={createMarkup(props.article.content)}
        />

      </div>

    <style jsx>
      {`
        .article_text {
          margin: 25px 10px 25px 10px;
        }
        .article_text p{
          font-family: Merriweather-Regular;
          font-size: 16px;
          color: #000000;
          letter-spacing: 0.03px;
          line-height: 36px;
        }


        .article_text > img {
          width: 100%;
          height: auto;
        }

      `}
    </style>
  </>
)

export default Article_Core
