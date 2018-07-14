import React, { Component } from 'react';
import './App.css';
import Person  from './Person/Person';

class App extends Component {
state = {
persons : [
  {name:"A", age:21},
  {name:"B", age:20},
  {name:"C", age:19}
],
showPersons: false
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

//Toggle the show/hide for persons
showPersonsHandler = () => {
  const currState = this.state.showPersons;
  this.setState({showPersons: !currState});
}

changeNameHandler = (event) => {
  this.setState(
    {
      persons : [{name:"ABC", age:21},
      {name:event.target.value, age:20},
      {name:"C", age:19}]

    }
  );
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
      <h1>This is a react app</h1>
      <button style={style} onClick={this.showPersonsHandler}>Swich Name</button>
      {
        this.state.showPersons ?
      <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.changeNameHandler}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, "PName")}/>
      </div>
      : null
    }
      </div>

    );
  }
}

export default App;
