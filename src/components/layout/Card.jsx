import './Card.css'
import React from 'react'

const card = props =>
    <div className="Card" style={{borderColor: props.color || '#000'}}>
        <div className="Footer" style={{backgroundColor: props.color || '#000'}}>
            {props.titulo}
        </div>
        <div className="Content">
            {props.children}
        </div>        
    </div>

export default card;