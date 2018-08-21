import { gql } from 'apollo-boost'
export const GET_HOME_PAGE = gql `
fragment ArticleDetails on Article {
title
excerpt
featuredImage{
  url
}
}

query HomePage{
view(id: "5b7a80fe40025fc5daebd18f"){
  top_article{
    ...ArticleDetails
    }
  news_right_first{
    ...ArticleDetails
  }
  news_right_second{
    ...ArticleDetails
  }
  news_right_third{
    ...ArticleDetails
  }
  opinion_first{
    ...ArticleDetails
  }
  opinion_second{
    ...ArticleDetails
  }
  opinion_third{
    ...ArticleDetails
  }
  arts_living_first_third{
    ...ArticleDetails
  }
  arts_living_second_third{
    ...ArticleDetails
  }
  arts_living_third_third{
    ...ArticleDetails
  }
  arts_living_big{
    ...ArticleDetails
  }
  sports_first{
    ...ArticleDetails
  }
  sports_second{
    ...ArticleDetails
  }
  sports_third{
    ...ArticleDetails
  }
}
}
`
