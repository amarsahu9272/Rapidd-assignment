import React from 'react'
import './subsection4.css'
import Button from '../Utilities/button'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Subsection4() {
  return (
    <div className='subsection4-wrapper'>
      <div className='subsection4'>
        <div>
          <h1>--</h1>
          <div subsection4-btm>
            <h3>Esse aliquip do, magni!</h3>
            <Button icons={ShoppingCartOutlinedIcon} text="Ispum Lorem" section="section4-b" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subsection4
