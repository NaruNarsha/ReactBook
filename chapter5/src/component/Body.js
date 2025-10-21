import "./Body.css";

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

function Body(){
    function handleOnClick(e){
        console.clear();
        console.log(e);
        console.log(e.target.name)
    }

    return (
        <div className = "body">
            <button name="A버튼" onClick={handleOnClick}>
                A버튼
            </button>
            <button name="B버튼" onClick={handleOnClick}>
                B버튼
            </button>
        </div>
    );
}



export default Body;