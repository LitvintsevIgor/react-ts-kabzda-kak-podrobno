import React from "react";


type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened (not collapsed)
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * Color of header text
     */
    color: string
}

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} color={props.color}
                                onChange={props.onChange}/>
                { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
};


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 style={{color: props.color ? props.color : "black"}} onClick={ (e) => props.onChange()}>--- {props.title} ---</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            { props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li> ) }
        </ul>
    )
}

export default Accordion;