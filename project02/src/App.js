import './App.css';
import { useState } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";


const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime()
  },
    {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime()
  },
    {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime()
  },
];


function App() {

  const [todo, setTodo] = useState(mockTodo);

  function onCreate(content){
    const newItem = {
      id:0,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
  };



  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
    );
}

export default App;
