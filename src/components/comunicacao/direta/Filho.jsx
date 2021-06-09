import React from 'react'

const filho = props =>
    <div>
        <h3>Componente Filho</h3>
        <h4>{props.children} - {props.sobrenome}</h4>
    </div>

export default filho;