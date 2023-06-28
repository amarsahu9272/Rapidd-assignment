import React from 'react'
import './section1.css'
import Button from '../Utilities/button'
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
                    <Button icons={MailOutlineIcon} text="Ispum Lorem" section="section1-b"/>
                    <Button icons={ShareOutlinedIcon} text="Ispum Lorem" section="section2-b"/>
                    <Button icons={LocationOnOutlinedIcon} text="Ispum Lorem" section="section3-b"/>
                </div>
            </div>
        </div>
    )
}

export default Section1
