import React, { Component } from 'react';
import './App.css';
import Person  from './Person/Person';

class App extends Component {
state = {
persons : [
  {name:"A", age:21},
  {name:"B", age:20},
  {name:"C", age:19}
]
};
switchNameHandler = (newName) => {
  this.setState(
    {
      persons : [{name:newName, age:21},
      {name:"Boogy", age:20},
      {name:"C", age:19}]

    }
  );
}
  render() {
    return (
      <div className="App">
      <h1>This is a react app</h1>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <button onClick={() => this.switchNameHandler('NameAsParam')}>Swich Name</button>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, "PName")}/>
      </div>
    );
  }
}

export default App;
