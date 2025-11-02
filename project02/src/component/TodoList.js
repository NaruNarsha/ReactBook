import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList({ todo }) {
    return (
        <div className = "TodoList">
            <h4>TodoList Component</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {todo.map((it) => (
                    <TodoItem {...it} />
                ))}
            </div>
        </div>
    );
};


export default TodoList;