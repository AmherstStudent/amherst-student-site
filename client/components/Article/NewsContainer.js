import React from 'react'

const NewsContainer = ({children} ) => (
  <div className="newscontainer">
    {children}

    <style jsx>{`
      .newscontainer {
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
