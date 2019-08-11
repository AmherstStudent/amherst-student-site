import React from 'react'
// TODO: Add link to author and issue

const ArticleHeader = ({ category, title, author, issue }) => (
  <header>
    <div className="headertext">
      <span>{category.toUpperCase()}</span>
      <h1>{title}</h1>
      <p>
        By {author} || Issue {issue}
      </p>
    </div>
    <style jsx>{`
      header {
        background: var(--dark-purple);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .headertext {
        width: 87vw;
        padding: 40px 0 60px 0;
      }
      span {
        font-family: 'Karla';
        font-weight: bold;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.03px;
        padding-bottom: 20px;
      }
      h1 {
        font-family: 'Merriweather', serif;
        font-style: italic;
        font-weight: 900;
        font-size: 36px;
        color: #ffffff;
        line-height: 48px;
        margin-bottom: 0px;
      }
      p {
        padding-top: 10px;
        font-size: 12px;
        font-style: italic;
      }
      @media screen and (max-width: 768px) {
        .headertext h1 {
          font-size: 26px;
          line-height: 32px;
        }
      }
    `}</style>
  </header>
)

export default ArticleHeader
