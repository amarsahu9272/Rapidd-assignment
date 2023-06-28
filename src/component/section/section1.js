import React from 'react'
import './section1.css'
import Button from '../../Utilities/button'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Section1() {
    return (
        <div className='section1'>
            <p>Proident anim <b>nor nulla iste.</b></p>
            <div className='section1-sub'>
                <h6>Minim modi yet omnis nor quia so minima</h6>
                <div className='section1-btn'>
                    <Button icons={MailOutlineIcon} text="Ispum Lorem" />
                    <Button icons={ShareOutlinedIcon} text="Ispum Lorem" />
                    <Button icons={LocationOnOutlinedIcon} text="Ispum Lorem" />
                </div>
            </div>
        </div>
    )
}

export default Section1
