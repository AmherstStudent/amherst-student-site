import React from 'react'
import { withRouter } from 'next/router'

// GraphQL loading
import { Query } from 'react-apollo'
import { GetArticle } from '../lib/queries'

// elements
import ArticleCore from '../components/Article/ArticleCore'
import Image from '../components/Article/Image'
import FeaturedNewsCard from '../components/Article/FeaturedNewsCard'
import AuthorCard from '../components/Article/AuthorCard'
import CommentsContainer from '../components/Article/Comments'
import NewsContainer from '../components/Article/NewsContainer'
import ArticleHeader from '../components/Article/ArticleHeader'
import NavBar from '../components/Layout/NavBar'
import ArticleSEO from '../components/Article/ArticleSEO'
//think about
const Article = withRouter(props => (
  <>
    <NavBar />

    <Query query={GetArticle} variables={{ slug: props.router.query.slug }} errorPolicy="all">
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`

        let imageChecker = (img) => {
          return (img != null)
        }

        let article = data.articles[0]

        return (
          <>  
            <ArticleHeader
              category={article.category.name}
              title={article.title}
              author={article.author.username}
              issue={article.issue.name}
            />
            <ArticleSEO article={article} />
            
            <NewsContainer>
                <article>
                  {imageChecker(article.featuredImage) ? <Image image={article.featuredImage.url} caption={article.imagecaption} /> : ' '}
                  <ArticleCore article_content={article.content} />
                  <CommentsContainer 
                    identifier={article._id}
                    title={article.title}
                    slug={article.slug}
                    category_id={article.category._id} />
                </article>

                <aside>
                  <AuthorCard type="author" author={article.author} />
                  <FeaturedNewsCard />
                </aside>
            </NewsContainer>
          
            <style jsx="jsx">
              {`
                article {
                  grid-column: 1 / 5;
                }

                aside {
                  margin-top: 10px;
                  margin-right: 20px;
                  margin-left: 20px;
                  grid-column: 5/7;
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
