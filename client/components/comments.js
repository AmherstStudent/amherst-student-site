import React from 'react'
import Card from './card'
import Container from './container'
import ReactDisqusComments from 'react-disqus-comments'

const CommentsContainer = props => (
  <div className="comments">
    <Card>
      <Container>
        <ReactDisqusComments
          shortname="AmherstStudent"
          identifier={props.article._id}
          title={props.article.title}
          url={'https://amherststudent.com/' + props.article.slug}
          category_id={props.article.category.id}
        />
      </Container>
    </Card>
    <style jsx>{`
      .comments {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
)

export default CommentsContainer
