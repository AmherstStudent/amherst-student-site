import React from 'react'
import Link from 'next/link'

const Container = props => (
  <div className="container">
    {props.children}

    <style jsx>{`
      .container {
        width: 85%;
        height: auto;
        margin: 0 auto;
        position: relative;
      }
      @media screen and (max-width: 768px) {
        .container{
          width: 90%;
        }
      }
    `}</style>
  </div>
)

export default Container
