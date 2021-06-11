import React from 'react'
import './Contador.css'

class Contador extends React.Component {
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
        this.state.valor++
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

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <div>
                    <label for="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} 
                        onChange={e => this.setState({passo: +e.target.value})} />
                </div>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.decrementar}>-</button>
                </div>
            </div>
        )
    }
}

export default Contador;