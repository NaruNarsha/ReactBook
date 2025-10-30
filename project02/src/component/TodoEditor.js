import "./TodoEditor.css";
import { useState } from "react";

const TodoEditor = ({ onCreate }) => {

    console.log("TodoEditor 렌더링됨");

    const [content, setContent] = useState("");
    
    const onChangeContent = (e) => {
        console.log(e.target.value);
        setContent(e.target.value);
    };


    const onSubmit = () => {
        console.log("TodoEditor onSubmit 실행됨");

        onCreate(content);
    };

    return (
        <div className = "TodoEditor">
            <h4>새로운 Todo 작성하기..</h4>
            <div className="editor_wrapper">
                <input
                    value={content}
                    onChange = {onChangeContent}
                    placeholder="새로운 Todo...." 
                />
                <button onClick = {onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;