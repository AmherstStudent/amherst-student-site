import React from 'react'
import Link from 'next/link'

const Card = (props) => (
  <div className="row">
    {props.children}



  <style jsx>{`
    .row{
      display:flex;
      height: 55vh;
      margin-bottom: 20px;
      flex-direction: row;
      justify-content: space-around;
	    -webkit-flex-wrap: wrap;
	    flex-wrap: wrap;
      width:100%;
      padding:5px;

    }


 `}</style>
 </div>
)

export default Card
