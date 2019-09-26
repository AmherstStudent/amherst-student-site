import React from 'react'
import NextSeo from 'next-seo'
import { ArticleJsonLd } from 'next-seo'
import { urlLink } from '../../lib/util'

const ArticleSEO = ({ article }) => (
  <>
    <NextSeo
      title = {article.title}
      description = {article.excerpt}
      locale="en_US"
      site_name="The Amherst Student"
      openGraph = {{
        site_name: 'The Amherst Student',
        title: article.title,
        description: article.excerpt,
        url: urlLink(article.slug),
        type: 'article',
        article: {
          publishedTime: article.createdAt,
          modifiedTime: article.updatedAt,
          section: article.category.name,
          authors: [article.author.username],
        },
        images: [
          {
            url: article.featuredImage ? article.featuredImage.url : '',
          },
        ],
      }}
      twitter={{
        site: '@amherststudent',
        cardType: 'summary_large_image',
      }}

    />

    <ArticleJsonLd
      url={`https://amherststudent.com/article/${article.slug}`}
      title={article.title}
      images={[
        article.featuredImage
          ? article.featuredImage.url
          : 'https://amherststudent.com/static/logo.jpg',
      ]}
      datePublished={article.createdAt}
      dateModified={article.updatedAt}
      authorName={article.author.username}
      publisherName="The Amherst Student"
      publisherLogo="https://amherststudent.com/static/logo.jpg"
      description={article.excerpt}
    />
  </>
)

export default ArticleSEO
