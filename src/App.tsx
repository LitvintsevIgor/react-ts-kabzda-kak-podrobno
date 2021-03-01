import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/UncontrolledRating/Rating";
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
                       onChange={ () => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}
            <UncontrolledOnOff onChange={setOnOffValue}/> {onOffValue.toString()}
            <UncontrolledAccordion titleValue={"Blabla"}/>
            {/*<OnOff onOffValue={onOffValue} setOnOffValue={setOnOffValue}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true} />*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{ props.title }</h1>
    )
}


export default App;
