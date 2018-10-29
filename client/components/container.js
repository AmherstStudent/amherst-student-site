import React from 'react'
import Link from 'next/link'

const Container = props => (
  <div className="container">
    {props.children}

    <style jsx>{`
      .container {
        width: 89%;
        height: auto;
        margin: 0 auto;
        position: relative;
      }
      @media screen and (max-width: 800px) {
        .container{
          width: 92.5%;
        }
      }
    `}</style>
  </div>
)

export default Container
