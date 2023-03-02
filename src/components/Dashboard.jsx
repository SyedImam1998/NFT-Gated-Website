import React from 'react'
import Course from './Course'

export default function Dashboard() {
    const[pass,setPass]=React.useState('')
  return (
    
    <div>
        <h1>Hey User, Welcome to Elite Dashboard !!!</h1>
        <div style={{display:"flex",width:"100%",gap:"10px"}}>
          <Course title="Learn JavaScript in 30 mins "></Course>
          <Course title="Learn FlexBox in 30 mins"></Course>
          <Course title="Learn CSS in 30 mins"></Course>
        </div>

    
    </div>
  )
}
