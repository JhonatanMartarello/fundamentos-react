import React from 'react'

const comFilhos = props =>
    <div>
        <h2>Os Filhos:</h2>
        <div>
            {props.children}
        </div>

    </div>

export default comFilhos;