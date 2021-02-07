import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);

  console.log(done, unDone);

  return (
    <div className ='allTodo'>
      <AddTodo />
      <div >
        <FilterTodo setDone={setDone} setUndone={setUndone} />
      </div>

      <TodoList done={done} unDone={unDone} />
    </div>
  );
}

export default App;
