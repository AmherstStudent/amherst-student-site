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
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Masthead = props => (
  <div className="main-content">
    <Head title="The Amherst Student">
      <meta name="description" content="The Amherst Student, the student-supported newspaper of Amherst College." />
    </Head>

    <Container className="contain">
      <Grid>
        <div className="wrapper">
          <a name="masthead">
          <Card>
            <div className="cardHeader">
              <img src="/static/logo.svg" alt="the Amherst Student" />
              <img
                src="/static/logo-subline.svg"
                alt="the student-supported newspaper since 1868"
                className="subline"
              />
            </div>
            <div className="cardContent">
              <p>
                The Amherst Student is the newspaper of Amherst College. Established in 1868, The Student is the oldest
                weekly college publication in the country, with more than 2,000 copies circulated per issue. The Student
                is published every Wednesday of the academic year, with the exception of vacations and exam periods, and
                is distributed to members of the college and the communities of Amherst, Hadley and the Five College
                area free of charge, as well as to alumni and parents by subscription.{' '}
              </p>
              <p>
                The Student is written, produced and published by an all-volunteer team of dedicated Amherst students.
                The Student and its staff are committed to a standard of conscientious reporting and quality writing.
                Editorials are written by the managing opinion editors.
              </p>
              <p>
                The Student welcomes any and all Amherst students who wish to contribute to the newspaper. If you are
                interested in writing for a section of The Student, please contact the appropriate managing editor(s).
                If you are interested in the publishing and business management of The Student, please contact the
                publishers. If you are interested in copy editing, layout, photography or website management, please
                contact the editor-in-chief. General questions may be directed to astudent@amherst.edu or at
                413-206-9319.
              </p>
            </div>
          </Card>
        </a>
        <a name="ad">
          <br />

          <Card>
            <h5>ADVERTISERS</h5>
            <div className="cardContent">
              <p>
                The Amherst Student is published weekly on Wednesdays. At least 2,000 copies are circulated per issue.
                The Student is distributed to members of the College faculty and staff, the student body and the
                communities of Amherst, Hadley and the Five Colleges free of charge, as well as to alumni and parents by
                subscription.
              </p>
              <p>
                The Student carries five 2-inch columns per page. Each page measures 10 x 16 inches of copy; there are
                80 column inches per page. For advertising rates and other information, please contact The Student
                at astudent@amherst.edu.
              </p>
              <p>
                The Student publishes on Wednesdays during the school year. For the Fall 2018 semester, we will publish
                on:
              </p>
              <ul>
                <li>Friday, Aug. 31 (Orientation)</li>
                <li>Sept. 12</li>
                <li>Sept. 19</li>
                <li>Sept. 26</li>
                <li>Oct. 3</li>
                <li>Oct. 17</li>
                <li>Oct. 24</li>
                <li>Oct. 31</li>
                <li>Nov. 9 (Homecoming)</li>
                <li>Nov. 14</li>
                <li>Nov. 28</li>
                <li>Dec. 5</li>
              </ul>
            </div>
          </Card>
        </a>
          <br />
          <a name="subscribers">
          <Card>
            <h5>SUBSCRIBERS</h5>
            <div className="cardContent">
              <p>
                Get The Amherst Student delivered right to your door! For $40 a semester or $75 a year, get every issue
                of your favorite (and only) Amherst College newspaper! Please send a check to The Amherst Student,
                AC#2291, Amherst College, Amherst, MA 01002, P.O. Box 5000, or email us at astudent@amherst.edu to
                inquire about subscriptions.
              </p>
            </div>
          </Card>
        </a>
          <br />
          <a name="letter_policy">
          <Card>
            <h5>LETTER POLICY</h5>
            <div className="cardContent">
              <p>
                The opinion pages of The Student are intended as an open forum for the Amherst community. The Student
                will consider letters for publication in the next issue if they are under 400 words in length and are
                submitted to the paper's email account (astudent@amherst.edu) by noon on preceding Sunday. The editors
                reserve the right to edit any letters exceeding the 400-word limit or to withhold any letter because of
                considerations for space or content. Letters must bear the names of all contributors and a phone number
                where the author or authors may be reached. Letters and columns may be edited for clarity and The
                Student’s style. The Student will not print personal or group defamation.
              </p>
            </div>
          </Card>
        </a>
        </div>
      </Grid>
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
          margin-top: 120px;
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
      `}
    </style>
  </div>
)

export default Masthead
