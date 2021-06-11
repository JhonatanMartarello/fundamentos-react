import React from 'react'

const filho = props => {

    return (
        <div>
            <button onClick={() => {
                props.onClicar(Math.random(), 'Gerado')
            }}>Alterar</button>
        </div>
    )
}
    
    

export default filho;