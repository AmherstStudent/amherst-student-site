

import React from 'react'

import Head from '../components/head'
import Container from '../components/container.js'
import Card from '../components/card.js'
import fetch from 'isomorphic-fetch'
import List_Item from '../components/list_item'
import Search_List_Container from '../components/search_list_container'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        query: '',
        results: []
      }
      this.addText = this.addText.bind(this)
      this.handleKeyPress = this.handleKeyPress.bind(this)


  }

  addText = () => {
    this.setState({
     query: this.search.value
    })
  }

  getInfo = () => {
    let search_link = "https://api.amherststudent.com/article?_q="
    console.log(search_link)
    console.log(this.state.query)
    fetch(`${search_link}${this.state.query}`)
      .then(response =>{
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then((articles) => {
        this.setState({
          results: articles
        })
      })
      console.log(this.state.results)

  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.getInfo()
    }
  }

  render(){
    return (
      <Nav/>
      <div className="main-content">
        <Head title="The Amherst Student">
          <meta name="description" content="The Amherst Student, the student-supported newspaper of Amherst College." />
        </Head>

        <Container className="contain">


            <input type="text"  name="uname"
                  ref={input => this.search = input}
                  placeholder="Search for your article"
                  onChange={this.addText}
                  onKeyPress={this.handleKeyPress}/>

                <button onClick={this.getInfo}>Search</button>

          <Search_List_Container results={this.state.results} />
        </Container>

        <style jsx="jsx">
          {`
            .main-content {
              min-height: 100vh;
              font-family: 'adobe-garamond-pro', serif;
              background: #f1f1f1;
              padding-top: 180px;
              padding-bottom: 20px;
            }
            .contain {
              margin-top: 60px;
            }
            input {
              width: 100%;
              height: 80px;
              font-size: 30px;
              font-family: 'europa';
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
            .cardHeader {
              display: flex;
              flex-direction: column;
              height: 100%;
              width: auto;
              margin-top: 40px;
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
            button{
              border: 2px solid #5d3c85;
              padding: 10px;
              color: #5d3c85;
              width: 95px;
              font-family: 'europa', sans-serif;
              margin: 0 auto;
              margin-top: 10px;
              background: white;
              text-align: center;
            }
          `}
        </style>
      </div>
    )
  }
}
