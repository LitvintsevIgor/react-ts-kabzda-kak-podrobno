import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
   return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value) }/>;
}