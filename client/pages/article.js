import React from 'react'
import { withRouter } from 'next/router'

// GraphQL loading
import { ARTICLE_LOOKUP } from '../lib/queries.js'
import { Query } from 'react-apollo'

// elements
import Article_Core from '../components/Article/ArticleCore'
import ImageCard from '../components/Article/image_card'
import FeatureNewsCard from '../components/featurenewscard'
import AuthorCard from '../components/Article/authorcard'
import CommentsContainer from '../components/Article/comments'
import NewsContainer from '../components/Article/NewsContainer'
import ArticleHeader from '../components/Article/ArticleHeader'
import NavBar from '../components/NavBar'
import ArticleSEO from '../components/Article/ArticleSEO'
//think about
const Article = withRouter(props => (
  <>
    <NavBar />

    <Query query={ARTICLE_LOOKUP} variables={{ slug: props.router.query.slug }} errorPolicy="all">
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`

        function imageChecker() {
          if (article.featuredImage === null) {
            return false
          } else {
            return true
          }
        }
        let article = data.articles[0]
        return (
          <>
            <ArticleSEO article={article} />
            <ArticleHeader
              category={article.category.name}
              title={article.title}
              author={article.author.username}
              issue={article.issue.name}
            />
            <NewsContainer article={article}>
              <>
                <article>
                  {imageChecker() ? <ImageCard article={article} /> : ' '}

                  <Article_Core article={article} />
                  <CommentsContainer article={article} />
                </article>

                <aside>
                  <AuthorCard className="margin-20 span-2" type="author" author={article.author} />
                  <FeatureNewsCard className="margin-20" />
                </aside>
              </>
            </NewsContainer>

            <style jsx="jsx">
              {`
                @media only screen and (min-width: 1240px) {
                  .header {
                    width: 100vw;
                  }

                  article {
                    grid-column: 1 / 5;
                  }
                  aside {
                    margin-top: 10px;
                    margin-right: 20px;
                    margin-left: 20px;
                    grid-column: 5/7;
                  }
                }
                article > * {
                  margin-bottom: 15%;
                }

                @media only screen and (max-width: 1240px) {
                  article {
                    grid-column: span 6;
                  }

                  aside {
                    grid-column: span 6;
                  }
                }
              `}
            </style>
          </>
        )
      }}
    </Query>
  </>
))

export default Article
