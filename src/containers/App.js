import React, { Component } from 'react';
<<<<<<< HEAD:src/containers/App.js
import classpack from './App.css';
import Persons  from '../components/Persons/Persons';
import Cockpit  from '../components/Cockpit/Cockpit';
=======
import cssClasses from './App.css';
import Person  from './Person/Person';
>>>>>>> 68a0f93658f0fd1b86a54b22ae71d827408a11f5:src/App.js

class App extends Component {
state = {
persons : [
  {id: "abcd1", name:"A", age:21},
  {id: "abcd2", name:"B", age:20},
  {id: "abcd3", name:"C", age:19}
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

changeNameHandler = (event, id) => {
// find the index where id matches
  const currPersonIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })

  // copy this person object to a local variable
  const currPerson = [
    ...this.state.persons[currPersonIndex]
  ];

  // copy the text from textbox
  currPerson.name = event.target.value;
  currPerson.age = this.state.persons[currPersonIndex].age;
  // clone the state object before changing and change it
  const personsCopy = [...this.state.persons];
  personsCopy[currPersonIndex] = currPerson;
  this.setState({persons: personsCopy});
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.splice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler}/>
      );

  }
    return (
<<<<<<< HEAD:src/containers/App.js
      <div className={classpack.App}>
      <Cockpit showPersons={this.showPersonsHandler} persons={this.state.persons} />
=======
      <div className={cssClasses.App}>
      <h1>This is a react app</h1>
      <button style={style} onClick={this.showPersonsHandler}>Toggle Name</button>
>>>>>>> 68a0f93658f0fd1b86a54b22ae71d827408a11f5:src/App.js
      {persons}
      </div>

    );
  }
}

export default App;
