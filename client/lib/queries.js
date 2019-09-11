import { gql } from 'apollo-boost'

export const GetHomePage = gql `
  fragment ArticleDetails on Article {
    _id
    title
    excerpt
    slug
    category {
      name
      _id
    }
    featuredImage {
      url
      _id
    }
    author {
      username
      reporterTitle
      _id
    }
    issue{
      name
      _id
    }

  }

  query HomePage {
    views(limit: 1,sort: "createdAt:desc" ) {
      _id
      top_article {
        ...ArticleDetails
      }
      news_right_first {
        ...ArticleDetails
      }
      news_right_second {
        ...ArticleDetails
      }
      news_right_third {
        ...ArticleDetails
      }
      news_left_big {
        ...ArticleDetails
      }
      opinion_first {
        ...ArticleDetails
      }
      opinion_second {
        ...ArticleDetails
      }
      opinion_third {
        ...ArticleDetails
      }
      arts_living_first_third {
        ...ArticleDetails
      }
      arts_living_second_third {
        ...ArticleDetails
      }
      arts_living_third_third {
        ...ArticleDetails
      }
      arts_living_big {
        ...ArticleDetails
      }
      sports_first {
        ...ArticleDetails
      }
      sports_second {
        ...ArticleDetails
      }
      sports_third {
        ...ArticleDetails
      }
    }
  }
`

export const GetEditors = gql`
  query EditorsList($name: String!) {
    categories(where: { name_contains: $name }) {
      editors {
        username
        reporterBio
        reporterPhoto {
          url
        }
        _id
      }
    }
  }
`

export const GetArticle = gql `
  fragment ArticlePageDetails on Article {
    title
    excerpt
    slug
    imagecaption
    content
    category {
      name
      _id
    }
    updatedAt
    createdAt
    featuredImage {
      url
    }
    author {
      username
      reporterTitle
      reporterBio
      reporterPhoto{
        url
      }
      _id
    }
    _id
    issue{
      name
    }

  }

  query Article_Lookup($slug: String!){
    articles(where: { slug: $slug }) {
      ...ArticlePageDetails
    }
  }
`

export const GetCategoryArticles = gql`
  query CategoryLookup($name: String!) {
    categories(where: { name_contains: $name }) {
      Category(sort: "createdAt:desc") {
        title
        createdAt
        author {
          username
          reporterTitle
          _id
        }
        excerpt
        _id
        category {
          name
        }
        slug
        issue{
          name
        }
      }
    }
  }
`
export const GetAuthor = gql`
query AuthorLookup ($name: ID!) {
  user(id: $name){
  	articles {
      title
      createdAt
      author {
        username
        reporterTitle
        _id
      }
      excerpt
      _id
      category {
        name
      }
      slug
      issue{
        name
      }
    }
  }
}
`

export const GetFeaturedArticles = gql`
  query{
    views(limit: 1,sort: "createdAt:desc" ) {
      toparticles{
        title
        author{
          username
          _id
        }
        slug
        _id
      }
  }
  }


`
