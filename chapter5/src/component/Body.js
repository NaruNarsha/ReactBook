import "./Body.css";

function Body(props) {
    
    const {name, location, fovoriteList} = props;
    console.log(name, location);

    return (
        <div className = "body">
            {name}님, 안녕하세요! {location}에 오신 것을 환영합니다.
        
            <br />
                {fovoriteList.length}개의 좋아하는 취미가 있습니다.
        </div>
    );
}

export default Body;