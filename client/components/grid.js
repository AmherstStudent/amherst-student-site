import React from 'react'
import Link from 'next/link'

const Grid = (props) => (
  <div className={`grid ${ props.className }`}>
    { props.children }



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
 </div>
)

export default Grid
