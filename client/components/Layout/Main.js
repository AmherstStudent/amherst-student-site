import React from 'react'

const Main = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        width: 87vw;
        margin: 0 auto;
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(6, 0.1666667fr);
        grid-template-rows: auto;
        grid-gap: 10px;
        grid-column-gap: 10px;
        grid-row-gap: 16px;
      }
    `}</style>
  </div>
)

export default Main
