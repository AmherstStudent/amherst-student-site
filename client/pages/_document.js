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
          <link rel="stylesheet" href="https://use.typekit.net/qth7vhw.css" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet" />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </Head>

        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
        <style>
          {`
            body
            {  box-sizing: border-box; margin: 0;  width: 100%; display:flex; flex-direction: column; text-shadow:1px 1px 1px 1px rgba(0,0,0,0.005);
  }
          @import url("https://use.typekit.net/qth7vhw.css");

          p {
            font-family: "adobe-garamond-pro",serif;
            font-weight:300;
            line-height:1.5em;
            font-size: 18px;
            -webkit-margin-before: 0em;
            -webkit-margin-after: 0em;
            color: #333;
          }

          h1 {
            font-weight: semibold;
            font-style: italic;
            font-size: 44px;
            color: #333;
          }

          h2{
            font-size: 28px;
            color: #333;
            font-style: italic;
            font-weight: 700;

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
