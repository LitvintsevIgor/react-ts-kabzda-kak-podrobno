import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true", () => {

    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // except
    expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", () => {

    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // except
    expect(newState.collapsed).toBe(false)
})

test("should be error", () => {

    // data
    const state: StateType = {
        collapsed: true
    }

    // action


    // except
    expect( () => {reducer(state, {type: "FAKE_TYPE"})}).toThrowError()
})