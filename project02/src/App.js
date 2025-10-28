import './App.css';
import Header from "./component/Header";
import ToolEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <ToolEditor />
      <TodoList />
    </div>
    );
}

export default App;
