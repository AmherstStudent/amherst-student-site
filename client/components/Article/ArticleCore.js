import React from 'react'
import { createMarkup } from '../../lib/util'

const ArticleCore = ({ content }) => (
  <>
    <section className="articleText" dangerouslySetInnerHTML={createMarkup(content)} />
    <style jsx>
      {`
        .articleText {
          grid-column: span 6;
          font-family: 'Merriweather', serif;
          font-weight: normal;
          font-size: 16px;
          letter-spacing: 0.03px;
          line-height: 36px;
          width: 100%;
        }
        :global(img) {
          max-width: 100%;
        }
      `}
    </style>
  </>
)

export default ArticleCore
