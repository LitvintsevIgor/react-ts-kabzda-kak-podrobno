import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react/types-6-0";

const GetCategoryObj = (categoryName: "Color" | "Event" | "Main") => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: "color",
            ...GetCategoryObj("Color")
        },
        onChange: {
            ...GetCategoryObj("Event")
        },
        onClick: {
            ...GetCategoryObj("Event")
        },
        items: {...GetCategoryObj("Main")},
        collapsed: {...GetCategoryObj("Main")},
        titleValue: {...GetCategoryObj("Main")}
    }
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked ");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callBackProps = {
    onChange: callback,
    onClick: onClickCallback
}


export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callBackProps,
    titleValue: "Menu",
    collapsed: true,
    items: []
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callBackProps,
    titleValue: "Users",
    collapsed: false,
    items: [
        {title: "Igor", value: 1},
        {title: "Petr", value: 2},
        {title: "Ivan", value: 3}
    ]
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>;
}
ModeChanging.args = {
    titleValue: "Users",
    items: [
        {title: "Igor", value: 1},
        {title: "Petr", value: 8},
        {title: "Ivan", value: 3}
    ],
    onClick: (value) => alert(`user with ID ${value} should be happy`)
}
