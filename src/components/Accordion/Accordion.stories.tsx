import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked ");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[{title: "Igor", value: 1}, {title: "Petr", value: 2}, {title: "Ivan", value: 3}]}
                                                     onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
   return <Accordion titleValue={"Users"}
                     collapsed={value}
                     onChange={() => setValue(!value)}
                     items={[
                         {title: "Igor", value: 1},
                         {title: "Petr", value: 8},
                         {title: "Ivan", value: 3}
                         ]}
                     onClick={ (id) => alert(`user with ID ${id} should be happy`) }/>;
}