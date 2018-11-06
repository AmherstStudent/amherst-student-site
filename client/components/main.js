import React from 'react'
import Link from 'next/link'
import Container from './container.js'
import Grid from './grid.js'
import Nav from './nav.js'

const Main = (props) => (
      <div className="content">
      <Nav />
        <div className="main">

        <Container>
        {props.children}

      </Container>
      </div>

        <style jsx>
          {`
          .content{
            min-height: 100vh;
            font-family: "adobe-garamond-pro",serif;
            background: #F1F1F1;
            padding-bottom: 40px;
            width: 100vw;
          }
        `}
        </style>
      </div>
    )


export default Main
