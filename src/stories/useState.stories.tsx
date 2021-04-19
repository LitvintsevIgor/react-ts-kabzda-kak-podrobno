import React, {useMemo, useState} from "react";

export default  {
    title: 'useState demo'
}


function generateData() {
    console.log("generate data")
    //difficult counting
    return 896896897;
}

export const Example1 = () => {

    // const initValue = useMemo(generateData, []);

    console.log("example")
    const [counter, setCounter] = useState<number>(generateData);

    const changer = (state: number) => {
        debugger
        return state + 1
    }

    return <>
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </>
}