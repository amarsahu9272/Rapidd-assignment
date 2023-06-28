import React from 'react'
import './subsection3.css'
import mountain from '../Utilities/mountain.png'
import Button from '../Utilities/button'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


function Subsection3() {
    return (
        <div className='subsection3-wrapper'>
            <div className='subsection3'>
                <img className='image-subsection3' src={mountain} alt='mountain' />
                <p>Adipiscing unde vel so dolore consequatur.</p>
                <Button icons={ShareOutlinedIcon} text="Ispum Lorem" section="subsection3-b" />
            </div>
        </div>
    )
}

export default Subsection3
