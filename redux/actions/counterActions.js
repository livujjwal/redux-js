// create a function for each action and return a obj form

import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js"

export const increment = (value) => {
    return {
        type : INCREMENT,
        value: value
    }
}
export const decrement = (value) => {
    return {
        type : DECREMENT,
        value: value

    }
}
export const reset = (value) => {
    return {
        type : RESET,
        value : value
    }
}