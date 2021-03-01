import React from "react";

export type OnOffPropsType = {
    onOffValue: boolean
    setOnOffValue: (onOffValue: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    // console.log("OnOff rendering");

    // console.log("on: " + on)

    const onBtn = {
        border: "1px solid black",
        padding: "10px 40px",
        display: "inline-block",
        backgroundColor: props.onOffValue ? "green" : "white"
    }
    const offBtn = {
        border: "1px solid black",
        padding: "10px 40px",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: !props.onOffValue ? "red" : "white"
    }
    const indicator = {
        width: "15px",
        height: "15px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.onOffValue ? "green" : "red"
    }

    return (
        <div>
            <div style={onBtn} onClick={ () => {props.setOnOffValue(true)} } >On</div>
            <div style={offBtn} onClick={ () => {props.setOnOffValue(false)} }>Off</div>
            <div style={indicator}></div>
        </div>
    )
}