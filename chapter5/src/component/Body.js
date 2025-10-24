import "./Body.css";
//import { useState } from "react";
import { useRef, useState } from "react";


// function Body( {name, location, favorList = []}) {

//     console.log(name, location, favorList);

//     return (
//         <div className = "body">
//             {name}님, 안녕하세요! {location}에 오신 것을 환영합니다.

//             <br />
//                 {favorList.length}개의 좋아하는 취미가 있습니다.
//         </div>
//     );
// }


// Body.defaultProps = {
//     favorList: [],
// };

//==============================================================================

// function Body({children}) {
//     console.clear();
//     console.log(children);
//     return <div className = "body">{children}</div>;
// }


//==============================================================================


// function Body(){
//     function handleOnClick(){
//         alert("버튼이 클릭되었습니다.");
//     }

//     return (
//         <div className="body">
//             <button onClick = {handleOnClick}>클릭하세요</button>
//         </div>
//     )
// }

//==============================================================================

// function Body(){
//     function handleOnClick(e){
//         console.clear();
//         console.log(e);
//         console.log(e.target.name)
//     }

//     return (
//         <div className = "body">
//             <button name="A버튼" onClick={handleOnClick}>
//                 A버튼
//             </button>
//             <button name="B버튼" onClick={handleOnClick}>
//                 B버튼
//             </button>
//         </div>
//     );
// }

//==============================================================================


// function Body(){
//     console.log("Update");
//     const [count, setCount] = useState(0);

//     // const onIncrease = () => {
//     //     setCount(count + 1);
//     // }

//     function onIncrease(){
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={onIncrease}>+</button>
//         </div>
//     );
// }


//==============================================================================


// function Body(){
//     //console.clear();
//     console.log("Render Body Component");

//     const [date, setText] = useState("");

//     const handleOnChange = (e) => {
//         console.log("변경된 값: ", e.target.value);
//         setText(e.target.value);
//     }

//     return (
//         <div>
//             <input type = "date" value = {date} onChange={handleOnChange} />
//             <div>{date}</div>
//         </div>
//     );
// }


//==============================================================================

// function Body(){
//     //console.clear();
//     console.log("Render Body Component");

//     const [option, setOption] = useState("");

//     // const handleOnChange = (e) => {
//     //     console.log("변경된 값: ", e.target.value);
//     //     setOption(e.target.value);
//     // }

//     function handleOnChange(e){
//         console.log("변경된 값: ", e.target.value);
//         setOption(e.target.value);
//     }

//     return (
//         <div>
//             <select value ={option} onChange={handleOnChange}>
//                 <option value={"1번"}>1번</option>
//                 <option value={"2번"}>2번</option>
//                 <option value={"3번"}>3번</option>
//             </select>
//         </div>
//     );
// }

//==============================================================================

// function Body(){
//     const [text, setText] = useState("");

//     function handleOnChange(e){
//         console.log("변경된 값: ", e.target.value);
//         setText(e.target.value);
//     }


//     return (
//         <div>
//             <textarea value={text} onChange={handleOnChange} />
//             <div>{text.length} / 200</div>
//         </div>
//     );
// }



//==============================================================================
// 여러 개의 사용자 입력 관리하기

// function Body(){

//     const [state, setState] = useState({
//         name: "",
//         gender: "",
//         birth: "",
//         bio: "",
//     });

//     function handleOnChange(e){
//         console.log("현재 수정 대상: ", e.target.name);
//         console.log("수정값: ", e.target.value);
        
//         setState({
//             ...state,
//             [e.target.name]: e.target.value,
//         });
//     };

//     return (
//         <div>
//             <div>
//                 <input name="name" value={state.name} onChange={handleOnChange} placeholder ="이름" />
//             </div>
//             <div>
//                 <select name="gender" value={state.gender} onChange={handleOnChange}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option> 
//                 </select>


//             </div>
//             <div>
//                 <input type="date" name="birth" value={state.birth} onChange={handleOnChange} />
//             </div>
//         </div>
//     );
//}


//==============================================================================
// Props와 State

/*
function Viewer({number}){
    return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3> }</div>
}


function Body(){

    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };

    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <h2>{number}</h2>
            <Viewer number = {number} />

            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}
*/




//==============================================================================
// P240 State와 자식 컴포넌트
/*
function Viewer(){
    console.log("Viewer component update");
    return <div>Viewer</div>
}


function Body(){
    const [number, setNumber] = useState(0);

    function onIncrease(){
        setNumber(number + 1);
    };

    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <h2>{number}</h2>
            <Viewer />
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    )
}
*/





//==============================================================================
// Ref 

/*
function Body(){
    const [text, setText] = useState("");

    const handleOnChange = (e) =>{
        setText(e.target.value);
    };

    const handleOnClick = () => {
        alert(text);
    };

    return (
        <div>
            <input value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}
*/


function Body(){
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    // function handleOnClick(){
    //     alert(text);
    //     textRef.current.value = "";
    // };

    function handleOnClick(){

        console.log(text.length);

        if(text.length < 5){
            textRef.current.focus();
        }
        else{
            alert(text);
            setText("");
        }
    }


    return (
        <div>
            <input ref={textRef} value={text} onChange ={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );

}



export default Body;