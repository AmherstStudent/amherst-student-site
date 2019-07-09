import React from 'react'
import { createMarkup } from '../../lib/util'

const ArticleCore = ({article_content}) => (
  <>
    <section
      className="article_text"
      dangerouslySetInnerHTML={createMarkup(article_content)}
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
  </>
)

export default ArticleCore
