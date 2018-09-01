import React from 'react'
import Link from 'next/link'
import Card from './card'
import Head from 'next/head'
import {socialTwitterCircular} from 'react-icons-kit/typicons/socialTwitterCircular'
import {socialFacebookCircular} from 'react-icons-kit/typicons/socialFacebookCircular'
import {ic_stars} from 'react-icons-kit/md/ic_stars'
import {Icon} from 'react-icons-kit'
import moment from 'moment'

const Article_Header = (props) => (
  <Card className={`span-12 ${ props.className }`}>
      <span className="category">{props.article.category.name.toUpperCase()}</span>

      <div className="header_content">
        <h1>{props.article.title}
        <span> </span>
          <a href=""><Icon size={32} icon={ic_stars}/></a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=http://amherststudent.com/article/${props.article.slug}`}>
            <Icon size={32} icon={socialFacebookCircular}/>
          </a>
          <a href={`https://twitter.com/intent/tweet?url=http://amherststudent.com/article/${props.article.slug}&text=${props.article.excerpt}`}>
            <Icon size={32} icon={socialTwitterCircular}/>
          </a>
        </h1>
      </div>
      <hr/>
      <h5 className="article_details">
      By {props.article.author.username}, {props.article.author.reporterTitle} | {moment(props.article.updatedAt).format('MMMM D YYYY').toUpperCase()}
      </h5>
  <style jsx>{`

    .header_content {
      margin-left: 20px;
      padding: 5px;
      margin-top: 10px;
    }

    .category {
      background: #5D3C85;
      color: white;
      font-family: "europa",sans-serif;
      font-size: 14px;
      letter-spacing: 0.12px;
      line-height: 21px;
      position: absolute;
      margin-top: 20px;
      padding: 5px;
      margin-left: 25px;
      margin-bottom: 40px;
    }

    h1 {
      margin-bottom: 2px;
      padding-top: 20px;
      padding-right: 5px;
    }
    a {
      color: #5D3C85;
    }
    hr {
      width: 100%;
    }
    .article_details {
      margin-top: 10px;
      margin-left: 30px;
      padding-bottom: 20px;
      display: flex;
    }
    h5 {
      margin: auto 0;
      font-family: "europa",sans-serif;
      font-weight: 200;
      font-size: 14px;
    }

 `}</style>
</Card>
)

export default Article_Header
