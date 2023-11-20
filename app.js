import { increment,decrement,reset } from "./redux/actions/counterActions.js";
import store from "./redux/store.js";

// store => 1. getState -> initial value of state

console.log("initial value of state",store.getState());
store.dispatch(increment(100))
console.log("inc value",store.getState());
store.dispatch(decrement(10))
console.log("decre value",store.getState());

store.dispatch(reset())
console.log("reset value",store.getState());