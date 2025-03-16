import React from "react";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-5">
        <h1 className="text-4xl font-extrabold">Learn About Redux Toolkit.</h1>
        <AddTodo />
      </div>
      <div className="w-1/2 p-5">
        <Todos />
      </div>
    </div>
  );
};

export default App;
