import React from 'react'

const comParametro =  props => {
    return (
        <div>
            <button onClick={props.onIncrementar}> + </button>
            <button onClick={props.onDecrementar}> - </button>
        </div>
    )
}
   

export default comParametro;