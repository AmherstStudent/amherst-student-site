import React from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import { GetFeaturedArticles } from '../../lib/queries'

const FeaturedNewsCard = () => (
  <section>
    <h3 className="cardTitle">TOP ARTICLES</h3>
    <hr className="undline" />
    <ul>
      <Query query={GetFeaturedArticles}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error!: Help me${error}`

          let view = data.views[0]
          let top_articles = view.toparticles

          return top_articles.map(article => (
            <li className="topArticle" key={article.id}>
              <Link href={`/article/${article.slug}`} passHref>
                <a>
                  <h5>{article.title}</h5>
                </a>
              </Link>
              <span>by {article.author.username}</span>
              <hr />
            </li>
          ))
        }}
      </Query>
    </ul>

    <style jsx>{`
      section {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      h5 {
        font-family: 'Merriweather';
        font-style: italic;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0.03px;
        margin-bottom: 5px;
      }
      h3 {
        font-family: 'Karla';
        font-style: bold;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0.03px;
        font-style: normal;
      }
      ul {
        padding-inline-start: 0px;
      }

      .undline {
        margin: 10px 0;
        border-color: black;
        border-width: 4.5px;
      }

      li {
        margin: 15px 0;
        list-style-type: none;
      }

      a {
        text-decoration: none;
      }
      h4:hover {
        color: grey;
      }
      hr {
        margin-top: 10px;
      }
      span {
        font-family: 'Merriweather';
        font-weight: 300;
        font-style: italic;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0.03px;
      }
    `}</style>
  </section>
)

export default FeaturedNewsCard
