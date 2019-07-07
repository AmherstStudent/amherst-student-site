import React from 'react'
import NextSeo from 'next-seo'
import { ArticleJsonLd } from 'next-seo'

function nullImage(article) {
  if (article.featuredImage.url == true) {
    var imageLink = [article.featuredImage.url]
    return imageLink
  }
  return []
}

function urlLink(article) {
  return 'amherststudent.com/article/' + article.slug
}

const ArticleSEO = ({ article }) => (
  <>
    <NextSeo
      config={{
        title: article.title,
        description: article.excerpt,
        openGraph: {
          url: urlLink(article),
          title: article.title,
          description: article.excerpt,
          images: [
            {
              url: nullImage(article),
            },
          ],
        },
      }}
    />

    <ArticleJsonLd
      url={`amherststudent.com/article/${article.slug}`}
      title={article.title}
      images={nullImage(article)}
      datePublished={article.updatedAt}
      authorName={article.author.username}
      publisherName="The Amherst Student"
      publisherLogo="https://amherststudent.com/static/logo.svg"
      description={article.excerpt}
    />
  </>
)

export default ArticleSEO
