import React from 'react'
import Card from './card'
import Container from './container'
import showdown from 'showdown'

function createMarkup(content) {

  var formatted_content = content.replace(/(?:\r\n|\r|\n)/g, '<br >')
  var converter = new showdown.Converter()
  var html = converter.makeHtml(formatted_content)
  return {__html: html};
}

const Article_Core = (props) => (
  <Card className="article">
    <Container>
      <div>
        <div className="article_core" dangerouslySetInnerHTML={createMarkup(props.article.content)}/>

      </div>
    </Container>
    <style jsx>{`
      .article_core {
        margin-top: 20px;
        margin-bottom: 20px;


      }


    `}
    </style>
  </Card>


)

export default Article_Core