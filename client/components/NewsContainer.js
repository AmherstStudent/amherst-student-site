import React from 'react'
import Link from 'next/link'
import Main from './main.js'
import NavBar from './NavBar'
import Article_Header from './article_header.js'
import Category from './Category.js'

const NewsContainer = ({ article ,children }) => (
  <div className="newscontainer">
    <NavBar />
    <div className="header">
      <div className="headertext">
        <span>{article.category.name.toUpperCase()}</span>
        <h2>{article.title}</h2>
        <p>By {article.author.username} || Issue {article.issue.name}</p>
      </div>
    </div>
    <Main>{children}</Main>

    <style jsx>{`
      .newscontainer {
        width: 100vw;
        background: transparent;
        min-height: 100%;
      }
      span {
        font-family: Karla-Bold;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.03px;
        padding-bottom: 20px;
      }
      .header {
        height: 25vh;

        background: var(--dark-purple);
        margin-bottom: ; // think about adding a line up
      }
      .headertext {
        margin-left: 6.5vw;
        padding-top: 5vh;
        color: white;
      }
      .headertext h2 {
        width: 90vw;
        padding-top: 10px;
        color: white;
        font-family: Merriweather-BlackItalic;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 36px;
        color: #ffffff;
        letter-spacing: 0.43px;
      }
      p {
        padding-top: 10px;
        font-size: 12px;
        font-style: italic;
      }
    `}</style>
  </div>
)

export default NewsContainer
