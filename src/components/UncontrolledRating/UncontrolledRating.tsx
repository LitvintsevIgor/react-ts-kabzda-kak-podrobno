import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} setRatingValue={ () => {setValue(1); props.onChange(1)}} />
            <Star selected={value > 1} setRatingValue={ () => {setValue(2); props.onChange(2)}} />
            <Star selected={value > 2} setRatingValue={ () => {setValue(3); props.onChange(3)}} />
            <Star selected={value > 3} setRatingValue={ () => {setValue(4); props.onChange(4)}} />
            <Star selected={value > 4} setRatingValue={ () => {setValue(5); props.onChange(5)}} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingValue: () => void

}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={ () => props.setRatingValue()}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}


// function Star(props: StarPropsType) {
//     console.log("Star rendering")
//     if (props.selected) {
//         return <span><b>star</b> </span>
//     } else {
//         return <span>star </span>
//     }
// }