// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0; font-size: 18px; auto; width: 100%; display:flex; flex-direction: column;} /* custom! */`}</style>
        </Head>
        <body className="home_page">
          <Nav />
          <Main />
          <NextScript />
          <Footer className="bottom"/>
        </body>


        <style>
        {`
          html{
            width: 100vw;
          }
          p {
          font-family: 'Adobe Garamond Pro';
          font-weight:300;
          line-height:1.5em;
          font-size: 16px;
          -webkit-margin-before: 0em;
          -webkit-margin-after: 0em;
          }

          h1 {
            font-weight: semibold;
            font-style: italic;
            font-size: 44px;
          }

          h2{
            font-size: 28px;
          }
          .span2{
            grid-column: 2;
          }
        `}

        </style>

      </html>
    )
  }
}
