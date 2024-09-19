import React from 'react'
import { useState } from "react";

  
function Form(props) {

    const [name, setName] = useState("learning this")

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask("Todo task");
        props.onSubmit("Say hello!");
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Tasks that needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
  )
}

export default Form