import React from 'react'
import Link from 'next/link'
import Card from './card.js'
import Container from './container.js'

const FeatureNewsCard = (props) => (
  <Card className={`${ props.className }`}>

    <Container>
    <div className="cardContent">
      <h3 className="cardTitle">TOP ARTICLES</h3>
      <div className="topArticle">
        <Link href={`/article/Familiar-Story-Unfamiliar-Faces-Crazy-Rich-Asians-Triumphs`} passHref><a><h4>Familiar Story, Unfamiliar Faces: “Crazy Rich Asians” Triumph</h4></a></Link>
        <p className="caption">by Seoyeon Kim '21</p>
        <hr />
      </div>
      <div className="topArticle">
        <Link href={`/article/three-new-administrators-aim-to-leave-their-impact-on-amherst`} passHref><a><h4>Three New Administrators Aim to Leave Their Impact on Amherst</h4></a></Link>
        <p className="caption">By Audrey Cheng '20 and Natalie De Rosa '21</p>
        <hr />
      </div>
      <div className="topArticle">
        <Link href={`/article/Advice-for-Class-of-2022`} passHref><a><h4>Advice for Class of 2022</h4></a></Link>
        <p className="caption">By The Editoral Board</p>
        <hr />
      </div>
      <div className="topArticle" id="last">
        <Link href={`/article/Football-Returns-Aims-for-NESCAC-Title-After-Near-Miss`} passHref><a><h4>Football Returns, Aims for NESCAC Title After Near Miss </h4></a></Link>
        <p className="caption">By Matthew Sparrow '21</p>

      </div>
    </div>
    </Container>


  <style jsx>{`
    h4{
      font-family: "adobe-garamond-pro",serif;
      font-weight:600;
      font-style: italic;
      font-size: 26px;
      color: #000000;
      letter-spacing: 0.05px;
      text-align: center;
    }
    .cardContent{
      margin: 0 auto;
      text-align: center;
    }
    h4{
      margin: 0;
    }
    .topArticle{
      margin-top: 20px;
    }
    h3{
      font-family: "europa",sans-serif;


    }
    h4, a {
      text-decoration: none;
    }
    h4:hover{
      color:grey;
    }
    .caption{
      font-size:16px;
    }
    #last{
      padding-bottom: 20px;
    }




 `}</style>
 </Card>
)

export default FeatureNewsCard
