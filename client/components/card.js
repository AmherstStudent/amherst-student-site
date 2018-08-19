import React from 'react'
import Link from 'next/link'
import Container from '../components/container'

const Card = (props) => (
  <div className={`card ${ props.className }`}>

    { props.children }




  <style jsx>{`
    .card{
      display:flex;
      flex-direction: column;
      width:100%;
      height:617px;
      /* Rectangle 5: */
      background: #FFFFFF;
      box-shadow: 0 1px 0 0 rgba(0,0,0,0.50);
      overflow:hidden;
    }
    .span-3{
      grid-column: span 3;
    }
    .span-4{
      grid-column: span 4;
    }
    .span-6{
      grid-column: span 6;
    }
    .span-9{
      grid-column: span 9;
    }
    .span-12{
      grid-column: span 12;
    }
    @media screen and (max-width: 768px){
      .card{
        grid-column: span 4;
    }
  }

 `}</style>
 </div>
)

export default Card
