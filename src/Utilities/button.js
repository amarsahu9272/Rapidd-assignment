import React from 'react'
import './button.css';

function Button(props) {
    return (
        <div>
            <button className={`btn ${props.section}`}><span><props.icons /></span> <span>{props.text}</span></button>
        </div>
    )
}

export default Button
