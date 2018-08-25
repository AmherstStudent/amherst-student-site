import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Container from '../components/container'
import Grid from '../components/grid.js'
import Card from '../components/card.js'
import AuthorCard from '../components/authorcard'
import FeatureNewsCard from '../components/featurenewscard.js'
import ImageCard from '../components/image_card'
import {withRouter} from 'next/router'
import {Icon} from 'react-icons-kit'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import showdown from 'showdown'
import { Markdown } from 'react-showdown';
import moment from 'moment'
import {ic_stars} from 'react-icons-kit/md/ic_stars'
import {socialTwitterCircular} from 'react-icons-kit/typicons/socialTwitterCircular'
import {socialFacebookCircular} from 'react-icons-kit/typicons/socialFacebookCircular'
import ReactDisqusComments from 'react-disqus-comments'


const query = gql`
  fragment ArticleDetails on Article {
    title
    excerpt
    category {
      name
    }
    featuredImage {
      url
      updatedAt
    }
    author {
      username
      reporterTitle
      reporterBio
      reporterPhoto{
        url
      }
    }
    content
    _id

  }

  query Article_Lookup{
    articles(where: { slug: "counseling-center-sees-onethird-of-student-body" }) {
      ...ArticleDetails
    }
  }
`



function createMarkup(content) {

  var formatted_content = content.replace(/(?:\r\n|\r|\n)/g, '<br >')
  var converter = new showdown.Converter()
  var html = converter.makeHtml(formatted_content)

  return {__html: html};
}
const Article = withRouter((props) => (<div className="main-content">

  <Container>
    <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;
          console.log(data)
          let date = moment(data.articles[0].featuredImage.updatedAt).format('MMMM Do YYYY');
          console.log(date)
          return (

    <Grid className="news">
      <Card className=" span-12">
        <Head title={data.articles[0].title}/>

        <span className="category_name">
        {data.articles[0].category.name}
        </span>
        <div className="header_text">
          <h1>{data.articles[0].title}
            <span> </span>
            <a href=""><Icon size={32} icon={ic_stars}/></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${url.pathname}"><Icon size={32} icon={socialTwitterCircular}/></a>
            <a href="https://twitter.com/intent/tweet?url=${escapedUrl}&text=${text}"><Icon size={32} icon={socialFacebookCircular}/></a></h1>

        </div>
        <hr/>
        <div className="article_details">
          <h5>
            By {data.articles[0].author.username}, {data.articles[0].author.reporterTitle} | {date} | ISSUE 147-25
          </h5>

        </div>
      </Card>

      <article className="span-8">
        <ImageCard caption={data.articles[0].excerpt} />
        <Card className="article ting">
          <Container>
            <div>
              <div className="article_core" dangerouslySetInnerHTML={createMarkup(data.articles[0].content)}/>

            </div>
          </Container>
        </Card>
        <Card classname ="article">
          <Container>
            <ReactDisqusComments shortname="example" identifier="something-unique-12345" title="Example Thread" url="http://www.example.com/example-thread" category_id="123456" onNewComment={this.handleNewComment}/>
          </Container>
        </Card>
      </article>

      <aside className="span-4">
        <AuthorCard author={data.articles[0].author}/>
        <FeatureNewsCard className="article"/>
      </aside>
  <p></p>
    </Grid>

  );
}}
</Query>
  </Container>

  <style jsx="jsx">
    {
      ` .main-content {
        padding-top: 300px;
        min-height: 100vh;
        font-family: 'Adobe Garamond Pro';
        background: #F1F1F1;
        padding-top: 180px;
        padding-bottom: 20px;
      }
      .span-8 {
        grid-column: span 8;
      }
      .span-8 > * {
        margin-bottom: 15%;
      }
      .span-4 {
        grid-column: span 4;
      }
      .header_text {
        margin-left: 20px;
      }

      .span-12 {
        height: contain;
      }

      .article_content {
        padding: 5px;
        margin-bottom: 25px;
        line-height: 1.5em;
      }

      .article_core {
        margin-top: 20px;
        margin-bottom: 20px;


      }
      h1 {
        margin-bottom: 5px;
        padding-top: 20px;
      }
      hr {
        width: 100%;
      }
      .article_details {
        margin-top: 10px;
        margin-left: 20px;
        padding-bottom: 20px;
        display: flex;
      }
      .category_name {
        background: #5D3C85;
        color: white;
        font-family: MarkPro-Bold;
        font-size: 14px;
        letter-spacing: 0.12px;
        line-height: 21px;
        position: absolute;
        margin-top: 20px;
        padding: 5px;
        margin-left: 25px;
        margin-bottom: 40px;

      }
      .header_text {
        margin-top: 10px;
      }
      h5 {
        margin: 0 0 0 10px;

        font-family: Futura;
        font-weight: 200;
        font-size: 12px;
      }

       `
    }</style>
</div>))

export default Article
