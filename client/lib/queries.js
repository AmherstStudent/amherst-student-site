import { gql } from 'apollo-boost'
export const GET_HOME_PAGE = gql `
fragment ArticleDetails on Article {
  _id
  title
  excerpt
  slug
  category {
    name
  }
  featuredImage {
    url
  }
  author {
    username
    reporterTitle
  }
  view {
    words
  }
}

query HomePage {
  views(limit: 1, sort: "createdAt:desc") {
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

export const GET_EDITOR_LIST = gql`
  query EditorsList($name: String!) {
    categories(where: { name_contains: $name }) {
      editors {
        username
        reporterBio
        reporterPhoto {
          url
        }
      }
    }
  }
`

export const ARTICLE_LOOKUP = gql `
  fragment ArticlePageDetails on Article {
    title
    excerpt
    slug
    category {
      name
    }
    updatedAt
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
    }
    volumeIssue{
      volume_issue_number
    }
    content
    _id

  }

  query Article_Lookup($slug: String!){
    articles(where: { slug: $slug }) {
      ...ArticlePageDetails
    }
  }
`
