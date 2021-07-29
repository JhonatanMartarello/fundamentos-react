import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

const app = () => (
    <div className="App">
        <h2>Fundamentos React</h2>
        <div className="Cards">
            <Card titulo="#12 - Mega" color="#73503C">
                <Mega qtdNumero={8}></Mega>
            </Card>
            <Card titulo="#11 - Contador" color="#FF66CC">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#10 - Formulario Input" color="#CCCCCC">
                <Input></Input>
            </Card>
            <Card titulo="#9 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#8 - Comunicação Direta" color="#660066">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#7 - Condicional Com IF" color="#FA6900">
                <CondicionalComIf numero={14}></CondicionalComIf>
            </Card>
            <Card titulo="#6 - Condicional" color="#00C8F8">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#5 - Condicional" color="#E94C6F">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#4 - Repetição" color="#DE4D4E">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#3 - Com Filhos" color="#FFC33C">
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
            <Card titulo="#2 - Com Parâmetros" color="#DE593A">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            </Card>
            <Card titulo="#1 - Primeiro Componente" color="#FF85CB">
                <Primeiro />
            </Card>
        </div>
    </div>
);

export default app;