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

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.splice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}/>
        })}
        </div>
      )
    }
    return (
      <div className="App">
      <h1>This is a react app</h1>
      <button style={style} onClick={this.showPersonsHandler}>Toggle Name</button>
      {persons}
      </div>

    );
  }
}

export default App;
