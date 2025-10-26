import {useState} from "react";

const Controller = ({handleChangeCount}) => {
    return(
        <div>
            <button onClick = {() => handleChangeCount(-1)}>-1</button>
            <button onClick = {() => handleChangeCount(-10)}>-10</button>
            <button onClick = {() => handleChangeCount(-100)}>-100</button>
            <button onClick = {() => handleChangeCount(+100)}>+100</button>
            <button onClick = {() => handleChangeCount(+10)}>+10</button>
            <button onClick = {() => handleChangeCount(+1)}>+1</button>
        </div>
    );
};

export default Controller;