import React from 'react'

const Card = props => (
  <div className={`card ${props.className}`}>
    {props.children}

    <style jsx>
      {`
        .card {
          display: block;
          flex-direction: column;
          width: 100%;
          min-width: 100%;
          /* Rectangle 5: */
          background: #ffffff;
          box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .card:hover {
          box-shadow: -5px -1px 19px -4px rgba(133, 108, 176, 0.5);
        }
        .span-3 {
          grid-column: span 3;
        }
        .span-4 {
          grid-column: span 4;
        }
        .span-5 {
          grid-column: span 5;
        }
        .span-8 {
          grid-column: span 8;
        }
        .span-6 {
          grid-column: span 6;
        }
        .span-7 {
          grid-column: span 7;
        }
        .span-9 {
          grid-column: span 9;
        }
        .span-12 {
          grid-column: span 12;
        }

        .third {
          margin-bottom: 20px;
          min-height: 250px;
        }

        .third:last-child {
          margin-bottom: 0px;
        }

        .margin-20 {
          margin-bottom: 20px;
        }

        @media screen and (max-width: 768px) {
          .card {
            grid-column: 1 / 13;
          }
          .third {
            margin-bottom: 20px;
          }
        }
        .thrds {
          margin-right: 10px;
        }
        .black {
          background-color: hsl(0, 0%, 10%);
        }
      `}
    </style>
  </div>
)

export default Card
