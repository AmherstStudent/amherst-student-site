import React from 'react'
import Link from 'next/link'

const Container = (props) => (
  <div className="container">
    { props.children }



  <style jsx>{`
    .container{
      width: 85%;
      max-width:1200px;
      height:100%;
      margin:0 auto;
      position:relative;
    }


 `}</style>
 </div>
)

export default Container
