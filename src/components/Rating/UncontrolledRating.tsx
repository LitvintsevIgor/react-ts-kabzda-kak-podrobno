import React, {useState} from "react";


type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setRatingValue={ () => {setValue(1)}} />
            <Star selected={value > 1} setRatingValue={ () => {setValue(2)}} />
            <Star selected={value > 2} setRatingValue={ () => {setValue(3)}} />
            <Star selected={value > 3} setRatingValue={ () => {setValue(4)}} />
            <Star selected={value > 4} setRatingValue={ () => {setValue(5)}} />
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