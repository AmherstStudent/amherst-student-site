import React from 'react'
import Link from 'next/link'

const Container = props => (
  <div className="container">
    {props.children}

    <style jsx>{`
      .container {
        width: 90%;
        max-width: 1400px;
        height: auto;
        margin: 0 auto;
        position: relative;
      }
    `}</style>
  </div>
)

export default Container
