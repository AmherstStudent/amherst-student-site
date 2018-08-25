import React from 'react'
import Link from 'next/link'

const Article_Header = (props) => (
  <Card className={`span-12 ${ props.className }`}>
    <span className="weirdtext">
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




  <style jsx>{`
    .grid{
      display: grid;
      max-width:100%;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
      grid-gap:20px;
      grid-auto-rows:auto;
    }
    .news{
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }


 `}</style>
</Card>
)

export default Article_Header
