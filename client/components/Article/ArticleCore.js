import React from 'react'
import { createMarkup } from '../../lib/util'

const Article_Core = props => (
  <article>
    <section
      className="article_text"
      dangerouslySetInnerHTML={createMarkup(props.article.content)}
    />

    <style jsx>
      {`
        .article_text {
          grid-column: span 6;
          font-family: 'Merriweather', serif;
          font-weight: normal;
          font-size: 16px;
          letter-spacing: 0.03px;
          line-height: 36px;
        }
      `}
    </style>
  </article>
)

export default Article_Core
