import React from "react";
import Card from "./card";
import Container from "./container";
import showdown from "showdown";

function createMarkup(content) {
  var formatted_content = content.replace(/(?:\r\n|\r|\n)/g, "<br >");
  var converter = new showdown.Converter();
  var html = converter.makeHtml(content).replace(/(?:\r\n|\r|\n)/g, "<br >");
  return { __html: html };
}

const Article_Core = props => (
  <Card className="margin-20">
    <Container>
      <div>
        <div
          className="article_text"
          dangerouslySetInnerHTML={createMarkup(props.article.content)}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
        img  { width: 100%; height: auto; }
      `
          }}
        />
      </div>
    </Container>
    <style jsx>
      {`
        .article_text {
          margin: 25px 10px 25px 10px;
        }
        .article_text > p {
          font-size: 110px;
        }

        img {
          width: 100%;
          height: auto;
        }
      `}
    </style>
  </Card>
);

export default Article_Core;
