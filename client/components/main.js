import React from 'react'
import Link from 'next/link'

const Main = ({ children }) => (
  <main className="main-container">
    {children}

    <style jsx>{`
      .main-container {
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
  </main>
)

export default Main
