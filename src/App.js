import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frank',
          id: 'a1'
        },
        {
          name: 'Fran',
          id: 'a2'
        },
        {
          name: 'Fra',
          id: 'a2'
        },
      ]
    };

  }

  render() {
    return (
    <div className="App">
     {
       this.state.monsters.map(monster => (
         <h1 key={monster.id}> {monster.name} </h1>
       ))
     }
    </div>
  );
  }
}

export default App;
