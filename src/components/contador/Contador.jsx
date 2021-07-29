import React from 'react'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

class Contador extends React.Component {
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         passo: props.passo,
    //         valor: 0
    //     }
    // }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                
                <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}></PassoForm>         
                
                <Display valor={this.state.valor}></Display>
                
                <Botoes onIncrementar={this.incrementar} onDecrementar={this.decrementar}></Botoes>

            </div>
        )
    }
}

export default Contador;