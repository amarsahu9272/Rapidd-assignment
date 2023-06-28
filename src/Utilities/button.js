import React from 'react'
import './button.css';

function Button(props) {
    // let [icons, text] = props
    return (
        <div>
            <button className={`btn ${props.section}`}><props.icons/>{props.text}</button>
        </div>
    )
}

export default Button
