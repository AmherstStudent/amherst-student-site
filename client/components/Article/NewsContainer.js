import React from 'react'
// Search engine optimizer stuff

const NewsContainer = ({ article, children }) => (
  <div className="newscontainer">
    <div className="grid">{children}</div>

    <style jsx>{`
      .grid {
        width: 87vw;
        margin: 0 auto;
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(6, 0.1666667fr);
        grid-column-gap: 16px;
      }
    `}</style>
  </div>
)

export default NewsContainer
