import React from 'react';
<<<<<<< HEAD:src/components/Persons/Person/Person.js
import personclass from './Person.css';

const Person = (props) => {
  return (
    <div className={personclass.Person}>
=======
import cssClasses from './Person.css';

const Person = (props) => {
  return (
    <div className={cssClasses.Person}>
>>>>>>> 68a0f93658f0fd1b86a54b22ae71d827408a11f5:src/Person/Person.js
    <p onClick={props.click}>I am a {props.name} and I am {props.age}</p>
    <p>{props.children}</p>
    <input ref={(inp) => {this.inputElement = inp}} type="text" onChange={props.changeHappened} value={props.name}/>
    </div>
    )
}

export default Person;
