import React from 'react';
import Card from './card'
import Container from './container'
import ReactDisqusComments from 'react-disqus-comments'

const CommentsContainer = (props) => (
  <div className="comments">
    <Card classname ="article">
      <Container>
        <ReactDisqusComments shortname="AmherstStudent" identifier={props.article._id} title={props.article.title} url={'https://localhost:3000/' + props.article.slug} category_id={props.article.category._id}/>
      </Container>
    </Card>
    <style jsx>{`

    `}</style>
  </div>
)

export default CommentsContainer
