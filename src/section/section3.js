import React from 'react'
import './section3.css'
import Subsection3 from '../component/subsection3'

function Section3() {
    return (
        <div className='section3-container'>
            <div className='section3-h'>
                <h3>Officia ut</h3>
                <a href='#section1'>Ipsum Lorem</a>
            </div>
            <div className='section3'>
                <Subsection3 />
                <Subsection3 />
                <Subsection3 />
                <Subsection3 />
                <Subsection3 />
                <Subsection3 />
                <Subsection3 />
                <Subsection3 />

            </div>
        </div>
    )
}

export default Section3
