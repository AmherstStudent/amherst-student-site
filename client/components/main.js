import React from 'react'
import Link from 'next/link'
import Container from './container.js'
import Grid from './grid.js'

class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <Container>
          <Grid>{this.props.children}</Grid>
        </Container>
        <style jsx>
          {' '}
          {`
        .content{
          min-height: 100vh;
          font-family: "adobe-garamond-pro",serif;
          background: #F1F1F1;
          padding-top:50px;
          padding-bottom: 20px;
          }
        }

        `}
        </style>
      </div>
    )
  }
}

export default Main
