import react from 'react'

import React from 'react'

import Head from '../components/head'
import FeatureNewsCard from '../components/featurenewscard.js'
import Container from '../components/container.js'
import Card from '../components/card.js'
import Main from '../components/main.js'
import Grid from '../components/grid.js'
import MediaCard from '../components/mediacard.js'
import MediaCard3 from '../components/mediacard3.js'
import OneThirdCard from '../components/thirdcard.js'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Masthead = props => (
  <Container>
    <Head title="The Amherst Student">
      <meta
        name="description"
        content="The Amherst Student, the student-supported newspaper of Amherst College."
      />
    </Head>

    <div className="card" id="masthead">
      <div className="cardHeader">
        <img src="/static/logo.svg" alt="the Amherst Student" />
        <img
          src="/static/logo-subline.svg"
          alt="the student-supported newspaper since 1868"
          className="subline"
        />
        <hr />
      </div>
      <div className="cardContent">
        <p>
          The Amherst Student is the newspaper of Amherst College. Established in 1868, The Student
          is the oldest weekly college publication in the country, with more than 2,000 copies
          circulated per issue. The Student is published every Wednesday of the academic year, with
          the exception of vacations and exam periods, and is distributed to members of the college
          and the communities of Amherst, Hadley and the Five College area free of charge, as well
          as to alumni and parents by subscription.{' '}
        </p>
        <p>
          The Student is written, produced and published by an all-volunteer team of dedicated
          Amherst students. The Student and its staff are committed to a standard of conscientious
          reporting and quality writing. Editorials are written by the managing opinion editors.
        </p>
        <p>
          The Student welcomes any and all Amherst students who wish to contribute to the newspaper.
          If you are interested in writing for a section of The Student, please contact the
          appropriate managing editor(s). If you are interested in the publishing and business
          management of The Student, please contact the publishers. If you are interested in copy
          editing, layout, photography or website management, please contact the editor-in-chief.
          General questions may be directed to astudent@amherst.edu or at 413-206-9319.
        </p>
      </div>
    </div>

    <div className="card" id="masty">
      <div className="cardHeader">
        <h2>Masthead</h2>
        <hr />
      </div>
      <h5 className="noborder">Editors in Chief</h5>
      <div className="cardContent">
        <div className="row">
          <div>
            <div className="round" />
            <p>Emma Swislow</p>
          </div>
          <div>
            <div className="round" />
            <p>Shawna Chen</p>
          </div>
        </div>

        <h5 className="noborder">Managing News</h5>
        <div className="row">
          <p>Natalie De Rosa</p>
          <p>Ryan Yu</p>
        </div>
        <h5 className="noborder">Managing Opinion</h5>
        <div className="row">
          <p>Jae Yun Ham</p>
          <p>Camilo Toruno</p>
        </div>
        <h5 className="noborder">Managing Arts and Living</h5>
        <div className="row">
          <p>Olivia Geiger</p>
          <p>Seyeon Kim</p>
        </div>
        <h5 className="noborder">Managing Sports</h5>
        <div className="row">
          <p>Connor Haugh</p>
          <p>Henry Newton</p>
        </div>
        <h5 className="noborder">Managing Design</h5>
        <div className="row">
          <p>Julia Shea</p>
        </div>
        <br />

        <h5 className="noborder">Staff</h5>

        <hr className="short" />
        <h5 className="noborder">Digital Director</h5>
        <div className="row">
          <p>Dylan Momplaisir</p>
        </div>

        <h5 className="noborder">Head Publisher</h5>
        <div className="row">
          <p>Joseph Centeno</p>
          <p>Emmy Sohn</p>
          <p>Mark Nathin</p>
        </div>
      </div>
    </div>

    <div className="card" id="ad">
      <div className="cardHeader">
        <h2>Advertisers</h2>
      </div>
      <div className="cardContent">
        <p>
          The Amherst Student is published weekly on Wednesdays. At least 2,000 copies are
          circulated per issue. The Student is distributed to members of the College faculty and
          staff, the student body and the communities of Amherst, Hadley and the Five Colleges free
          of charge, as well as to alumni and parents by subscription.
        </p>
        <p>
          The Student carries five 2-inch columns per page. Each page measures 10 x 16 inches of
          copy; there are 80 column inches per page. For advertising rates and other information,
          please contact The Student at astudent@amherst.edu.
        </p>
        <p>The Student publishes on Wednesdays during the school year.</p>
      </div>
    </div>

    <div className="card">
      <div className="cardHeader">
        <h2>Subscribers</h2>
      </div>
      <div className="cardContent">
        <p>
          Get The Amherst Student delivered right to your door! For $40 a semester or $75 a year,
          get every issue of your favorite (and only) Amherst College newspaper! Please send a check
          to The Amherst Student, AC#2291, Amherst College, Amherst, MA 01002, P.O. Box 5000, or
          email us at astudent@amherst.edu to inquire about subscriptions.
        </p>
      </div>
    </div>

    <div className="card">
      <div className="cardHeader">
        <h2>Letter Policy</h2>
      </div>
      <div className="cardContent">
        <p>
          The opinion pages of The Student are intended as an open forum for the Amherst community.
          The Student will consider letters for publication in the next issue if they are under 400
          words in length and are submitted to the paper's email account (astudent@amherst.edu) by
          noon on preceding Sunday. The editors reserve the right to edit any letters exceeding the
          400-word limit or to withhold any letter because of considerations for space or content.
          Letters must bear the names of all contributors and a phone number where the author or
          authors may be reached. Letters and columns may be edited for clarity and The Student’s
          style. The Student will not print personal or group defamation.
        </p>
      </div>
    </div>

    <style jsx="jsx">
      {`
        p {
          line-height: 36px;
        }
        .card {
          grid-column: span 6;
        }
        hr {
          margin-top: 10px;
          border-width: 5px;
          border-style: solid;
          max-width: 5vw;
          right: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;
          border-color: var(--dark-purple);
          margin-bottom: 10px;
        }
        .short {
        }
      `}
    </style>
  </Container>
)

export default Masthead
