import React from 'react'
import './section4.css'
import Subsection4 from '../component/subsection4'

function Section4() {
    return (
        <div className='section4-container'>
            <div className='section4'>
                <Subsection4 />
                <Subsection4 />
                <Subsection4 />
                <Subsection4 />
            </div>
        </div>
    )
}

export default Section4
