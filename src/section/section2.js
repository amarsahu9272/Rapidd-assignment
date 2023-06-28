import React from 'react'
import './section2.css'
import Subsection2Left from '../component/subsection2Left'
import Subsection2right from '../component/subsection2right'


function Section2() {
  return (
    <div className='section2'>
      <Subsection2Left />
      <Subsection2right />
    </div>
  )
}

export default Section2
