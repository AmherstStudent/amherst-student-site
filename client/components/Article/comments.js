import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

const CommentsContainer = ({ identifier, title, slug, category_id }) => (
  <section className="comments">
    <ReactDisqusComments
      shortname="AmherstStudent"
      identifier={identifier}
      title={title}
      url={'https://amherststudent.com/article/' + slug}
      category_id={category_id}
    />
    <style jsx>{`
      .comments {
        margin-bottom: 20px;
      }
    `}</style>
  </section>
)

export default CommentsContainer
