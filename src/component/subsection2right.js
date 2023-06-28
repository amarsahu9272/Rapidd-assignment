import React from 'react'
import './subsection2right.css'
import mountain1 from '../Utilities/mountain1.png'
import Button from '../Utilities/button'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Subsection2right() {
    return (
        <div className='subsection2right'>
            <div id='section2' className='subsection2right-right'>
                <p>Numquam.<b>Esse aliquip do, magni</b></p>
                <h3>Minima ad for vitae sit</h3>
                <a href='#section2'>Ipsum Lorem</a>
            </div>
            <div>
                <img className='image-right' src={mountain1} alt='mountain1' />
                <div className='subsection2right-bttm'>
                    <Button icons={ShareOutlinedIcon} text="Ispum Lorem" section="subsection2right-b" />
                    <p>Adipiscing unde vel so dolore consequatur.</p>
                    <a href='#section2'>Ipsum Lorem</a>
                </div>
            </div>
        </div>
    )
}

export default Subsection2right
