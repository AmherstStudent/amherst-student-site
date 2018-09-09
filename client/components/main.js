import React from 'react'
import Link from 'next/link'
import Container from './container.js'
import Grid from './grid.js'

const Main = (props) => (
      <div className="content">
        <Container>

        {props.children}

      </Container>
        <style jsx>

          {`
        .content{

          min-height: 100vh;
          font-family: "adobe-garamond-pro",serif;
          background: #F1F1F1;
          padding-top: 110px;
          padding-bottom: 40px;
          width: 100vw;
          }


        `}
        </style>
      </div>
    )


export default Main
