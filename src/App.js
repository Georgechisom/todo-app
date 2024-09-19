import './App.css';
import Todo from "./components/Todo";
import './index.js'
import Form from './components/Form.js';
import FilterButton from './components/FilterButton.js';
import { useState } from "react";


function App(props) {

  function addTask(name) {
    alert(name);
  };
  
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks?.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
        
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
