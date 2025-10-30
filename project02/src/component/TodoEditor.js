
/** 
 * useState: 입력값 상태 관리
 * useRef: DOM 요소 직접 접근용 (input 포커스 제어)
 */ 
import "./TodoEditor.css";
import { useState, useRef } from "react";


/**
 * onCreate: 부모(App)로부터 전달받은 할 일 추가 함수
 */
const TodoEditor = ({ onCreate }) => {

    console.log("TodoEditor 렌더링됨");

    /**
     * State 선언
     * 사용자가 입력하는 할 일 내용을 실시간으로 저장
     * 초기값: 빈 문자열 ""
     */
    const [content, setContent] = useState("");

    /**
     * Ref 선언
     * 할 일 입력 input 요소에 접근하기 위한 참조 변수
     * 초기값을 지정하지 않아도 됨 (자동으로 undefined)
     */
    const inputRef = useRef();

    /**
     * onChangeContent - 입력 감지
     *  1. 사용자가 키보드로 "운" 입력
    ↓
        2. onChange 이벤트 발생
    ↓
        3. onChangeContent(e) 실행
    ↓
        4. console.log("운")
    ↓
        5. setContent("운")
    ↓
        6. content state 업데이트: "" → "운"
    ↓
        7. 컴포넌트 재렌더링
    ↓
        8. console.log("TodoEditor 렌더링됨")
    ↓
        9. input의 value={content}로 "운" 표시
     */
    const onChangeContent = (e) => {
        console.log(e.target.value);
        setContent(e.target.value);
    };


    /**
     * onSubmit - 제출 처리 ⭐ 핵심!
     */
    const onSubmit = () => {
        console.log("TodoEditor onSubmit 실행됨");

        // 빈 내용 검증 ⭐
        if(!content){
            console.log("내용이 비어있음");
            inputRef.current.focus();
            return
        }

        onCreate(content);
        setContent("");
    };


    /* 키보드 Enter키를 눌렀을 시 <추가> 버튼을 클릭한 것과 동일한 동작을 수행하는 키 입력 */ 
    // const onKeyDown = (e) => {
    //     if(e.keyCode === 13){
    //         onSubmit();
    //     }
    // }
    function onKeyDown(e){
        if(e.keyCode === 13){
            onSubmit();
        }
    }



    return (
        <div className = "TodoEditor">
            <h4>새로운 Todo 작성하기..</h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange = {onChangeContent}
                    onKeyDown= {onKeyDown}
                    placeholder="새로운 Todo...." 
                />
                <button onClick = {onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;


/**
 * ## 요약

    **핵심 기능:**
    1. ✅ **State 관리** (`useState`): 입력값 실시간 저장
    2. ✅ **Ref 사용** (`useRef`): DOM 직접 접근 (포커스 제어)
    3. ✅ **제어 컴포넌트**: React가 input 값 완전 제어
    4. ✅ **유효성 검증**: 빈 내용 체크
    5. ✅ **부모 통신**: onCreate로 데이터 전달

    **데이터 흐름:**
    ```
    사용자 입력 → onChange → setContent → state 업데이트 
    → 재렌더링 → value 반영 → 버튼 클릭 → 검증 
    → onCreate 호출 → 부모 업데이트
 */