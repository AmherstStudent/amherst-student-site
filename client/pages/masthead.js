import react from 'react'


import React from 'react'

import Head from '../components/head'
import FeatureNewsCard from '../components/featurenewscard.js'
import Container from '../components/container.js'
import Card from '../components/card.js'
import Grid from '../components/grid.js'
import MediaCard from '../components/mediacard.js'
import MediaCard3 from '../components/mediacard3.js'
import OneThirdCard from '../components/thirdcard.js'
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'


const Masthead = (props) => (
  <div className="main-content">
  <Head title="The Amherst Student">
    <meta name="description" content="The Amherst Student, the student-supported newspaper of Amherst College." />
  </Head>

  <Container className="contain">
          <Grid>
            <div className="wrapper">
            <Card>
              <div className="cardHeader">
              <img src="/static/logo.svg" alt="the Amherst Student" />
              <img src="/static/logo-subline.svg" alt="the student-supported newspaper since 1868" className="subline"/>
              </div>
              <div className="cardContent">
                <p>The Amherst Student is the newspaper of Amherst College. Established in 1868, The Student is the oldest weekly college publication in the country, with more than 2,000 copies circulated per issue. The Student is published every Wednesday of the academic year, with the exception of vacations and exam periods, and is distributed to members of the college and the communities of Amherst, Hadley and the Five College area free of charge, as well as to alumni and parents by subscription. </p>
                <p>The Student is written, produced and published by an all-volunteer team of dedicated Amherst students. The Student and its staff are committed to a standard of conscientious reporting and quality writing. Editorials are written by the managing opinion editors.</p>
                <p>The Student welcomes any and all Amherst students who wish to contribute to the newspaper. If you are interested in writing for a section of The Student, please contact the appropriate managing editor(s). If you are interested in the publishing and business management of The Student, please contact the publishers. If you are interested in copy editing, layout, photography or website management, please contact the editor-in-chief. General questions may be directed to astudent@amherst.edu or at 413-206-9319.</p>
              </div>
            </Card>
            <br />
            <Card>

            </Card>
            <br />
            <Card>
              f
            </Card>
          </div>
          </Grid>

  </Container>



  <style jsx="jsx">
    {
      `
      .main-content{
        min-height: 100vh;
        font-family: "adobe-garamond-pro",serif;
        background: #F1F1F1;
        padding-top: 180px;
        padding-bottom: 20px;

      }
      .contain{
        margin-top: 120px;
      }
      .wrapper{
        padding:20px;
        grid-column: span 14;
      }
      .wrapper > * {
        width: 100%;
        margin:0 auto;
      }
      .cardContent{
        padding: 5%;
      }
      .cardHeader{
        display: flex;
        flex-direction: column;
        padding-top: 20px;
      }
      p {
        margin-bottom: 20px;
      }
      img:first-child{
        padding-bottom: 10px;
      }
       `
    }</style>

</div>)


export default Masthead
