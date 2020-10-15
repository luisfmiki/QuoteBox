import React from 'react';
import logo from './logo.svg';
import './App.css';
const quotes = [
  {quote: "I should have no objection to go over the same life from its beginning to the end: requesting only the advantage authors have, of correcting in a second edition, the faults of the first.", auth: "-Benjamin Franklin"}, 
  {quote:"When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.",auth:"-Joseph Campbell"}, 
  {quote:"Our truest life is when we are in our dreams awake.",auth:"-Henry David Thoreau"}, 
  {quote:"Until quite recently dance in America was the ragged Cinderella of the arts.",auth:"-Shana Alexander"}
]
const cores = ["red", "green", "blue", 'black', 'orange']

const Frase = (props) => {
  return (
    <div>
    <span style={props.style} className="Frases">{props.frase}</span>
    <p style={props.style} className="Autor">{props.autor}</p>
    </div>
  )
}

class Frases extends React.Component {
  constructor() {
    super();
    this.state = {
      frase: quotes[0].quote,
      autor: quotes[0].auth,
      ordem: 1,
      cor: cores[0]
    }
    this.mudarOrdem = this.mudarOrdem.bind(this)
  }
  mudarOrdem() {
     this.setState(() => {
       if(this.state.ordem < 4){
         return {ordem: this.state.ordem + 1, frase: quotes[this.state.ordem].quote, autor: quotes[this.state.ordem].auth, cor: cores[this.state.ordem]}
       } else {
         return {ordem: 1, frase: quotes[0].quote, autor: quotes[0].auth, cor: cores[0]}
       }
     })
  }
  render() {
    console.log(this.state.ordem)
    console.log(this.state.cor)
    return (
      <div className="div">
      <Frase style={{color: this.state.cor}} frase={this.state.frase} autor={this.state.autor} />
      <button style={{backgroundColor: this.state.cor}}className="btn" onClick={this.mudarOrdem}>New Quote</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Frases />
    </div>
  );
}

export default App;
