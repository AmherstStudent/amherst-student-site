// import React from 'react'
// import Link from 'next/link'
// import Card from './Basics/card'

// const OneThirdCard = ({ article, className }) => (
//   <Card className={`third ${className}`}>
//     <div>
//       <div className="cardContent">
//         <Link href={`/category/${article.category.name}`} passHref>
//           <a>
//             <span className="category">{article.category.name.toUpperCase()}</span>
//           </a>
//         </Link>

//         <h4 className="cardTitle">
//           <Link href={`/article/${article.slug}`} passHref>
//             <a>{article.title}</a>
//           </Link>{' '}
//           <br />{' '}
//           <span className="cardAuthor">
//             by{' '}
//             <Link href={{ pathname: '/author', query: { id: article.author._id } }}>
//               <a className="username">{article.author.username}</a>
//             </Link>
//             , {article.author.reporterTitle} | {article.issue.name.toUpperCase()}
//           </span>
//         </h4>
//         <p className="cardText">{article.excerpt}</p>
//       </div>
//       <div className="cardImage" />
//     </div>

//     <style jsx>{`
//       .cardContent {
//         margin: 0 0 0 10px;
//         margin-bottom: 2px;
//         margin-top: 2%;
//         max-width: 90%;
//         padding: 10px;
//       }
//       .category {
//         background: #5d3c85;
//         color: white;
//         font-family: 'europa', sans-serif;
//         font-size: 14px;
//         letter-spacing: 0.12px;
//         line-height: 21px;
//         margin-top: 40px;
//         padding: 5px;
//       }

//       .cardTitle {
//         font-weight: 600;
//         font-style: italic;
//         font-size: 26px;
//         line-height: 1.15em;
//         letter-spacing: 0.05px;
//         margin-bottom: 0px;
//         margin-top: 10px;
//         padding-top: 5px;
//       }

//       a {
//         text-decoration: none;
//         color: black;
//       }

//       .username {
//         color: rgb(85, 26, 139);
//       }

//       a:hover {
//         color: grey;
//       }

//       .cardAuthor {
//         font-size: 14px;
//         font-weight: 100;
//         padding: 0;
//         margin: 0;
//       }

//       .cardText {
//         margin-top: 2px;
//         font-size: 16px;
//         color: #000000;
//         letter-spacing: 0;
//         line-height: 1.25em;
//         padding-bottom: 10px;
//       }

//       br {
//         height: 5px;
//       }

//       @media screen and (max-width: 768px) {
//         .cardText {
//           padding-bottom: 20px;
//         }
//       }
//     `}</style>
//   </Card>
// )

// OneThirdCard.defaultProps = {
//   article: {
//     category: {
//       name: 'Card',
//     },
//     title: 'Title',
//     author: {
//       username: 'Call me',
//     },
//     slug: 'defaddult',
//     excerpt: 'Word',
//   },
// }

// export default OneThirdCard
