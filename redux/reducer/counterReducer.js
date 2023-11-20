import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes.js"

const initialState = 0;

const counterReducer = (state=initialState, action) => {
         switch (action.type) {
            case INCREMENT: return state + action.value
            case DECREMENT: return state - action.value
            case RESET: return initialState
           
            default: return state
         }
}

export default counterReducer;