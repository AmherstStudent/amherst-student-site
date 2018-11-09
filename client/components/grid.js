import React from 'react'
import Link from 'next/link'

const Grid = props => (
  <div className={`grid ${props.className}`}>
    {props.children}

    <style jsx>{`
      .grid {
        display: grid;
        max-width: 100%;
        -ms-grid-columns: repeat(12, 1fr);;
        grid-template-columns: repeat(12, 1fr);;
        grid-gap: 20px;
        padding-top: 0vh;
      }

      

    `}</style>
  </div>
)

export default Grid
