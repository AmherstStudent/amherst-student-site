import React from 'react'
import Main from './main.js'
import NavBar from './NavBar'

const Container = ({ children }) => (
  <div className="container">
    <NavBar />

    <Main>{children}</Main>

    <style jsx>{`
      .container {
        background: var(--main-bg-color);
        min-height: 100%;
      }
    `}</style>
  </div>
)

export default Container
