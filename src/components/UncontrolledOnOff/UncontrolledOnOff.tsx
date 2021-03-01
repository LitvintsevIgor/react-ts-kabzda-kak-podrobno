import React, {useState} from "react";

export type OnOffPropsType = {
    // onOffValue: boolean
    onChange: (onOffValue: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {

    console.log("OnOff rendering");

    let [on, setOn] = useState(false); // hook with init value

    console.log("on: " + on)

    const onBtn = {
        border: "1px solid black",
        padding: "10px 40px",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offBtn = {
        border: "1px solid black",
        padding: "10px 40px",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicator = {
        width: "15px",
        height: "15px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onBtn} onClick={onClicked}>On</div>
            <div style={offBtn} onClick={offClicked}>Off
            </div>
            <div style={indicator}></div>
        </div>
    )
}