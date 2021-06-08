import React from 'react'

import './App.css'
import Primeiro from './components/Primeiro';
// import FuncaoAnonima from './components/FuncaoAnonima';
import ArrowFunction from './components/ArrowFunction';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';


export default props => (
    <div className="App">
        <Card titulo="#7 - Condicional Com IF">
            <CondicionalComIf numero={14}></CondicionalComIf>
        </Card>
        <Card titulo="#6 - Condicional">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#5 - Condicional">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#4 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#3 - Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                    <li>Eduardo</li>
                </ul>
            </ComFilhos>
        </Card>    
        <Card titulo="#2 - Com Parâmetros">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="#1 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
);