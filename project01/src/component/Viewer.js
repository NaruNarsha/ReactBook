import { useState} from "react"

const Viewer = ({count}) =>{

    return (
        <div>
            <div> 현재 카운트: </div>
            <h0>{count}</h0>
        </div>
    );
};

export default Viewer;