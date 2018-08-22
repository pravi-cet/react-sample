import React from 'react';
import personclass from './Person.css';

const Person = (props) => {
  return (
    <div className={personclass.Person}>
    <p onClick={props.click}>I am a {props.name} and I am {props.age}</p>
    <p>{props.children}</p>
    <input ref={(inp) => {this.inputElement = inp}} type="text" onChange={props.changeHappened} value={props.name}/>
    </div>
    )
}

export default Person;
