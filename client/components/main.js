import React from 'react'
import Link from 'next/link'
import Container from './container.js'

class Main extends React.Component {
  render() {
    return (
      <div className="main">
      <Container>
        { this.props.children }
      </Container>
        <style jsx> {`
        .main{
          height: 100vh;
          width:100vw;
          font-family: 'Adobe Garamond Pro';
          background: #F1F1F1;
          padding-top:150px;

        }


        `}

      </style>
      </div>

    )
  }
}

export default Main
