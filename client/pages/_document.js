// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'
import ga from '../lib/ga'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </Head>

        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i');
            @import url('https://fonts.googleapis.com/css?family=Karla:400,700');


            :root{
              --main-bg-color: #F1F1F1;
              --dark-purple: #3F1F69;
              --light-purple: #5D3C85;
              --green: #5BA151;
              --off-black: #333;
              --home-para-font: 12px;
              --gen-padding: 15px;

            }

            * {
              font-family: Merriweather, monospace, serif;
              margin-block-start: 0em;
              margin-block-end: 0em;
              box-sizing: border-box;
              -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
            }

            h1{
              font-weight: bold;
              font-style:italic;
              font-size: 28px;
              letter-spacing: 0.03px;
              line-height: 39px;
            }
            h2{
              font-family: Merriweather-BoldItalic;
              font-style: italic;
              font-size: 24px;
              color: #000000;
              letter-spacing: 0.02px;
            }
            h3{
              font-weight: bold;
              font-style: italic;
              font-size: 18px;
              color: #000000;
              letter-spacing: 0.02px;
            }



        `}
        </style>
      </html>
    )
  }
}
