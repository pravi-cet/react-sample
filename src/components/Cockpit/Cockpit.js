import React from 'react';
import classpack from './Cockpit.css';

const cockpit = (props) => {

  let btnClass = '';
  if (props.showPersons ===true)
        btnClass = classpack.Red;
  return (<div>
    <h1>This is a react app</h1>
  <button className={btnClass} onClick={props.showPersons}>Toggle Name</button></div>);
}

export default cockpit;
