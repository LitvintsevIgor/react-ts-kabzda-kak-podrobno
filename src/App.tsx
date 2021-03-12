import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffValue, setOnOffValue] = useState<boolean>(false)

    return (
        <div className={"app"}>
            {/*<Accordion titleValue={"Menu"} collapsed={true} />*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[
                           {title: "Igor", value: 1},
                           {title: "Petr", value: 8},
                           {title: "Ivan", value: 3}
                       ]}
                       onClick={() => alert("hello")}/>
            {/*<UncontrolledRating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating />*/}
            {/*<UncontrolledOnOff onChange={setOnOffValue}/> {onOffValue.toString()}*/}
            {/*<UncontrolledAccordion titleValue={"Blabla"}/>*/}
            {/*<OnOff onOffValue={onOffValue} setOnOffValue={setOnOffValue}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true} />*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}

            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<Rating />*/}
            {/*<Rating />*/}
            {/*<Rating />*/}
            {/*<Rating />*/}
            {/*<Rating />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
