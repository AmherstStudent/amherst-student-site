import React from 'react'
import NextSeo from 'next-seo'
import { ArticleJsonLd } from 'next-seo'
import { urlLink } from '../../lib/util'

const ArticleSEO = ({ article }) => (
  <>
    <NextSeo
      config={{
        title: article.title,
        description: article.excerpt,
        locale: 'en_IE',
        site_name: 'Amherst Student',
        openGraph: {
          url: urlLink(article.slug),
          title: article.title,
          description: article.excerpt,
          images: [
            {
              url: article.featuredImage.url,
            },
          ],
        },
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
