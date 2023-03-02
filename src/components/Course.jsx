import React from 'react'
import '../App.css';
export default function Course({title}) {
  return (
    <div className='courseParent'>
        <div>{title}</div>
        <div><button>Start Learning</button></div>
    </div>
  )
}
