import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const FeatureNewsCard = props => (
  <Card className={`${props.className}`}>
    <Container>
      <div className="cardContent">
        <h3 className="cardTitle">TOP ARTICLES</h3>
        <div className="topArticle">
          <Link href={`/article/low-voter-turnout-spurs-new-registration-initiatives`} passHref>
            <a>
              <h4>Low Voter Turnout Spurs New Registration Details</h4>
            </a>
          </Link>
          <p className="caption">by Shawna Chen '20</p>
          <hr />
        </div>
        <div className="topArticle">
          <Link href={`/article/eighth-grade-honestly-explores-modern-middle-schoo-llife`} passHref>
            <a>
              <h4>"Eight Grade" Honestly Explores Modern Middle School Life</h4>
            </a>
          </Link>
          <p className="caption">By Hildi Gabel '21</p>
          <hr />
        </div>
        <div className="topArticle">
          <Link href={`/article/know-thyself-confessions-of-abroad`} passHref>
            <a>
              <h4>Know Thyself: Confessions of #abroad</h4>
            </a>
          </Link>
          <p className="caption">By Diane Lee '19</p>
          <hr />
        </div>
        <div className="topArticle" id="last">
          <Link href={`/article/the-mazzola-minute-watford`} passHref>
            <a>
              <h4>The Mazzola Minute</h4>
            </a>
          </Link>
          <p className="caption">By Jamie Mazzola '21</p>
        </div>
      </div>
    </Container>

    <style jsx>{`
      h4 {
        font-family: 'adobe-garamond-pro', serif;
        font-weight: 600;
        font-style: italic;
        font-size: 26px;
        color: #000000;
        letter-spacing: 0.05px;
        text-align: center;
      }
      .cardContent {
        margin: 0 auto;
        text-align: center;
      }
      h4 {
        margin: 0;
      }
      .topArticle {
        margin-top: 20px;
      }
      h3 {
        font-family: 'europa', sans-serif;
      }
      h4,
      a {
        text-decoration: none;
      }
      h4:hover {
        color: grey;
      }
      .caption {
        font-size: 16px;
      }
      #last {
        padding-bottom: 20px;
      }
    `}</style>
  </Card>
)

export default FeatureNewsCard
