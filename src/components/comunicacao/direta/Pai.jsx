import React from 'react'
import Filho from './Filho'

const pai = props =>
    <div>
        <Filho sobrenome="Silva"><strong>João</strong></Filho>
        <Filho {... props}>Maria</Filho>
        <Filho sobrenome={props.sobrenome}>Pedro</Filho>
    </div>

export default pai;