import React from 'react'
import Card from '../Basics/card'
import ReactDisqusComments from 'react-disqus-comments'

const CommentsContainer = props => (
  <section className="comments">
    <Card>
      <>
        <ReactDisqusComments
          shortname="AmherstStudent"
          identifier={props.article._id}
          title={props.article.title}
          url={'https://amherststudent.com/article/' + props.article.slug}
          category_id={props.article.category.id}
        />
      </>
    </Card>
    <style jsx>{`
      .comments {
        margin-bottom: 20px;
      }
    `}</style>
  </section>
)

export default CommentsContainer
