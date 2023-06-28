import React from 'react'
import './subsection2Left.css'
import mountain from '../Utilities/mountain.png'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


function Subsection2Left() {
    return (
        <div className='subsection2Left'>
            <img className='image-left' src={mountain} alt='mountain' />
            <div className='subsection2Left-btm'>
                <span><ShareOutlinedIcon />Ipsum Lorem</span>
                <span><ShareOutlinedIcon />Ipsum Lorem</span>
                <span><ShareOutlinedIcon />Ipsum Lorem</span>
            </div>
        </div>
    )
}

export default Subsection2Left
