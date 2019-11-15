import React from 'react'

import fetch from 'isomorphic-fetch'
import Head from '../components/Layout/Head'
import Container from '../components/Container'
import SearchListContainer from '../components/SearchListContainer'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: [],
    }
    this.addText = this.addText.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  addText = () => {
    this.setState({
      query: this.search.value,
    })
  }

  getInfo = () => {
    const searchLink = 'https://api.amherststudent.com/article?_q='
    // console.log(search_link)
    // console.log(this.state.query)
    fetch(`${searchLink}${this.state.query}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(articles => {
        this.setState({
          results: articles,
        })
      })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.getInfo()
    }
  }

  render() {
    return (
      <Container>
        <Head title="The Amherst Student">
          <meta
            name="description"
            content="The Amherst Student, the student-supported newspaper of Amherst College."
          />
        </Head>

        <div className="main-content">
          <div className="album">
            <input
              type="text"
              name="uname"
              ref={input => (this.search = input)}
              placeholder="Search for your article"
              onChange={this.addText}
              onKeyPress={this.handleKeyPress}
            />

            <button onClick={this.getInfo}>Search</button>
          </div>
          <SearchListContainer results={this.state.results} />
        </div>

        <style jsx="jsx">
          {`
            .main-content {
              min-height: 100vh;
              background: #f1f1f1;
              padding-top: 20px;
              grid-column: span 6;
            }
            .album {
              background: green;
              height: 10vh;
            }
            input {
              width: 100%;
              height: 10vh;
              font-size: 3vh;
              font-family: 'Karla';
            }

            .wrapper {
              padding: 20px;
              grid-column: 2/ 12;
              margin: auto;
            }
            .wrapper > * {
              width: 100%;
              margin: 0 auto;
            }
            .cardContent {
              padding: 5%;
            }

            p {
              margin-bottom: 20px;
            }
            img:first-child {
              padding-bottom: 10px;
            }
            h5 {
              border: 2px solid #5d3c85;
              padding: 10px;
              color: #5d3c85;
              width: 95px;
              font-family: 'europa', sans-serif;
              margin: 0 auto;
              margin-top: 10px;
              text-align: center;
            }
            a {
              margin-top: 200px;
            }
            button {
              border: 2px solid #5d3c85;
              padding: 10px;
              color: #5d3c85;
              width: 95px;
              font-family: 'Karla', sans-serif;
              margin: 0 auto;
              margin-top: 10px;
              background: white;
              text-align: center;
            }
          `}
        </style>
      </Container>
    )
  }
}
