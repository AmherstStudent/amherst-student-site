import React from 'react'
import {DiscussionEmbed} from 'disqus-react'

const CommentsContainer = ({ identifier, title, slug, category_id }) => (
  <section className="comments">
    <DiscussionEmbed
      shortname="AmherstStudent"
      config={{
        url: 'https://amherststudent.com/article/' + slug,
        title: title,
        identifier: identifier
      }} />
    


    
    <style jsx>{`
      .comments {
        margin-bottom: 20px;
      }
    `}</style>
  </section>
)

export default CommentsContainer
