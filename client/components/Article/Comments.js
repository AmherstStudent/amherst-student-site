import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const CommentsContainer = ({ identifier, title, slug }) => (
  <section className="comments">
    <DiscussionEmbed
      shortname="AmherstStudent"
      config={{
        url: `https://amherststudent.com/article/${slug}`,
        title,
        identifier,
      }}
    />

    <style jsx>
      {`
        .comments {
          margin-bottom: 20px;
        }
      `}
    </style>
  </section>
)

export default CommentsContainer
