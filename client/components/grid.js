import React from 'react'
import Link from 'next/link'

const Grid = (props) => (
  <div className="grid">
    { props.children }



  <style jsx>{`
    .grid{
      display: grid;
      max-width:100%;
      width: 1200px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap:20px;
      grid-auto-rows:auto;
    }


 `}</style>
 </div>
)

export default Grid
