import React from 'react'
import Link from 'next/link'

const Grid = (props) => (
  <div className="grid">
    { props.children }



  <style jsx>{`
    .grid{
      display: flex;
      flex-direction: column;
      flex:2;
      width: 100%;
    }


 `}</style>
 </div>
)

export default Grid
